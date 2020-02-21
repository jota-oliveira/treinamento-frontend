import { Component, OnInit } from '@angular/core';
import { Aluno } from './entities/aluno';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  private aluno: Aluno = new Aluno({
    cpf: '06357955906',
    email: 'joao.holiveira@totvs.com.br',
    formaIngresso: 'Enade',
    matricula: 3,
    nome: 'João Henrique de Oliveira Júnior',
    turma: []
  });

  constructor() { }

  ngOnInit() {
  }

}
