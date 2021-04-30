import { Component, OnInit } from '@angular/core';
import { UsersServicesService } from 'src/app/services/users-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  dataUsers: any;

  constructor(
    private usersServives: UsersServicesService,
    private router: Router
  ) {
    this.gerUsers();
  }

  ngOnInit(): void {}

  gerUsers() {
    this.usersServives.getUsers().subscribe((res: any) => {
      this.dataUsers = res;
      //console.log(this.dataUsers);
    });
  }

  editUser(idx: number) {
    this.router.navigate(['/form-user', idx]);
  }

  deleteUser(id: number) {
    this.usersServives.deleteUser(id).subscribe(
      (res) => {
        console.log(res);
        this.gerUsers();
       
      },
      (err) => console.log(err)
    );
  }
}
