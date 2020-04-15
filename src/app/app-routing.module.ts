import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './CommonServices/auth.guard';//router Guard
import { SignInComponent } from './components/sign-in/sign-in.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/signIn', pathMatch: 'full' },
  { path: 'signIn', component: SignInComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
