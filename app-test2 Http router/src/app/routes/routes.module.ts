import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from '../components/chat/chat.component';
import { ContactsComponent } from '../components/contacts/contacts.component';

const rutas: Routes = [
  { path: 'chat/:id', component: ChatComponent },
  { path: '', component: ContactsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(rutas, { enableTracing: true })],
  declarations: [],
  exports: [RouterModule],
})
export class RutasModule {}
