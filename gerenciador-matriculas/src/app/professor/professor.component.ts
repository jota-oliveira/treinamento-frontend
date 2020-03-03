import { Component, OnInit } from '@angular/core';
import { Professor } from './entities/professor';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProfessorDTO } from './entities/professor-dto.interface';
import { NotificacaoFactoryService } from 'services/notificacoes/notificacao-factory.service';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {

  private _professores: Professor[] = [];
  private _professor: Professor = null;
  private professoresObservable$: Observable<Professor[]>;
  private professorObservable$: Observable<Professor>;
  public carregandoProfessores = true;
  public carregandoProfessor = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private notificacao: NotificacaoFactoryService
  ) { }

  ngOnInit() {
    this.bindObservables();
    this.getProfessoresDoServidor();
    this.getProfessorDoServidor();
  }

  get professores() {
    return [...this._professores];
  }

  set professores(professores: Professor[]) {
    this._professores = professores;
  }

  get professor(): Professor {
    return this._professor;
  }

  set professor(professor: Professor) {
    this._professor = professor;
  }

  private getProfessoresDoServidor(): void {
    this.professoresObservable$
      .subscribe(
        professores => {
          this.professores = professores;
          this.carregandoProfessores = false;
        },
        error => {
          this.notificacao.mensagemErro(error);
          this.carregandoProfessores = false;
        }
      );
  }

  private getProfessorDoServidor(): void {
    this.professorObservable$
      .subscribe(
        professor => {
          this.professor = professor;
          this.carregandoProfessor = false;
        },
        error => {
          this.notificacao.mensagemErro(error);
          this.carregandoProfessor = false;
        }
      );
  }

  private bindObservables(): void {
    this.activatedRoute.data
      .subscribe(data => {
        this.professoresObservable$ = data.professores;
        this.professorObservable$ = data.professor;
      })
      .unsubscribe();
  }

  public removerProfessor(professorParaRemover: ProfessorDTO): void {
    this.professores = this.professores
      .filter(professorDaLista => professorDaLista.id !== professorParaRemover.id);

    if (this.professor.id === professorParaRemover.id) { this.professor = undefined; }
  }

  public adicionarProfessor(professorParaAdicionar: Professor): void {
    const professores = this.professores;
    professores.push(professorParaAdicionar);
    this.professores = professores;
  }

  public atualizarProfessor(professorParaAtualizar: Professor): void {
    this.professores = this.professores.map(professor => {
      return professor.id === professorParaAtualizar.id ? professorParaAtualizar : professor;
    });
  }

}
