import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { AppState } from '../../../../app.reducer';

import * as authActions from "../../../auth.actions";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form-login',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnDestroy {

  loginForm: FormGroup
  subcription: Subscription;

  constructor(
    private fb: FormBuilder,
    private router:Router,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });

    this.subcription = this.store.select('auth').subscribe(({token}) => {
      if (token) {
        this.router.navigate(['/home/todos']);
      }
    });
  }

  login(){
    if (this.loginForm.invalid)
      return;
    console.log(this.loginForm.value);
    this.store.dispatch( authActions.login({user: this.loginForm.value }) );
  }

  ngOnDestroy(): void {
    this.subcription.unsubscribe();
  }

}
