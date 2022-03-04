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
    new Message(1,'Greetings', 'How is everything going?','David'),
    new Message(2,'Reminder', 'Hey, do not forget to do your homework.','David'),
    new Message(3,'Weekend', 'Would you like to go for a walk this friday?','David')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onAddMessage(message: Message){
    this.messages.push(message);
    console.log(this.messages);
  }

}
