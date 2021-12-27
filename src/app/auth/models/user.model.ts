export interface UserI {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    token?: string;
    createdAt: string;
}

export interface UserDtoCreate extends Omit<UserI, 'id'>  {
    password: string;
}