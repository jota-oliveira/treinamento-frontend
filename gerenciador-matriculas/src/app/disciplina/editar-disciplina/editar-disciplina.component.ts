import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ServiceHttpResponses } from 'services/service.http.responses.interface';
import { NotificacaoFactoryService } from 'services/notificacoes/notificacao-factory.service';
import { HandleFormBaseComponent } from 'utils/forms/handle-form-base.component';
import { Disciplina } from 'disciplina/entities/disciplina';
import { DisciplinaService } from 'disciplina/services/disciplina.service';

@Component({
  selector: 'app-editar-disciplina',
  templateUrl: './editar-disciplina.component.html',
  styleUrls: ['./editar-disciplina.component.css']
})
export class EditarDisciplinaComponent extends HandleFormBaseComponent implements OnInit {

  private _disciplina: Disciplina = null;
  @Output() private disciplinaEditada: EventEmitter<Disciplina> = new EventEmitter();

  constructor(
    private service: DisciplinaService,
    protected notificacao: NotificacaoFactoryService
  ) {
    super(notificacao);
  }

  ngOnInit() {
    if (!this.disciplina) {
      throw new Error('Para iniciar o formulário de edição, é necessário instanciar uma Disciplina');
    }
  }

  get disciplina(): Disciplina {
    return this._disciplina;
  }

  @Input() set disciplina(disciplina: Disciplina) {
    this._disciplina = disciplina;
  }

  public salvar = (formDisciplina: any): void => {
    this.mostrarTelaDeCarregamento();

    const disciplina = Object.assign(this.disciplina, formDisciplina) as Disciplina;

    this.service
      .put(disciplina.toObjectDTO())
      .subscribe(
        (response: ServiceHttpResponses) => {
          this.disciplina = disciplina;
          this.disciplinaEditada.emit(this.disciplina);
          this.enviarMensagemDeFeedback(response);
          this.fecharTelaDeCarregamento();
        },
        (error: string) => {
          this.notificacao
            .mensagemErro(error);
          this.fecharTelaDeCarregamento();
        }
      )
  }

}
