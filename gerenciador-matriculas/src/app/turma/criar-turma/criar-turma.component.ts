import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { NotificacaoFactoryService } from 'services/notificacoes/notificacao-factory.service';
import { TurmaService } from 'turma/services/turma.service';
import { TurmaDTO } from 'turma/entities/turma-dto.interface';
import { ServiceHttpResponses } from 'services/service.http.responses.interface';
import { FormTurmaComponent } from 'turma/form-turma/form-turma.component';
import { HandleFormBaseComponent } from 'utils/forms/handle-form-base.component';
import { Turma } from 'turma/entities/turma';

@Component({
  selector: 'app-criar-turma',
  templateUrl: './criar-turma.component.html',
  styleUrls: ['./criar-turma.component.css']
})
export class CriarTurmaComponent extends HandleFormBaseComponent implements OnInit {

  @ViewChild(FormTurmaComponent, { static: false }) formComponent: FormTurmaComponent;
  @Output() objetoCriado: EventEmitter<Turma> = new EventEmitter();

  constructor(
    private turmaService: TurmaService,
    public notificacao: NotificacaoFactoryService
  ) {
    super(notificacao);
  }

  ngOnInit() {}

  public salvar = (turma: TurmaDTO): void => {
    this.mostrarTelaDeCarregamento();

    this.turmaService
      .post(turma)
      .subscribe(
        (response: ServiceHttpResponses) => {
          this.emitirTurmaCriada(response.detalhes, turma);
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

  private emitirTurmaCriada(detalhes: any, turma: TurmaDTO): void {
    turma.id = detalhes.id;
    const novaTurma = new Turma(turma);
    this.objetoCriado.emit(novaTurma);
  }

}
