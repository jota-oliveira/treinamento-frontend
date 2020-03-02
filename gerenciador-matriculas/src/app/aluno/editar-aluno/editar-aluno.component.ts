import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
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

  private _aluno: Aluno = null;
  @Output() private alunoEditado: EventEmitter<Aluno> = new EventEmitter();

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

  get aluno(): Aluno {
    return this._aluno;
  }

  @Input() set aluno(aluno: Aluno) {
    this._aluno = aluno;
  }

  public salvarAluno = (formAluno: any): void => {
    this.mostrarTelaDeCarregamento();
    const aluno = Object.assign(this.aluno, formAluno);

    this.service
      .put(aluno)
      .subscribe(
        (response: ServiceHttpResponses) => {
          this.aluno = aluno;
          this.alunoEditado.emit(this.aluno);
          this.enviarMensagemDeFeedback(response);
          this.fecharTelaDeCarregamento();
        },
        (error: string) => {
          this.notificacao
            .mensagemErro(error);
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
