import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public messages: string[] = [];

  public updateMessage(value: string) {
    console.log(12);
    this.messages = [...this.messages, value];
  }
}
