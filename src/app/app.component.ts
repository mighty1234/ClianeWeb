import {Component, OnInit} from '@angular/core';
import { MessageService, Messagepost} from './message.service';
import {log} from 'util';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageService]
})

export class AppComponent implements  OnInit {
  Body = '';
  From = '';
  To = '';
  Theme = '';
  Name = '';
  messagepost = new Messagepost();

  constructor(private messageService: MessageService) {
  }


  ngOnInit() {
    this.messageService.getMessage().subscribe(message => {
      console.log(message);
    });

  }

  Onclick() {
    this.messagepost = {
      Recipients: this.To.toString(),
      Subject: this.Theme.toString(),
      Body: this.Body.toString()
    };
    console.log(this.messagepost);
    this.messageService.saveMessage(this.messagepost).subscribe( messagepost => {console.log(messagepost)});
    }
  }


