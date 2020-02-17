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
  public matriculas: Matriculas;

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

}
