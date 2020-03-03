import { Component, OnInit } from '@angular/core';
import { Disciplina } from './entities/disciplina';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DisciplinaDTO } from './entities/disciplina-dto.interface';
import { NotificacaoFactoryService } from 'services/notificacoes/notificacao-factory.service';

@Component({
  selector: 'app-disciplina',
  templateUrl: './disciplina.component.html',
  styleUrls: ['./disciplina.component.css']
})
export class DisciplinaComponent implements OnInit {

  private _disciplinas: Disciplina[] = [];
  private _disciplina: Disciplina = null;
  private disciplinasObservable$: Observable<Disciplina[]>;
  private disciplinaObservable$: Observable<Disciplina>;
  public carregandoDisciplinas = true;
  public carregandoDisciplina = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private notificacao: NotificacaoFactoryService
  ) { }

  ngOnInit() {
    this.bindObservables();
    this.getDisciplinasDoServidor();
    this.getDisciplinaDoServidor();
  }

  get disciplinas() {
    return [...this._disciplinas];
  }

  set disciplinas(disciplinas: Disciplina[]) {
    this._disciplinas = disciplinas;
  }

  get disciplina(): Disciplina {
    return this._disciplina;
  }

  set disciplina(disciplina: Disciplina) {
    this._disciplina = disciplina;
  }

  private getDisciplinasDoServidor(): void {
    this.disciplinasObservable$
      .subscribe(
        disciplinas => {
          this.disciplinas = disciplinas;
          this.carregandoDisciplinas = false;
        },
        error => {
          this.notificacao.mensagemErro(error);
          this.carregandoDisciplinas = false;
        }
      );
  }

  private getDisciplinaDoServidor(): void {
    this.disciplinaObservable$
      .subscribe(
        disciplina => {
          this.disciplina = disciplina;
          this.carregandoDisciplina = false;
        },
        error => {
          this.notificacao.mensagemErro(error);
          this.carregandoDisciplina = false;
        }
      );
  }

  private bindObservables(): void {
    this.activatedRoute.data
      .subscribe(data => {
        this.disciplinasObservable$ = data.disciplinas;
        this.disciplinaObservable$ = data.disciplina;
      })
      .unsubscribe();
  }

  public removerDisciplina(disciplinaParaRemover: DisciplinaDTO): void {
    this.disciplinas = this.disciplinas
      .filter(disciplinaDaLista => disciplinaDaLista.id !== disciplinaParaRemover.id);

    if (this.disciplina.id === disciplinaParaRemover.id) { this.disciplina = undefined; }
  }

  public adicionarDisciplina(disciplinaParaAdicionar: Disciplina): void {
    const disciplinas = this.disciplinas;
    disciplinas.push(disciplinaParaAdicionar);
    this.disciplinas = disciplinas;
  }

  public atualizarDisciplina(disciplinaParaAtualizar: Disciplina): void {
    this.disciplinas = this.disciplinas.map(disciplina => {
      return disciplina.id === disciplinaParaAtualizar.id ? disciplinaParaAtualizar : disciplina;
    });
  }

}
