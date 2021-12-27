import { createReducer, Action, on } from "@ngrx/store";

import * as actions from "./auth.actions";

import { UserI } from "./models/user.model";

export interface State {
    user: UserI  | null,
    token: string | null,
    loaded : boolean,
    loading: boolean,
    error  : any
}

export const initialState: State = {
    user:null,
    token: null,
    loaded : false,
    loading: false,
    error  : null
}

const _authReducer = createReducer(initialState,
    on(actions.registerUser, (state) => ({ ...state, loading: true })),
    on(actions.registerUserSuccess, (state, { user } ) => ({ ...state, loading: false, loaded: true,  user: { ...user }})),
    on(actions.registerUserFailed, (state, { payload }) => ({ ...state, loading: false, loaded: false, error: { ...payload }}))
);

export function authReducer(state: State | undefined, action: Action) {
    return _authReducer(state, action);
}