import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreloadingnetworkRoutingModule } from './preloadingnetwork-routing.module';
import { PreloadingnetworkComponent } from './preloadingnetwork.component';


@NgModule({
  declarations: [
    PreloadingnetworkComponent
  ],
  imports: [
    CommonModule,
    PreloadingnetworkRoutingModule
  ]
})
export class PreloadingnetworkModule { }
