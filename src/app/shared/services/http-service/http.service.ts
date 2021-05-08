import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {  of } from 'rxjs';
import { catchError, map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class HttpService  {

  constructor( private http: HttpClient) { }

  get(url: string) {
    let httpHeaders = new HttpHeaders({
        'Content-Type': 'application/json'
    }); 
    const options = {headers: httpHeaders}   
    return this.http.get(url, options);
  }

  // getAuthorization(url: string,options: any) {  
  //   return this.http.get(url, options);
  // }

  // postWithFormData (url: string,body: any) {
  //   const rqstbody = body;
  //   let httpHeaders = new HttpHeaders({
  //       'Content-Type': 'multipart/form-data; charset=UTF-8'
  //   });
  //   const options = {headers: httpHeaders}
  //   return this.http.post(url,rqstbody,options).pipe(
  //     map(data=> data),
  //     catchError(err => of(err.error))
  //   );
  // }

  post (url: string,body: any) {
    const rqstbody = body;
    let httpHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    });
    const options = {headers: httpHeaders}
    return this.http.post(url,rqstbody,options).pipe(
      map(data=> data),
      catchError(err => of(err.error))
    );
  }

  postWithoutPipe (url: string,body: any) {
    const rqstbody = body;
    let httpHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    });
    const options = {headers: httpHeaders}
    return this.http.post(url,rqstbody,options);
  }

  // put (url: string,body: any){
  //   const rqstbody = body;
  //   let httpHeaders = new HttpHeaders({
  //       'Content-Type': 'application/json'
  //   });
  //   const options = {headers: httpHeaders}
  //   return this.http.put(url,rqstbody,options).pipe(
  //       map(data=> data),
  //       catchError(err => of(err.error))
  //  );
  // }

  // delete (url: string,id: number){
  //     const rqstURL = url + '/' + id;
  //   return this.http.delete(rqstURL).pipe(
  //       map(data=> data),
  //       catchError(err => of(err.error))
  //  );;
  // }
}
