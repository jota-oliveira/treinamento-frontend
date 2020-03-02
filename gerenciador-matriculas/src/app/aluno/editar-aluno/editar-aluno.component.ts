import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { AlunoService } from 'aluno/services/aluno.service';
import { ServiceHttpResponses } from 'services/service.http.responses.interface';
import { NotificacaoService } from 'services/notificacoes/notificacao.service';
import { Aluno } from 'aluno/entities/aluno';

@Component({
  selector: 'app-editar-aluno',
  templateUrl: './editar-aluno.component.html',
  styleUrls: ['./editar-aluno.component.css']
})
export class EditarAlunoComponent implements OnInit {

  @Input() aluno: Aluno = null;

  public processandoRequisicao = false;

  constructor(
    private service: AlunoService,
    public notificacao: NotificacaoService
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
        (response: ServiceHttpResponses) => {
          this.enviarMensagemDeFeedback(response);
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
