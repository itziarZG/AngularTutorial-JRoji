import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UsersServiceService } from './services/users-service.service';
import { ConcatnamePipe } from './pipes/concatname.pipe';

@NgModule({
  declarations: [AppComponent, UserCardComponent, ConcatnamePipe],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [UsersServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
