import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RequestOptions} from '@angular/http';


export class Message {
  id: string;
  Recipients: string;
  Subject: string;
  Body: string;
  IsSend: boolean;
}
export  class  Messagepost {
  Recipients: string;
  Subject: string;
  Body: string;
}

@Injectable()
export class MessageService {
  private headers: any;
  constructor (private httpClient: HttpClient) {}
  getMessage() {
 return this.httpClient.get<Message>('http://localhost:58613/Api/Message/GetAll');
    }

 saveMessage(message: Messagepost): Observable<Messagepost> {
const headers = new HttpHeaders();
   headers.append('Content-Type', 'message/json');
  return this.httpClient.post<Messagepost>('http://localhost:58613/Api/Message/SaveMessage', message,{ headers: headers} );
 }

  }


