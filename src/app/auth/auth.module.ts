import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from "@angular/forms";

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { FormComponent as FormRegisterComponent } from "./components/register/form/form.component";
import { FormComponent as FormLoginComponent } from "./components/login/form/form.component";


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    FormRegisterComponent,
    FormLoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
