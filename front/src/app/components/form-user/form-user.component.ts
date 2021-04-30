import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersServicesService } from 'src/app/services/users-services.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IUser } from 'src/app/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss'],
})
export class FormUserComponent implements OnInit {
  idParam: string;
  dataOneUser: IUser;
  roles: any = [];
  form: FormGroup;
  estado: any[] = ['0', '1', '2'];
  estadoActualizar: boolean = true;
  dataUsers: any[] = [];
  dataNombres: string[] = [];

  constructor(
    private activaredRoute: ActivatedRoute,
    private userServices: UsersServicesService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.form = this.fb.group({
      ID_ROL: [0, [Validators.required]],
      NOMBRE: [, [Validators.required]],
      ACTIVO: [0, [Validators.required]],
    });

    //obtener el dato enviado por parametro
    this.activaredRoute.params.subscribe((params) => {
      this.idParam = params['id'];
    });

    if (this.idParam) {
      //traer los datos por id
      userServices.getUser(this.idParam).subscribe((res: IUser) => {
        this.dataOneUser = res;
        console.log({ res });
        this.validateForm();
      });
    }
    this.getUsersName();
  }

  get rolNovalido() {
    return   this.form.get('ID_ROL').touched && this.form.get('ID_ROL').value == 0;
    
  }

  get nombreNovalido() {
    return this.form.get('NOMBRE').invalid && this.form.get('NOMBRE').touched;
  }

  get estadoNovalido() {
    return this.form.get('ACTIVO').touched && this.form.get('ACTIVO').value == '0';
  }

  validateForm() {
    this.form.setValue({
      ID_ROL: this.dataOneUser.ID_ROL,
      NOMBRE: this.dataOneUser.NOMBRE,
      ACTIVO: this.dataOneUser.ACTIVO,
    });
  }

  getUsersName() {
    this.userServices.getUsers().subscribe((res: any) => {
      this.dataUsers = res;
      this.dataNombres = this.dataUsers.map((data) => data.NOMBRE);
    });
  }

  searchUser(value) {
    //console.log(this.dataNombres);
    return this.dataNombres.indexOf(value);
  }

  ngOnInit(): void {
    //traer el valor del rol
    this.userServices.getRoles().subscribe((res) => {
      this.roles = res;
      //console.log(this.roles);

      this.roles.unshift({
        ID_ROL: 0,
        NOMBRE: 'Seleccione >',
      });
    });
  }

  guardar() {
    if (this.form.invalid) {
      return Object.values(this.form.controls).forEach((control) => {
        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach((control) =>
            control.markAsTouched()
          );
        } else {
          control.markAsTouched();
        }
      });
    } else {
      //console.log(this.form.value);
      if (this.idParam) {
        this.userServices
          .updateUser(this.form.value, Number(this.idParam))
          .subscribe(
            (res) => {
              console.log(res);
            },
            (err) => console.log(err)
          );
          this.router.navigate(['users']);
      } else {
        this.userServices.insertData(this.form.value).subscribe(
          (res) => {
            console.log(res);
          },
          (err) => console.log(err)
        );
        this.router.navigate(['users']);
      }
    }
  }
}
