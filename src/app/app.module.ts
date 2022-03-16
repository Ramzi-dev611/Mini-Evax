import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { Routing } from './app.routing';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AccountpageComponent } from './pages/accountpage/accountpage.component';
import { AppointmentspageComponent } from './pages/appointmentspage/appointmentspage.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AccountpageComponent,
    AppointmentspageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    Routing,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
