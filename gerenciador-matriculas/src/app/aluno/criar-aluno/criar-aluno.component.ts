import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { AlunoService } from 'aluno/services/aluno.service';
import { ServiceHttpResponses } from 'services/service.http.responses.interface';
import { NotificacaoService } from 'services/notificacoes/notificacao.service';
import { FormAlunoComponent } from 'aluno/form-aluno/form-aluno.component';
import { Aluno } from 'aluno/entities/aluno';

@Component({
  selector: 'app-criar-aluno',
  templateUrl: './criar-aluno.component.html',
  styleUrls: ['./criar-aluno.component.css']
})
export class CriarAlunoComponent implements OnInit {

  public processandoRequisicao = false;

  @Output() alunoCriado: EventEmitter<Aluno> = new EventEmitter();
  @ViewChild(FormAlunoComponent, {static: false}) formComponent: FormAlunoComponent;

  constructor(
    private service: AlunoService,
    private notificacao: NotificacaoService
  ) {}

  ngOnInit() {}

  public salvarAluno = (formAluno: any): void => {
    this.mostrarTelaDeCarregamento();

    const aluno = new Aluno({
      id: null,
      ...formAluno,
      turma: []
    });

    this.service
      .post(aluno.toObjectDTO())
      .subscribe(
        (response: ServiceHttpResponses) => {
          this.emitirAlunoCriado(response.detalhes, aluno);
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

  private emitirAlunoCriado(detalhes: any, aluno: Aluno): void {
    aluno.id = detalhes.id;
    this.alunoCriado.emit(aluno);
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
