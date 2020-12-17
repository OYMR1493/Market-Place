import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from "../../shared/shared.module";

import { HomePageRoutingModule } from './homepage-routing.module';
import { ContentComponent } from './pages/content/content.component';


@NgModule({
  declarations: [
    ContentComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    SharedModule
  ]
})
export class HomePageModule { }
