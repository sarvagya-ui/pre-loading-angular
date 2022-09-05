import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CustomPreloadingStrategyServiceService } from './custom-preloading-strategy-service.service';


const routes: Routes = [
  { path: 'about',data: {preload: true,loadAfterSeconds: 5}, loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  { path: 'preloadingnetwork', loadChildren: () => import('./preloadingnetwork/preloadingnetwork.module').then(m => m.PreloadingnetworkModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: CustomPreloadingStrategyServiceService })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
