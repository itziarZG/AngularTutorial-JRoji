import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsersServiceService } from './services/users-service.service';
import { ConcatnamePipe } from './pipes/concatname.pipe';
import { ChatComponent } from './components/chat/chat.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { RutasModule } from './routes/routes.module';

@NgModule({
  declarations: [
    AppComponent,
    ConcatnamePipe,
    ChatComponent,
    ContactsComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, RutasModule],
  providers: [UsersServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
