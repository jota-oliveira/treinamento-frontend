import { Component, OnInit } from '@angular/core';
import { Aluno } from './entities/aluno';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ObjetoAluno } from './entities/aluno-interface';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  public alunos: Aluno[] = [];
  public aluno: Aluno = null;

  public carregandoAlunos = true;
  public carregandoAluno = true;
  private alunosObservable$: Observable<Aluno[]>;
  private alunoObservable$: Observable<Aluno>;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.bindObservables();
    this.getAlunos();
    this.getAluno();
  }

  private getAlunos(): void {
    this.alunosObservable$
      .subscribe(
        alunos => {
          this.alunos = alunos;
          this.carregandoAlunos = false;
        },
        error => {
          // this.erroRequisicao = error;
          this.carregandoAlunos = false;
        }
      );
  }

  private getAluno(): void {
    this.alunoObservable$
      .subscribe(
        aluno => {
          this.aluno = aluno;
          this.carregandoAluno = false;
        },
        error => {
          // this.erroRequisicao = error;
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

  public removerAluno(alunoParaRemover: ObjetoAluno): void {
    this.alunos = this.alunos
      .filter(alunoDaLista => alunoDaLista.id !== alunoParaRemover.id);

    if (this.aluno.id === alunoParaRemover.id) { this.aluno = undefined; }
  }

}
