import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  //@Input() message: Message;
  
  messages: Message[] =[
    new Message(1,'Hello', 'Hi from my angular single-page app','David'),
    new Message(2,'Reminder', 'The semester is almost over','Max'),
    new Message(3,'Plans', 'Hurry up and graduate already','Julio')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onAddMessage(message: Message){
    this.messages.push(message);
    console.log(this.messages);
  }

}
