import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent {
  // public message: string = '';
  @Input() public messages: string[] = [];

  // public value: string = '';
}
