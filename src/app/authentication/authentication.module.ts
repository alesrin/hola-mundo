import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './templates/login/login.component';
import { RegisterComponent } from './templates/register/register.component';
import { RecordarPasswordComponent } from './components/recordar-password/recordar-password.component';
import { InputlogComponent } from './components/inputlog/inputlog.component';
import { PoliticaPrivacidadComponent } from './components/politica-privacidad/politica-privacidad.component';
import { FbGoogleLogComponent } from './components/fb-google-log/fb-google-log.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    RecordarPasswordComponent,
    InputlogComponent,
    PoliticaPrivacidadComponent,
    FbGoogleLogComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    RecordarPasswordComponent,
    InputlogComponent,
    PoliticaPrivacidadComponent,
    FbGoogleLogComponent
  ],
  providers: []
})
export class AuthenticationModule { }
