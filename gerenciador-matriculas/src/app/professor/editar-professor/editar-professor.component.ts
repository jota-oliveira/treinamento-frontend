import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProfessorService } from 'professor/services/professor.service';
import { ServiceHttpResponses } from 'services/service.http.responses.interface';
import { NotificacaoFactoryService } from 'services/notificacoes/notificacao-factory.service';
import { Professor } from 'professor/entities/professor';
import { HandleFormBaseComponent } from 'utils/forms/handle-form-base.component';

@Component({
  selector: 'app-editar-professor',
  templateUrl: './editar-professor.component.html',
  styleUrls: ['./editar-professor.component.css']
})
export class EditarProfessorComponent extends HandleFormBaseComponent implements OnInit {

  private _professor: Professor = null;
  @Output() private professorEditado: EventEmitter<Professor> = new EventEmitter();
  public processandoRequisicao = false;

  constructor(
    private service: ProfessorService,
    private notificacaoService: NotificacaoFactoryService
  ) {
    super(notificacaoService);
  }

  ngOnInit() {
    if (!this.professor) {
      throw new Error('Para iniciar o formulário de edição é necessário instanciar um Professor');
    }
  }

  get professor(): Professor {
    return this._professor;
  }

  @Input() set professor(professor: Professor) {
    this._professor = professor;
  }

  public salvar = (formProfessor: any): void => {
    this.mostrarTelaDeCarregamento();

    const professor = Object.assign(this.professor, formProfessor) as Professor;

    this.service
      .put(this.professor.toObjectDTO())
      .subscribe(
        (response: ServiceHttpResponses) => {
          this.professor = professor;
          this.professorEditado.emit(this.professor);
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
}
