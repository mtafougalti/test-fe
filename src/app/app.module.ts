import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnvAddComponent } from './env-add/env-add.component';
import { EnvEditComponent } from './env-edit/env-edit.component';
import { HeaderComponent } from './views/layout/header/header.component';
import { ListEnvComponent } from './views/environment/list-env/list-env.component';

@NgModule({
  declarations: [
    AppComponent,
    EnvAddComponent,
    HeaderComponent,
    EnvEditComponent,
    ListEnvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
