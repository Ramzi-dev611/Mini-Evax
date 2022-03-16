import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Routing } from './app.routing';
import { HomepageComponent } from './homepage/homepage.component';
import { AccountpageComponent } from './accountpage/accountpage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AccountpageComponent
  ],
  imports: [
    BrowserModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
