import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloRoutingModule } from './hello-routing.module';
import { HelloComponent } from './hello/hello.component';
import { Hello2Component } from './hello2/hello2.component';

@NgModule({
  imports: [
    CommonModule,
    HelloRoutingModule
  ],
  declarations: [
    HelloComponent,
    Hello2Component
  ],
  exports: [
    HelloComponent,
    Hello2Component
  ]
})
export class HelloModule {}