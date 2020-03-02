import { Component, OnInit, Input, Output } from '@angular/core';
import { Aluno } from 'aluno/entities/aluno';
import { AlunoDTO } from 'aluno/entities/aluno-dto.interface';
import { AlunoService } from 'aluno/services/aluno.service';
import { EventEmitter } from '@angular/core';
import { NotificacaoService } from 'services/notificacoes/notificacao.service';

@Component({
  selector: 'app-grid-aluno',
  templateUrl: './grid-aluno.component.html',
  styleUrls: ['./grid-aluno.component.css']
})
export class GridAlunoComponent implements OnInit {

  @Output() alunoRemovido: EventEmitter<AlunoDTO> = new EventEmitter();

  private _alunos: Aluno[] = [];
  private _alunosComoObjeto: AlunoDTO[] = [];
  public processandoRequisicao = false;

  constructor(
    private alunoService: AlunoService,
    private notificacao: NotificacaoService
  ) {}

  ngOnInit() {}

  get alunos(): Aluno[] {
    return [...this._alunos];
  }

  @Input() set alunos(value: Aluno[]) {
    if (value) {
      this._alunos = value;
      this._alunosComoObjeto = value
        .map(aluno => this.converterAlunoParaObjeto(aluno));
    }
  }

  get alunosComoObjeto(): AlunoDTO[] {
    return [...this._alunosComoObjeto];
  }

  private converterAlunoParaObjeto(aluno: Aluno): AlunoDTO {
    return {
      id: aluno.id,
      nome: aluno.nome,
      email: aluno.email,
      cpf: aluno.cpf,
      matricula: aluno.matricula,
      formaIngresso: aluno.formaIngresso,
      turma: aluno.turma
    };
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
      response => {
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
