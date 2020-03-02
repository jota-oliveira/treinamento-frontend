import { Observable } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { ServiceHttpResponses } from './service.http.responses.interface';
import { ServiceHttp } from './service.http.interface';
import { HttpHeaders, HttpClient } from '@angular/common/http';

export class HttpClientService<T> implements ServiceHttp<T> {

  private http: HttpClient;
  private url: string;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(http: HttpClient, url: string) {
    this.url = url;
    this.http = http;
  }

  public getList(filter?: object): Observable<T[]> {
    return this.http.get<T[]>(this.url)
      .pipe(
        retry(2),
        catchError((err: any) => this.handleError(err, 'getList'))
      );
  }

  public getItem(id: number): Observable<T> {
    const url = `${this.url}/${id}`;

    return this.http.get<T>(url)
      .pipe(
        retry(2),
        catchError((err: any) => this.handleError(err, 'getItem'))
      );
  }

  public delete(id: number): Observable<ServiceHttpResponses> {
    const url = `${this.url}/${id}`;
    const serviceResponse = this.serviceResponse;

    return this.http.delete<ServiceHttpResponses>(url, this.httpOptions)
      .pipe(
        retry(2),
        map(response => serviceResponse),
        catchError((err: any) => this.handleError(err, 'delete'))
      );
  }

  public post(objeto: T): Observable<ServiceHttpResponses> {

    return this.http.post<ServiceHttpResponses>(this.url, objeto, this.httpOptions)
      .pipe(
        retry(2),
        map(response => this.prepararPostResponse(response)),
        catchError((err: any) => this.handleError(err, 'post'))
      );
  }

  private prepararPostResponse(response: any): ServiceHttpResponses {
    const serviceResponse = this.serviceResponse;

    serviceResponse.detalhes = {
      id: response.id
    };

    return serviceResponse;
  }

  public put(objeto: T): Observable<ServiceHttpResponses> {
    return this.http.put<ServiceHttpResponses>(`api/alunos`, objeto, this.httpOptions)
      .pipe(
        retry(2),
        map(response => this.serviceResponse),
        catchError((err: any) => this.handleError(err, 'put'))
      );
  }

  private handleError(err: any, recurso: string): Observable<any> {
    console.error(`Atenção, recurso ${recurso} apresentou o erro: ${err.status} ${err.statusText}`);
    throw new Error('Não foi possível fazer a requisição, tente novamente mais tarde');
  }

  private get serviceResponse(): ServiceHttpResponses {
    return {
      sucesso: true,
      mensagem: 'Sucesso na operação'
    };
  }
}
