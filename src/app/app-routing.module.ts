import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { QuestionComponent } from './question/question.component';
import { RouteGuardGuard } from './route-guard.guard';
const routes: Routes = [
  { path: 'login', component: AuthenticationComponent },
  { path: 'question', component: QuestionComponent, canActivate: [RouteGuardGuard] },
  { path: '', redirectTo: '/question', pathMatch: 'full' }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
