import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UserService } from "../services/auth/user.service";

import * as authActions from "../auth/auth.actions";
import { catchError, map, mergeMap, of } from "rxjs";


@Injectable()
export class AuthEffects {

    constructor(
        private actions$: Actions,
        private userService: UserService
    ){}
    
    createUser$ = createEffect(
        () => this.actions$.pipe(
          ofType( authActions.registerUser ), // Disparo la primera accion para activar loading
          mergeMap( 
              ( action ) => this.userService.create( action.user )
                .pipe(
                    map(user => authActions.registerUserSuccess({user: user})), // Accion que guarda datos de request
                    catchError(err => of(authActions.registerUserFailed({payload: err}))) // Accion que guarda error en request
                )
          )
        )
    );

    loginUser$ = createEffect(
        () => this.actions$.pipe(
            ofType(authActions.login),
            mergeMap(
                (action) => this.userService.login(action.user)
                .pipe(
                    map(response => authActions.loginSuccess({token: response.token})),
                    catchError(err => of(authActions.loginFailed({payload: err})))
                )
            )
        )
    )
}