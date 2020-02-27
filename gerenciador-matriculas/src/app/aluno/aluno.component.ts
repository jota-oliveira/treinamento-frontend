import { Component, OnInit } from '@angular/core';
import { Aluno } from './entities/aluno';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  public alunos: Aluno[] = [];
  public erroRequisicao = '';
  public carregandoAlunos = true;
  private alunosObservable$: Observable<Aluno[]>;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() { this.getAlunos(); }

  private getAlunos(): void {
    this.bindAlunosObservable();

    this.alunosObservable$
      .subscribe(
        alunos => {
          this.alunos = alunos;
          this.carregandoAlunos = false;
        },
        error => {
          this.erroRequisicao = error;
          this.carregandoAlunos = false;
        }
      );
  }

  private bindAlunosObservable(): void {
    this.activatedRoute.data
      .subscribe(data => {
          this.alunosObservable$ = data.alunos;
        })
      .unsubscribe();
  }

}
