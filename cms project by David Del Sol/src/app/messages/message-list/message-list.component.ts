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
    new Message(1,'Hello', 'Hello from my angular Application','David'),
    new Message(2,'Remember', 'The semester is almost over','David'),
    new Message(3,'Celebrate', 'Hurry up and graduate already!','David')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onAddMessage(message: Message){
    this.messages.push(message);
    console.log(this.messages);
  }

}
