import { Component, OnInit, Input, Output } from '@angular/core';
import { Aluno } from 'aluno/entities/aluno';
import { AlunoDTO } from 'aluno/entities/aluno-dto.interface';
import { AlunoService } from 'aluno/services/aluno.service';
import { EventEmitter } from '@angular/core';
import { NotificacaoFactoryService } from 'services/notificacoes/notificacao-factory.service';

@Component({
  selector: 'app-grid-aluno',
  templateUrl: './grid-aluno.component.html',
  styleUrls: ['./grid-aluno.component.css']
})
export class GridAlunoComponent implements OnInit {

  @Output() alunoRemovido: EventEmitter<AlunoDTO> = new EventEmitter();

  private _alunos: Aluno[] = [];
  public processandoRequisicao = false;

  constructor(
    private alunoService: AlunoService,
    private notificacao: NotificacaoFactoryService
  ) {}

  ngOnInit() {}

  get alunos(): Aluno[] {
    return [...this._alunos];
  }

  @Input() set alunos(value: Aluno[]) {
    if (value) {
      this._alunos = value;
    }
  }

  get alunosComoObjeto(): AlunoDTO[] {
    return this.alunos.map(aluno => aluno.toObjectDTO());
  }

  get listaColunasGridAlunos(): any[] {
    return [
      { property: 'id', label: 'ID' },
      { property: 'nome', label: 'Nome' },
      { property: 'cpf', label: 'CPF' },
      { property: 'email', label: 'E-mail' },
      { property: 'matricula', label: 'Matrícula' }
    ];
  }

  public deletarRegistro(aluno: AlunoDTO): void {
    this.processandoRequisicao = true;

    this.alunoService.delete(aluno.id).subscribe(
      _response => {
        this.removerAlunoDaLista(aluno);
        this.alunoRemovido.emit(aluno);
        this.processandoRequisicao = false;
      },
      erro => {
        this.notificacao.mensagemErro(erro);
        this.processandoRequisicao = false;
      }
    );
  }

  private removerAlunoDaLista(aluno: AlunoDTO): void {
    this.alunos = this.alunos
      .filter(alunoDaLista => alunoDaLista.id !== aluno.id);

    this.notificacao.mensagemSucesso('Aluno removido com sucesso');
  }

}
