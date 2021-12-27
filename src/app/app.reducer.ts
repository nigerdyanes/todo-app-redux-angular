import { ActionReducerMap } from "@ngrx/store";

import * as auth from "./auth/auth.reducer";

export interface AppState {
    auth: auth.State
} 

export const appReducers: ActionReducerMap<AppState> = {
    auth: auth.authReducer
}