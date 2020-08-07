import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloComponent } from './hello.component';
import { HelloRoutingModule } from './hello-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HelloRoutingModule
  ],
  declarations: [HelloComponent],
  exports: [HelloComponent]
})
export class HelloModule {}