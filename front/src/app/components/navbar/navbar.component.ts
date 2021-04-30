import { Component, OnInit } from '@angular/core';
import { UsersServicesService } from 'src/app/services/users-services.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private buscarUsers:UsersServicesService) { }

  ngOnInit(): void {
  }

  searchUsers( dato:string){

    console.log(dato);
  }

}
