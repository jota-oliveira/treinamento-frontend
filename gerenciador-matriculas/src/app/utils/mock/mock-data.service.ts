import { Injectable } from '@angular/core';
import { AlunoData } from './services/aluno/aluno-data';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Aluno } from 'aluno/entities/aluno';

@Injectable({
  providedIn: 'root'
})
export class MockDataService implements InMemoryDbService {

  createDb() {
    return { alunos: AlunoData };
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
