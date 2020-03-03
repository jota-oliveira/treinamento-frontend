import { Component, OnInit, Input, Output } from '@angular/core';
import { Professor } from 'professor/entities/professor';
import { ProfessorDTO } from 'professor/entities/professor-dto.interface';
import { ProfessorService } from 'professor/services/professor.service';
import { EventEmitter } from '@angular/core';
import { NotificacaoFactoryService } from 'services/notificacoes/notificacao-factory.service';

@Component({
  selector: 'app-grid-professor',
  templateUrl: './grid-professor.component.html',
  styleUrls: ['./grid-professor.component.css']
})
export class GridProfessorComponent implements OnInit {

  @Output() professorRemovido: EventEmitter<ProfessorDTO> = new EventEmitter();

  private _professores: Professor[] = [];
  public processandoRequisicao = false;

  constructor(
    private professorService: ProfessorService,
    private notificacao: NotificacaoFactoryService
  ) { }

  ngOnInit() { }

  get professores(): Professor[] {
    return [...this._professores];
  }

  @Input() set professores(value: Professor[]) {
    if (value) {
      this._professores = value;
    }
  }

  get professoresComoObjeto(): ProfessorDTO[] {
    return this.professores.map(professor => professor.toObjectDTO());
  }

  get listaColunasGridProfessores(): any[] {
    return [
      { property: 'id', label: 'ID' },
      { property: 'nome', label: 'Nome' },
      { property: 'cpf', label: 'CPF' },
      { property: 'email', label: 'E-mail' },
      { property: 'titulacao', label: 'Titulação' }
    ];
  }

  public deletarRegistro(professor: ProfessorDTO): void {
    this.processandoRequisicao = true;

    this.professorService.delete(professor.id).subscribe(
      _response => {
        this.removerProfessorDaLista(professor);
        this.professorRemovido.emit(professor);
        this.processandoRequisicao = false;
      },
      erro => {
        this.notificacao.mensagemErro(erro);
        this.processandoRequisicao = false;
      }
    );
  }

  private removerProfessorDaLista(professor: ProfessorDTO): void {
    this.professores = this.professores
      .filter(professorDaLista => professorDaLista.id !== professor.id);

    this.notificacao.mensagemSucesso('Professor removido com sucesso');
  }

}
