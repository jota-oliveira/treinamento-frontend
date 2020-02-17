import { Observable } from 'rxjs';
import { Matriculas } from '../entities/matriculas';

export interface MatriculasServiceInterface {

  getMatriculas(): Observable<Matriculas>;

}
