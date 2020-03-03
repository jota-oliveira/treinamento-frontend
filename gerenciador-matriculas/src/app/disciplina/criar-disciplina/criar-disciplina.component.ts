import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { HandleFormBaseComponent } from 'utils/forms/handle-form-base.component';
import { NotificacaoFactoryService } from 'services/notificacoes/notificacao-factory.service';
import { Disciplina } from 'disciplina/entities/disciplina';
import { DisciplinaService } from 'disciplina/services/disciplina.service';
import { FormDisciplinaComponent } from 'disciplina/form-disciplina/form-disciplina.component';
import { ServiceHttpResponses } from 'services/service.http.responses.interface';

@Component({
  selector: 'app-criar-disciplina',
  templateUrl: './criar-disciplina.component.html',
  styleUrls: ['./criar-disciplina.component.css']
})
export class CriarDisciplinaComponent extends HandleFormBaseComponent implements OnInit {

  @Output() private disciplinaCriada: EventEmitter<Disciplina> = new EventEmitter();
  @ViewChild(FormDisciplinaComponent, { static: false }) formComponent: FormDisciplinaComponent;

  constructor(
    private service: DisciplinaService,
    notificacaoService: NotificacaoFactoryService
  ) {
    super(notificacaoService);
  }

  ngOnInit() {}

  public salvar = (formDisciplina: any): void => {
    this.mostrarTelaDeCarregamento();

    const disciplina = new Disciplina({
      id: null,
      ...formDisciplina,
      professor: null,
      turma: [],
    });

    this.service
      .post(disciplina.toObjectDTO())
      .subscribe(
        (response: ServiceHttpResponses) => {
          this.emitirDisciplinaCriada(response.detalhes, disciplina);
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

  private emitirDisciplinaCriada(detalhes: any, disciplina: Disciplina): void {
    disciplina.id = detalhes.id;
    this.disciplinaCriada.emit(disciplina);
  }



}
