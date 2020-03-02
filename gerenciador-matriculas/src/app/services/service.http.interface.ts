import { ServiceHttpResponses } from './service.http.responses.interface';
import { Observable } from 'rxjs';

export interface ServiceHttp<T> {
  getList(filter?: object): Observable<T[]>;

  getItem(id: (number | string)): Observable<T>;

  post(objectToPersist: T): Observable<ServiceHttpResponses>;

  put(objectToPersist: T): Observable<ServiceHttpResponses>;

  delete(id: (number | string)): Observable<ServiceHttpResponses>;
}
