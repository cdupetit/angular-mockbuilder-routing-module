import { TestBed, ComponentFixture } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { MockBuilder } from "ng-mocks";

import { RouterModule } from "@angular/router";
import { HelloComponent } from "./hello.component";
import { HelloModule } from "../hello.module";

describe('HelloComponent', () => {
  let fixture: ComponentFixture<HelloComponent>;
  let component: HelloComponent;

  describe('mock HelloComponent', () => {
    beforeEach(() =>
      TestBed.configureTestingModule(
        MockBuilder(HelloComponent, HelloModule)
          .replace(RouterModule, RouterTestingModule)
          .build()
      )
    );

    beforeEach(() => {
      fixture = TestBed.createComponent(HelloComponent);
      component = fixture.componentInstance;
    });

    it('should create the component', () => {
      expect(component).toBeTruthy();
    });
  });
});