export type UserData = {
    "name": string,
    "surname": string,
    "email": string,
    "password": string,
    "nickname": string,
    "age": number,
    "role": string,
    "gender": string
}

export type SignInData = {
    "email": string,
    "password": string
}

export type UserDataResponse = {
    "user": UserData;
}