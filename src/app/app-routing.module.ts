import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
{ path: '', loadChildren: () => import('./homepage/mainhome/mainhome.module').then(m => m.MainhomeModule) },
{ path: 'services', loadChildren: () => import('./services/service/service.module').then(m => m.ServiceModule) },
{ path: 'portfolio', loadChildren: () => import('./services/service/service.module').then(m => m.ServiceModule) },
{ path: 'about', loadChildren: () => import('./about/about/about.module').then(m => m.AboutModule) },
{ path: 'next gen', loadChildren: () => import('./about/about/about.module').then(m => m.AboutModule) },
{ path: 'contact us', loadChildren: () => import('./carrier/carrier/carrier.module').then(m => m.CarrierModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
