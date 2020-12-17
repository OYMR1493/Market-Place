import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/* Components */
import { ContentComponent } from "./pages/content/content.component";
import { HomepageComponent } from "./components/homepage/homepage.component";

const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
    children: [
      {
        path: '',
        component: HomepageComponent
      },
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
      },
    ]
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
export class HomePageRoutingModule { }
