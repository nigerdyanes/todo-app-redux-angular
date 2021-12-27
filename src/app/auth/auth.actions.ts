import { createAction, props } from "@ngrx/store"
import { UserI, UserDtoCreate } from "./models/user.model";



export const registerUser = createAction('[Auth] Create User',
    props<{user:UserDtoCreate}>()
);

export const registerUserSuccess = createAction('[Auth] Create User Success', 
    props<{user: UserI }>()
);

export const registerUserFailed = createAction('[Auth] Create User Failed', 
   props<{payload:any }>()
);