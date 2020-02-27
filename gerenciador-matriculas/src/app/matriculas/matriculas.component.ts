import { Component, OnInit } from '@angular/core';
import { MatriculasService } from './services/matriculas.service';

@Component({
  selector: 'app-matriculas',
  templateUrl: './matriculas.component.html',
  styleUrls: ['./matriculas.component.css']
})
export class MatriculasComponent implements OnInit {

  private service: MatriculasService;
  private _matriculasComoObjeto: any[] = [];

  constructor(matriculasService: MatriculasService) {
    this.service = matriculasService;
  }

  ngOnInit() {
    this.getMatriculas();
  }

  private getMatriculas(): void {
    this.service
      .getMatriculas()
      .subscribe(matriculas => {
        this._matriculasComoObjeto = matriculas
          .listarMatriculas()
          .slice(0, 4)
          .map(matricula => this.converterMatriculaEmObjeto(matricula));
      });
  }

  get matriculasComoObjeto(): any[] {
    return [...this._matriculasComoObjeto];
  }

  private converterMatriculaEmObjeto(matricula): object {
    const classeAluno = matricula.aluno;
    const classeTurma = matricula.turma;

    return {
      nomeAluno: classeAluno.nome,
      emailAluno: classeAluno.email,
      cpfAluno: classeAluno.cpf,
      turmaAnoLetivo: classeTurma.anoLetivo,
      turmaDescricao: classeTurma.descricao,
      turmaNumeroVagas: classeTurma.numeroVagas,
      turmaPeriodoLetivo: classeTurma.periodoLetivo
    };
  }

  get colunasUltimasMatriculas(): any[] {
    return [
      { property: 'nomeAluno', label: 'Nome' },
      { property: 'emailAluno', label: 'Email' },
      { property: 'cpfAluno', label: 'Documento' },
      { property: 'turmaAnoLetivo', label: 'Turma' },
      { property: 'turmaDescricao', label: 'Descrição' },
      { property: 'turmaNumeroVagas', label: 'Nº de Vagas' }
    ];
  }

  public novaMatricula = (): void => {
    console.log('abrir nova matrícula');
    alert('Nova matrícula em breve!');
  }

}
