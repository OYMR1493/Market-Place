import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/* components */
import { ContentComponent } from "./pages/content/content.component";

const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
    children: [
      {
        path: 'inventario',
        loadChildren: () => import('./modules/inventary/inventary.module').then(m => m.InventaryModule)
      },
      {
        path: '',
        redirectTo: 'inventario',
        pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
