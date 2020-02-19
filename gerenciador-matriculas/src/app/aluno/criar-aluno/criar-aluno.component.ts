import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-aluno',
  templateUrl: './criar-aluno.component.html',
  styleUrls: ['./criar-aluno.component.css']
})
export class CriarAlunoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public salvarAluno = (formAluno: any): void => {
    console.log('dei console aqui de fora', formAluno);
  }
}
