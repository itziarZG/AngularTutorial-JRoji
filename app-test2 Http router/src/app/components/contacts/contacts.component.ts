import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersServiceService } from 'src/app/services/users-service.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  public users: [] = [];
  constructor(private userServ: UsersServiceService, private router: Router) {}
  ngOnInit() {
    this.userServ.getUsers().subscribe((response) => {
      this.users = response.results;
      // console.log(response.results);
    });
  }
  handleClick(id: string) {
    // console.log(id);
    this.router.navigateByUrl(`chat/${id}`);
  }
}
