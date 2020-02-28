import { Component, OnInit, Input } from '@angular/core';
import { Aluno } from 'aluno/entities/aluno';
import { ObjetoAluno } from 'aluno/entities/aluno-interface';
import { AlunoService } from 'aluno/services/aluno.service';

@Component({
  selector: 'app-grid-aluno',
  templateUrl: './grid-aluno.component.html',
  styleUrls: ['./grid-aluno.component.css']
})
export class GridAlunoComponent implements OnInit {

  private _alunos: Aluno[] = [];
  private _alunosComoObjeto: ObjetoAluno[] = [];
  public processandoRequisicao = false;

  constructor(private alunoService: AlunoService) {}

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

  get alunosComoObjeto(): ObjetoAluno[] {
    return [...this._alunosComoObjeto];
  }

  private converterAlunoParaObjeto(aluno: Aluno): ObjetoAluno {
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

  public deletarRegistro(aluno: ObjetoAluno): void {
    this.processandoRequisicao = true;

    this.alunoService.delete(aluno.id).subscribe(
      response => {
        this.removerAlunoDaLista(aluno);
        this.processandoRequisicao = false;
      },
      erro => {
        console.log('Erro deletando alunos', erro)
        this.processandoRequisicao = false;
      }
    );
  }

  private removerAlunoDaLista(aluno: ObjetoAluno): void {
    const alunos = this.alunos.filter(alunoDaLista => alunoDaLista.id !== aluno.id);
    this.alunos = alunos;
    /* Chamar sucesso na operação */
  }

}
