import { Injectable } from '@angular/core';
import { AlunoData } from './services/aluno/aluno-data';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Aluno } from 'aluno/entities/aluno';

@Injectable({
  providedIn: 'root'
})
export class MockDataService implements InMemoryDbService{

  createDb() {
    return {
      alunos: AlunoData
    };
  }

  genId(alunos: Aluno[]): number {
    return alunos.length > 0 ? Math.max(...alunos.map(aluno => aluno.id)) + 1 : 11;
  }
}
