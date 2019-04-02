import { Component, OnInit } from '@angular/core';
import {MenuModule} from 'primeng/menu';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor() { }
  items:MenuItem[];
  ngOnInit() {
    this.items = [
      {label: 'New', icon:'pi pi-fw pi-plus'},
      {label: 'algo', icon:'pi pi-fw pi-plus'},
      {label: 'otro algo', icon:'pi pi-fw pi-plus'}
    ]
  }

}
