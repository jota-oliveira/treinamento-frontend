import { Component, OnInit } from '@angular/core';
import { MatriculasService } from './services/matriculas.service';
import { Matriculas } from './entities/matriculas';

@Component({
  selector: 'app-matriculas',
  templateUrl: './matriculas.component.html',
  styleUrls: ['./matriculas.component.css']
})
export class MatriculasComponent implements OnInit {

  private service: MatriculasService;
  private matriculas: Matriculas;

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
        this.matriculas = matriculas;
      });
  }

  public listarMatriculasComoObjeto(): any[] {
    // if (!this.matriculas) {
      console.log('ok');
      return [{nome: 'nome'}];
    // }

    // return this.matriculas.listarMatriculas().map(matricula => {
    //   return {
    //     aluno: matricula.aluno,
    //     turma: matricula.turma
    //   };
    // });
  }

}
