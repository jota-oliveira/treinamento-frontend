import { Component, OnInit } from '@angular/core';
import { Aluno } from './entities/aluno';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ObjetoDTOAluno } from './entities/aluno-dto-interface';
import { NotificacaoService } from 'services/notificacoes/notificacao.service';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  private _alunos: Aluno[] = [];
  private _aluno: Aluno = null;
  private alunosObservable$: Observable<Aluno[]>;
  private alunoObservable$: Observable<Aluno>;
  public carregandoAlunos = true;
  public carregandoAluno = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private notificacao: NotificacaoService
  ) { }

  ngOnInit() {
    this.bindObservables();
    this.getAlunosDoServidor();
    this.getAlunoDoServidor();
  }

  get alunos() {
    return [...this._alunos];
  }

  set alunos(alunos: Aluno[]) {
    this._alunos = alunos;
  }

  get aluno(): Aluno {
    return this._aluno;
  }

  set aluno(aluno: Aluno) {
    this._aluno = aluno;
  }

  private getAlunosDoServidor(): void {
    this.alunosObservable$
      .subscribe(
        alunos => {
          this.alunos = alunos;
          this.carregandoAlunos = false;
        },
        error => {
          this.notificacao.mensagemErro(error);
          this.carregandoAlunos = false;
        }
      );
  }

  private getAlunoDoServidor(): void {
    this.alunoObservable$
      .subscribe(
        aluno => {
          this.aluno = aluno;
          this.carregandoAluno = false;
        },
        error => {
          this.notificacao.mensagemErro(error);
          this.carregandoAluno = false;
        }
      );
  }

  private bindObservables(): void {
    this.activatedRoute.data
      .subscribe(data => {
          this.alunosObservable$ = data.alunos;
          this.alunoObservable$ = data.aluno;
        })
      .unsubscribe();
  }

  public removerAluno(alunoParaRemover: ObjetoDTOAluno): void {
    this.alunos = this.alunos
      .filter(alunoDaLista => alunoDaLista.id !== alunoParaRemover.id);

    if (this.aluno.id === alunoParaRemover.id) { this.aluno = undefined; }
  }

  public adicionarAluno(alunoParaAdicionar: Aluno): void {
    const alunos = this.alunos;
    alunos.push(alunoParaAdicionar);
    this.alunos = alunos;
  }

  public atualizarAluno(alunoParaAtualizar: Aluno): void {
    this.alunos = this.alunos.map(aluno => {
      return aluno.id === alunoParaAtualizar.id ? alunoParaAtualizar : aluno;
    });
  }

}
