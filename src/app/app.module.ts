import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Routing } from './app.routing';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AccountpageComponent } from './pages/accountpage/accountpage.component';
import { AppointmentspageComponent } from './pages/appointmentspage/appointmentspage.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AccountpageComponent,
    AppointmentspageComponent
  ],
  imports: [
    BrowserModule,
    Routing,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
