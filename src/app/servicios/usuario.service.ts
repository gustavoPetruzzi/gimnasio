import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Usuario} from '../clases/usuario';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private coleccionUsuarios: AngularFirestoreCollection<Usuario>;
  public usuarios: Observable<Usuario[]>;
  constructor(private db: AngularFirestore) {
  }
  
  public listaUsuarios(){
    this.coleccionUsuarios = this.db.collection<Usuario>('usuarios');
    this.usuarios = this.coleccionUsuarios.snapshotChanges().pipe(
      map(actions => actions.map(a =>{
        const data = a.payload.doc.data() as Usuario;
        const id = a.payload.doc.id;
        return {id, ...data};
      }))
    )
  }
  public ingresar(usuario:string, pass:string){
    return this.db.collection<Usuario>('usuarios', ref => ref.where("usuario", "==", usuario).where("pass","==", pass))
    .snapshotChanges().pipe(
      map(actions => actions.map(a =>{
        const id = a.payload.doc.id;
        return id;
      }))
    )
  }
}
