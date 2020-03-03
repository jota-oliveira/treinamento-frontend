import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AlunoService } from 'aluno/services/aluno.service';
import { ServiceHttpResponses } from 'services/service.http.responses.interface';
import { NotificacaoFactoryService } from 'services/notificacoes/notificacao-factory.service';
import { Aluno } from 'aluno/entities/aluno';
import { HandleFormBaseComponent } from 'utils/forms/handle-form-base.component';

@Component({
  selector: 'app-editar-aluno',
  templateUrl: './editar-aluno.component.html',
  styleUrls: ['./editar-aluno.component.css']
})
export class EditarAlunoComponent extends HandleFormBaseComponent implements OnInit {

  private _aluno: Aluno = null;
  @Output() private alunoEditado: EventEmitter<Aluno> = new EventEmitter();

  public processandoRequisicao = false;

  constructor(
    private service: AlunoService,
    public notificacaoService: NotificacaoFactoryService
  ) {
    super(notificacaoService);
  }

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

  public salvar = (formAluno: any): void => {
    this.mostrarTelaDeCarregamento();
    const aluno = Object.assign(this.aluno, formAluno) as Aluno;

    this.service
      .put(aluno.toObjectDTO())
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

}
