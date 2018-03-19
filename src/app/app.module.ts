import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StudentModule } from './student/student.module';
import { StudentService } from './student/studentservice';
import { APP_ROUTES } from './app.routing';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],

  imports: [
    BrowserModule,
    StudentModule,
    APP_ROUTES
  ],

  providers: [StudentService],
  
  bootstrap: [ AppComponent ]
})

export class AppModule { }
