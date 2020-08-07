import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HelloModule } from './hello/hello.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/hello',
    pathMatch: 'full'
  },
  {
    path: 'hello',
    loadChildren: () => import('./hello/hello.module').then(m => m.HelloModule),
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }