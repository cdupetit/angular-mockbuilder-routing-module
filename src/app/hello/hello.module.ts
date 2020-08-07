import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloRoutingModule } from './hello-routing.module';
import { HelloComponent } from './hello/hello.component';

@NgModule({
  imports: [
    CommonModule,
    HelloRoutingModule
  ],
  declarations: [HelloComponent],
  exports: [HelloComponent]
})
export class HelloModule {}