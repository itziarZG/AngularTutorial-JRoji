import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent {
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });
  }
  // public message: string = '';
  public value: string = '';
  public messages: string[] = [];
  public id: string | null = '';

  public buttonClicked() {
    this.messages = [...this.messages, this.value];
    this.value = '';
  }

  // public value: string = '';
}
