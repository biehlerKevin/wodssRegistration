import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';

import { environment } from "../../../environments/environment";
import {Observable} from "rxjs";

const BASE_URL: string = environment.apiUrl;

@Injectable()
export class ApiService {


  constructor(private http: Http) {
  }

  getAll(): Observable<any[]> {
    return this.doGet('/route')
  }

  getOne(Id: string): Observable<any> {
      return this.doGet('/route' + Id)
  }

  create(object: Object): Observable<any> {
      return this.doPost('/route', object)
  }

  save(Id: string, data: any): Observable<any> {
      return this.doPut('/route' + Id, data)
  }

  delete(Id: string): Observable<any> {
      return this.doDelete('/route' + Id)
  }

  // HELPER FUNCTIONS
  private doGet(uri: String): Observable<any> {
    return this.http.get(BASE_URL + uri)
      .map(ApiService.extractData)
      .catch(ApiService.handleError)
      .share()
  }

  private doPut(uri: String, data: any): Observable<any> {
    return this.http.put(BASE_URL + uri, data)
      .map(ApiService.extractData)
      .catch(ApiService.handleError)
      .share()
  }

  private doPost(uri: String, data: any): Observable<any> {
    return this.http.post(BASE_URL + uri, data)
      .map(ApiService.extractData)
      .catch(ApiService.handleError)
      .share()
  }

  private doDelete(uri: String): Observable<any> {
    return this.http.delete(BASE_URL + uri)
      .map(ApiService.extractData)
      .catch(ApiService.handleError)
      .share()
  }

  
  private static extractData(res: Response) {
    // handles empty OK
    if (res.status == 204) return {ok: true, status: 204};

    try{
      var body = res.json();
    }catch(e){
      //TODO: maybe handle empty responses?
    }
    return body || {};
  }

  private static handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(error); // log to console instead
    return Observable.throw(error);
  }
}
