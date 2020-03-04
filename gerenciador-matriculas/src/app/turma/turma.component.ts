import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Turma } from './entities/turma';
import { ActivatedRoute } from '@angular/router';
import { NotificacaoFactoryService } from 'services/notificacoes/notificacao-factory.service';
import { TurmaDTO } from './entities/turma-dto.interface';

@Component({
  selector: 'app-turma',
  templateUrl: './turma.component.html',
  styleUrls: ['./turma.component.css']
})
export class TurmaComponent implements OnInit {

  private turmasObservable$: Observable<Turma[]>;
  private _turmas: Turma[] = [];
  public carregandoTurmas = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private notificacao: NotificacaoFactoryService
  ) {
    this.bindObservables();
  }

  ngOnInit() {
    this.getTurmas();
  }

  private getTurmas(): void {
    this.turmasObservable$
      .subscribe(
        (turmas: Turma[]) => {
          this.turmas = turmas;
          this.carregandoTurmas = false;
        },
        (erro: string) => {
          this.notificacao
            .mensagemErro(erro);
          this.carregandoTurmas = false;
        }
      );
  }

  get turmas(): Turma[] {
    return [...this._turmas];
  }

  set turmas(turma: Turma[]) {
    this._turmas = turma;
  }

  public novaTurma = (): void => {
    console.log('abrir nova turma');
    alert('Nova turma em breve!');
  }

  private bindObservables(): void {
    this.activatedRoute.data
      .subscribe(data => {
        this.turmasObservable$ = data.turmas;
      })
      .unsubscribe();
  }

  public removerTurma(turmaParaRemover: TurmaDTO): void {
    this.turmas = this.turmas
      .filter(turmaDaLista => turmaDaLista.id !== turmaParaRemover.id);
  }

}
