import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/* Components */
import { ContentComponent } from "./pages/content/content.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";

const routes: Routes = [
  {
    path: '',
    component: ContentComponent
  },
  {
    path: 'registro',
    component: RegisterComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
