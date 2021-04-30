import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersServicesService {
  url: string = 'http://localhost:3000/api/users';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(this.url);
  }

  getUser(id: string): Observable<IUser> {
    return this.http.get<IUser>(`${this.url}/${id}`);
  }

  getRoles() {
    return this.http.get(`${this.url}/rol`);
  }

  getRol(id: string) {
    return this.http.get(`${this.url}/rol/${id}`);
  }

  insertData(data: IUser) {
    return this.http.post(`${this.url}/`, data);
  }

  updateUser(data: IUser, id: number) {
    return this.http.put(`${this.url}/${id}`, data);
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  //
  searchUser(datoSearch: string) {
    let allUsers: any[] = [];
    this.getUsers().subscribe((data: any) => {
      allUsers = data;
    });

    let userArr: IUser[] = [];

    datoSearch.toLowerCase();

    for (let i = 0; i < allUsers.length; i++) {
      let dataUSer = allUsers[i];

      let nameUser = dataUSer.NOMBRE.toLowerCase();

      if (nameUser.indexOf(datoSearch) >= 0) {
        userArr.push(dataUSer);
        dataUSer.idx = i;
      }
    }
    return userArr;
  }
}
