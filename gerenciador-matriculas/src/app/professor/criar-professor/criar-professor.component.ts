import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { ProfessorService } from 'professor/services/professor.service';
import { ServiceHttpResponses } from 'services/service.http.responses.interface';
import { NotificacaoFactoryService } from 'services/notificacoes/notificacao-factory.service';
import { FormProfessorComponent } from 'professor/form-professor/form-professor.component';
import { Professor } from 'professor/entities/professor';
import { HandleFormBaseComponent } from 'utils/forms/handle-form-base.component';

@Component({
  selector: 'app-criar-professor',
  templateUrl: './criar-professor.component.html',
  styleUrls: ['./criar-professor.component.css']
})
export class CriarProfessorComponent extends HandleFormBaseComponent implements OnInit {

  public processandoRequisicao = false;

  @Output() professorCriado: EventEmitter<Professor> = new EventEmitter();
  @ViewChild(FormProfessorComponent, { static: false }) formComponent: FormProfessorComponent;

  constructor(
    private service: ProfessorService,
    private notificacaoService: NotificacaoFactoryService
  ) {
    super(notificacaoService);
  }

  ngOnInit() {}

  public salvar(formProfessor: any): void {
    this.mostrarTelaDeCarregamento();

    const professor = new Professor({
      id: null,
      ...formProfessor,
      disciplina: []
    });

    this.service
      .post(professor.toObjectDTO())
      .subscribe(
        (response: ServiceHttpResponses) => {
          this.emitirProfessorCriado(response.detalhes, professor);
          this.enviarMensagemDeFeedback(response);
          this.formComponent.limparFormulario();
          this.fecharTelaDeCarregamento();
        },
        (error: string) => {
          this.notificacao.mensagemErro(error);
          this.fecharTelaDeCarregamento();
        }
      );
  }

  private emitirProfessorCriado(detalhes: any, professor: Professor): void {
    professor.id = detalhes.id;
    this.professorCriado.emit(professor);
  }
}
