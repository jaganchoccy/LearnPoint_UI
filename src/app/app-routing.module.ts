import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './CommonServices/auth.guard';//router Guard
import { AppComponent } from './app.component';

const appRoutes: Routes = [
  {
  path: '',
  redirectTo: '/app',
  pathMatch: 'full'
  },
  {
  path: 'app',
  component: AppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
