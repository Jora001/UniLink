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
    "id": number,
    "name": string,
    "surname": string,
    "email": string,
    "password": string,
    "nickname": string,
    "age": number,
    "role": string,
    "gender": string
    "isBlocked": boolean
}

export type ResetPswRequest = {
    "email": string
}

export type ResetPswVerify = {
    "email": string,
    "code": string,
    "password": string
}
    "user": UserData;
}
