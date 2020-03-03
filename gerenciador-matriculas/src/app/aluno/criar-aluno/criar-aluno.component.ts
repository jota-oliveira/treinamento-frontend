import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { AlunoService } from 'aluno/services/aluno.service';
import { ServiceHttpResponses } from 'services/service.http.responses.interface';
import { NotificacaoFactoryService } from 'services/notificacoes/notificacao-factory.service';
import { FormAlunoComponent } from 'aluno/form-aluno/form-aluno.component';
import { Aluno } from 'aluno/entities/aluno';
import { HandleFormBaseComponent } from 'utils/forms/handle-form-base.component';

@Component({
  selector: 'app-criar-aluno',
  templateUrl: './criar-aluno.component.html',
  styleUrls: ['./criar-aluno.component.css']
})
export class CriarAlunoComponent extends HandleFormBaseComponent implements OnInit {

  public processandoRequisicao = false;

  @Output() alunoCriado: EventEmitter<Aluno> = new EventEmitter();
  @ViewChild(FormAlunoComponent, {static: false}) formComponent: FormAlunoComponent;

  constructor(
    private service: AlunoService,
    private notificacaoService: NotificacaoFactoryService
  ) {
    super(notificacaoService);
  }

  ngOnInit() {}

  public salvar = (formAluno: any): void => {
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

}
