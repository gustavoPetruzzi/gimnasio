import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {UsuarioService} from '../../servicios/usuario.service';
import {Usuario} from '../../clases/usuario';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private ruteador:Router, private servicioUsuario: UsuarioService) { }
  nombreUsuario:string;
  pass:string;
  usuarios: string[] = [];
  ngOnInit() {
  }
  
  login(){
    this.servicioUsuario.ingresar("yusti", "1161544761").subscribe(data =>{
      this.ruteador.navigate(['/principal']);
      
    });
  }

}
