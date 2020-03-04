import { Injectable } from '@angular/core';
import { AlunoData } from './services/aluno/aluno-data';
import { ProfessorData } from './services/professor/professor-data';
import { DisciplinaData } from './services/disciplina/disciplina-data';
import { TurmaData } from './services/turma/turma-data';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class MockDataService implements InMemoryDbService {

  createDb() {
    return {
      alunos: AlunoData,
      professores: ProfessorData,
      disciplinas: DisciplinaData,
      turmas: TurmaData
    };
  }

  genId<T extends InterfaceId>(collection: T[]): any {
    return this.calcularNovoId(collection);
  }

  private calcularNovoId<T extends InterfaceId>(collection: T[]) {
    return collection.reduce((prev, curr) => {
      return (curr.id + 1) || 0;
    }, 1);
  }
}

interface InterfaceId {
  id: number;
}
