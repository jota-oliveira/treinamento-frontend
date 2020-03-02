import { Component, OnInit, ViewChild } from '@angular/core';
import { AlunoService } from 'aluno/services/aluno.service';
import { ServiceHttpResponses } from 'services/service.http.responses.interface';
import { NotificacaoService } from 'services/notificacoes/notificacao.service';
import { FormAlunoComponent } from 'aluno/form-aluno/form-aluno.component';

@Component({
  selector: 'app-criar-aluno',
  templateUrl: './criar-aluno.component.html',
  styleUrls: ['./criar-aluno.component.css']
})
export class CriarAlunoComponent implements OnInit {

  public processandoRequisicao = false;

  @ViewChild(FormAlunoComponent, {static: false}) formComponent: FormAlunoComponent;

  constructor(
    private service: AlunoService,
    private notificacao: NotificacaoService
  ) {}

  ngOnInit() {}

  public salvarAluno = (formAluno: any): void => {
    this.mostrarTelaDeCarregamento();

    this.service
      .postAluno(formAluno)
      .subscribe(
        (response: ServiceHttpResponses) => {
          this.enviarMensagemDeFeedback(response);
          this.formComponent.limparFormulario();
          this.fecharTelaDeCarregamento();
        },
        (error: ServiceHttpResponses) => {
          this.enviarMensagemDeFeedback(error);
          this.fecharTelaDeCarregamento();
        }
      );
  }

  private mostrarTelaDeCarregamento = () =>
    this.processandoRequisicao = true

  private fecharTelaDeCarregamento = () =>
    this.processandoRequisicao = false

  private enviarMensagemDeFeedback(response: ServiceHttpResponses): void {
    if (response.sucesso) {
      this.notificacao
        .mensagemSucesso(response.mensagem);
    } else {
      this.notificacao
        .mensagemErro(response.mensagem);
    }
  }

}
