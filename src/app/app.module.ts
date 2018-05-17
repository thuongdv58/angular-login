import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';;
import { AppRoutingModule } from './/app-routing.module';
import { RouteGuardGuard } from './route-guard.guard';
import { QuestionComponent } from './question/question.component'
@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    QuestionComponent  ],
  imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      AppRoutingModule  ],
  providers: [RouteGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
