import { Component, OnInit, Input, Output } from '@angular/core';
import { Turma } from 'turma/entities/turma';
import { TurmaDTO } from 'turma/entities/turma-dto.interface';
import { TurmaService } from 'turma/services/turma.service';
import { EventEmitter } from '@angular/core';
import { NotificacaoFactoryService } from 'services/notificacoes/notificacao-factory.service';

@Component({
  selector: 'app-grid-turma',
  templateUrl: './grid-turma.component.html',
  styleUrls: ['./grid-turma.component.css']
})
export class GridTurmaComponent implements OnInit {

  @Output() turmaRemovida: EventEmitter<TurmaDTO> = new EventEmitter();

  private _turmas: Turma[] = [];
  public processandoRequisicao = false;

  constructor(
    private turmaService: TurmaService,
    private notificacao: NotificacaoFactoryService
  ) { }

  ngOnInit() { }

  get turmas(): Turma[] {
    return [...this._turmas];
  }

  @Input() set turmas(value: Turma[]) {
    if (value) {
      this._turmas = value;
    }
  }

  get turmasComoObjeto(): TurmaDTO[] {
    return this.turmas.map(turma => turma.toObjectDTO());
  }

  get listaColunasGridTurmas(): any[] {
    return [
      { property: 'id', label: 'ID' },
      { property: 'descricao', label: 'Descrição' },
      { property: 'anoLetivo', label: 'Ano Letivo' },
      { property: 'periodoLetivo', label: 'Período Letivo' },
      { property: 'numeroVagas', label: 'Número de vagas' },
      // { property: 'alunos', label: '' },
      // { property: 'disciplinas', label: }
    ];
  }

  public deletarRegistro(turma: TurmaDTO): void {
    this.processandoRequisicao = true;

    this.turmaService.delete(turma.id).subscribe(
      _response => {
        this.removerTurmaDaLista(turma);
        this.turmaRemovida.emit(turma);
        this.processandoRequisicao = false;
      },
      erro => {
        this.notificacao.mensagemErro(erro);
        this.processandoRequisicao = false;
      }
    );
  }

  private removerTurmaDaLista(turma: TurmaDTO): void {
    this.turmas = this.turmas
      .filter(turmaDaLista => turmaDaLista.id !== turma.id);

    this.notificacao.mensagemSucesso('Turma removido com sucesso');
  }

}
