import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from './services/users-service.service';

import { concatname } from './pipes/concatname.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public users: [] = [];
  constructor(private userServ: UsersServiceService) {}
  ngOnInit() {
    this.userServ.getUsers().subscribe((response) => {
      this.users = response.results;
      // console.log(response.results);
    });
  }
}
