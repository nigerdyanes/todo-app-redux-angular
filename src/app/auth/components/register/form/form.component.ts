import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Subscription } from 'rxjs';

import { AppState } from '../../../../app.reducer';
import * as auth from "../../../auth.actions";

@Component({
  selector: 'app-form-register',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnDestroy {

  registerForm: FormGroup;
  subcription: Subscription

  constructor(
    private fb: FormBuilder,
    private store:Store<AppState>,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });

    this.subcription = this.store.select('auth').subscribe(({loaded}) => {
      if (loaded) {
        console.log('se cargo');
        this.router.navigate(['/auth/login']);
      }
    })

  }


  register(){
    if (this.registerForm.invalid)
      return ;
    this.store.dispatch( auth.registerUser({ user: {... this.registerForm.value} }) );
  }

  ngOnDestroy(): void {
      this.subcription.unsubscribe();
  }

}
