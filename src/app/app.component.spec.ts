import { TestBed, ComponentFixture } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { MockBuilder } from "ng-mocks";

import { RouterModule } from "@angular/router";

import { AppRoutingModule } from "./app-routing.module";
import { AppModule } from "./app.module";
import { AppComponent } from "./app.component";

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  describe('mock AppRoutingModule', () => {
    beforeEach(() =>
      TestBed.configureTestingModule(
        MockBuilder(AppComponent, AppModule)
          .replace(RouterModule, RouterTestingModule)
          .build()
      )
    );

    beforeEach(() => {
      fixture = TestBed.createComponent(AppComponent);
      app = fixture.componentInstance;
    });

    it('should create the app', () => {
      expect(app).toBeTruthy();
    });
  });
});