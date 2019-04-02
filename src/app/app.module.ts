import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './componentes/login/login.component'; 
import {

  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,

  MatToolbarModule, MatMenuModule,MatIconModule, MatProgressSpinnerModule

} from '@angular/material';
import {  } from '@angular/material';
import { AngularFireModule } from '@angular/fire';
import {UsuarioService} from '../app/servicios/usuario.service'
import { environment } from '../environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';
import { PrincipalComponent } from './componentes/principal/principal.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatToolbarModule,
    MatButtonModule, 
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [UsuarioService, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
