import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import {isPlatformBrowser} from "@angular/common";
/* models */
import { SectionModel } from "../../../models/admin/section.model";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  host: {
    "(window:resize)":"onWindowResize($event)"
  }
})
export class ContentComponent implements OnInit {
  openSide:boolean;
  width:number = window.innerWidth;
  mobileWidth:number  = 760;
  arrayMenuOptions: Array<SectionModel> = [
    {
      name: 'inventario',
      label: 'inventario',
      link: '/inventario'
    }
  ];

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
  ) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      if(this.width < this.mobileWidth){
        this.openSide = false;
      }else{
        this.openSide = true;
      }
    }
  }

  openSidebar(){
    this.openSide = !this.openSide
  }

  onWindowResize(event) {
    if (isPlatformBrowser(this.platformId)) {
      this.width = event.target.innerWidth;
      if(this.width < this.mobileWidth){
        this.openSide = false;
      }else{
        this.openSide = true;
      }
    }
  }

}
