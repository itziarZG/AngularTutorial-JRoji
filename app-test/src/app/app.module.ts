import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MessagesComponent } from './components/messages/messages.component';
import { TextButtonComponent } from './components/text-button/text-button.component';

@NgModule({
  declarations: [AppComponent, MessagesComponent, TextButtonComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
