import { Component, OnInit } from '@angular/core';
import { AlunoService } from 'aluno/services/aluno.service';
import { AlunoServiceResponses } from 'aluno/services/aluno.service.responses.interface';
import { PoNotificationService, PoNotification, PoToasterOrientation } from '@portinari/portinari-ui';

@Component({
  selector: 'app-criar-aluno',
  templateUrl: './criar-aluno.component.html',
  styleUrls: ['./criar-aluno.component.css']
})
export class CriarAlunoComponent implements OnInit {

  public processandoRequisicao = false;

  constructor(
    private service: AlunoService,
    public poNotification: PoNotificationService
  ) {}

  ngOnInit() {}

  public salvarAluno = (formAluno: any): void => {
    this.mostrarTelaDeCarregamento();

    this.service
      .postAluno(formAluno)
      .subscribe(
        (response: AlunoServiceResponses) => {
          this.enviarMensagemDeFeedback(response);
          this.limparFormulario();
        },
        (error: AlunoServiceResponses) => {
          this.enviarMensagemDeFeedback(error);
          this.fecharTelaDeCarregamento();
        }
      );
  }

  private mostrarTelaDeCarregamento(): void {
    this.processandoRequisicao = true;
  }

  private fecharTelaDeCarregamento(): void {
    this.processandoRequisicao = false;
  }

  private limparFormulario(): void {
    console.log(`
      Disponibilizar no componente Form, um meio de limpá-lo
      por @inputDecorator...
    `);

    this.fecharTelaDeCarregamento();
  }

  private enviarMensagemDeFeedback(response: AlunoServiceResponses): void {
    const configuracaoNotificacao = this.getConfiguracaoDeNotificacoes(response.mensagem);

    if (response.sucesso) {
      this.poNotification
        .success(configuracaoNotificacao);
    } else {
      this.poNotification
        .error(configuracaoNotificacao);
    }
  }

  private getConfiguracaoDeNotificacoes(mensagem: string): PoNotification {
    const configuracaoNotificacao: PoNotification = {
      message: mensagem,
      orientation: PoToasterOrientation.Top
    };

    return configuracaoNotificacao;
  }

}
