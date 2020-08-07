import { TestBed, ComponentFixture } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { MockBuilder } from "ng-mocks";

import { RouterModule } from "@angular/router";

import { HelloComponent } from "../hello/hello.component";
import { Hello2Component } from "./hello2.component";
import { HelloModule } from "../hello.module";

describe('Hello2Component', () => {
  let fixture: ComponentFixture<Hello2Component>;
  let component: Hello2Component;

  describe('mock Hello2Component', () => {
    beforeEach(() =>
      TestBed.configureTestingModule(
        MockBuilder(Hello2Component, HelloModule)
          .replace(RouterModule, RouterTestingModule)
          .build()
      )
    );

    beforeEach(() => {
      fixture = TestBed.createComponent(Hello2Component);
      component = fixture.componentInstance;
    });

    it('should create the component', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('mock Hello2Component with mock HelloComponent', () => {
    beforeEach(() =>
      TestBed.configureTestingModule(
        MockBuilder(Hello2Component, HelloModule)
          .mock(HelloComponent)
          .replace(RouterModule, RouterTestingModule)
          .build()
      )
    );

    beforeEach(() => {
      fixture = TestBed.createComponent(Hello2Component);
      component = fixture.componentInstance;
    });

    it('should create the component', () => {
      expect(component).toBeTruthy();
    });
  });
});