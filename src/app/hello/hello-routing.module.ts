import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { Hello2Component } from './hello2/hello2.component';

const routes: Routes = [
  {
    path: '',
    component: HelloComponent
  },
  {
    path: '',
    component: Hello2Component
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class HelloRoutingModule {}
