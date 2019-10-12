import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ModelComponent } from './model/model.component';
import { StoreComponent } from './store/store.component';
import { AdminComponent } from './admin/admin.component';
import { StoreModule } from './store/store.module';

@NgModule({
  declarations: [
    AppComponent,
    ModelComponent,
    StoreComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule, StoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
