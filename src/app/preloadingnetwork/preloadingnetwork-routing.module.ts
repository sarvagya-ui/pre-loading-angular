import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreloadingnetworkComponent } from './preloadingnetwork.component';

const routes: Routes = [{ path: '', component: PreloadingnetworkComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreloadingnetworkRoutingModule { }
