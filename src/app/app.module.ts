import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { ButtonComponent } from './components/button/button.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { ComponenteAutonomoComponent } from './componente-autonomo/componente-autonomo.component';




@NgModule({
  // Aquí añadimos los componentes que no sean autónomos. Todos los componentes que gestiona el módulo raíz.
  declarations: [
    AppComponent,
    ButtonComponent,
    MainNavComponent,
  ],
  //Aquí añadimos los módulos que necesitamos en toda la aplicación y además añadimos los componentes que sean autónomos, es decir, que se autogestionen.
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule,
    ComponenteAutonomoComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
