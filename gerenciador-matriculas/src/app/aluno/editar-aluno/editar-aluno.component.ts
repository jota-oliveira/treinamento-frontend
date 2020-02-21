import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { AlunoService } from 'aluno/services/aluno.service';
import { AlunoServiceResponses } from 'aluno/services/aluno.service.responses.interface';
import { PoNotificationService, PoNotification, PoToasterOrientation } from '@portinari/portinari-ui';
import { FormAlunoComponent } from 'aluno/form-aluno/form-aluno.component';
import { Aluno } from 'aluno/entities/aluno';

@Component({
  selector: 'app-editar-aluno',
  templateUrl: './editar-aluno.component.html',
  styleUrls: ['./editar-aluno.component.css']
})
export class EditarAlunoComponent implements OnInit {

  @Input() aluno: Aluno = null;
  @ViewChild(FormAlunoComponent, { static: false }) formComponent: FormAlunoComponent;

  public processandoRequisicao = false;

  constructor(
    private service: AlunoService,
    public poNotification: PoNotificationService
  ) {}

  ngOnInit() {
    if (!this.aluno) {
      throw new Error('Para iniciar o formulário de edição, é necessário instanciar um Aluno');
    }
  }

  public salvarAluno = (formAluno: any): void => {
    this.mostrarTelaDeCarregamento();

    this.service
      .postAluno(formAluno)
      .subscribe(
        (response: AlunoServiceResponses) => {
          this.enviarMensagemDeFeedback(response);
          this.formComponent.limparFormulario();
          this.fecharTelaDeCarregamento();
        },
        (error: AlunoServiceResponses) => {
          this.enviarMensagemDeFeedback(error);
          this.fecharTelaDeCarregamento();
        }
      );
  }

  private mostrarTelaDeCarregamento = () =>
    this.processandoRequisicao = true

  private fecharTelaDeCarregamento = () =>
    this.processandoRequisicao = false

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
