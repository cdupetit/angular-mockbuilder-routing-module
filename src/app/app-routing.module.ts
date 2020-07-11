import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HelloModule } from './hello/hello.module';
import { HelloComponent } from './hello/hello.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/hello',
    pathMatch: 'full'
  },
  {
    path: 'hello',
    component: HelloComponent
  },
];

@NgModule({
  imports: [
    HelloModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [
    HelloModule,
    RouterModule
  ]
})
export class AppRoutingModule { }