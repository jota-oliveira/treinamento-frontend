import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { NotificacaoFactoryService } from 'services/notificacoes/notificacao-factory.service';
import { DisciplinaDTO } from 'disciplina/entities/disciplina-dto.interface';
import { Disciplina } from 'disciplina/entities/disciplina';
import { DisciplinaService } from 'disciplina/services/disciplina.service';

@Component({
  selector: 'app-grid-disciplina',
  templateUrl: './grid-disciplina.component.html',
  styleUrls: ['./grid-disciplina.component.css']
})
export class GridDisciplinaComponent implements OnInit {

  @Output() disciplinaRemovida: EventEmitter<DisciplinaDTO> = new EventEmitter();

  private _disciplinas: Disciplina[] = [];
  public processandoRequisicao = false;

  constructor(
    private disciplinaService: DisciplinaService,
    private notificacao: NotificacaoFactoryService
  ) { }

  ngOnInit() {
  }

  get disciplinas(): Disciplina[] {
    return [...this._disciplinas];
  }

  @Input() set disciplinas(value: Disciplina[]) {
    if (value) {
      this._disciplinas = value;
    }
  }

  get disciplinasComoObjeto(): DisciplinaDTO[] {
    return this.disciplinas.map(disciplina => disciplina.toObjectDTO());
  }

  get listaColunasGridDisciplinas(): any[] {
    return [
      { property: 'id', label: 'ID' },
      { property: 'descricao', label: 'Descrição' },
      { property: 'sigla', label: 'Sigla' },
      { property: 'cargaHoraria', label: 'Carga horária' },
    ];
  }

  public deletarRegistro(disciplina: DisciplinaDTO): void {
    this.processandoRequisicao = true;

    this.disciplinaService.delete(disciplina.id).subscribe(
      _response => {
        this.removerDisciplinaDaLista(disciplina);
        this.disciplinaRemovida.emit(disciplina);
        this.processandoRequisicao = false;
      },
      erro => {
        this.notificacao.mensagemErro(erro);
        this.processandoRequisicao = false;
      }
    );
  }

  private removerDisciplinaDaLista(disciplina: DisciplinaDTO): void {
    this.disciplinas = this.disciplinas
      .filter(disciplinaDaLista => disciplinaDaLista.id !== disciplina.id);

    this.notificacao.mensagemSucesso('Disciplina removida com sucesso');
  }

}
