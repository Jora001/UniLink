export type ProfileData = {
    "id": number,
    "name": string,
    "surname": string,
    "email": string,
    "nickname": string,
    "gender": string,
    "age": number,
    "dateOfBirth": string,
    "phone": string,
    "address": string,
    "education": {
        "institution": string,
        "degree": string
    }[],
    "skill": string[]
}


export type UpdatingUserData = {
    "gender": string,
    "dateOfBirth": string,
    "education": {
        "institution": string,
        "degree": string
    }[],
    "skill": string[],
    "phone": string,
    "email": string,
    "address": string,
    "nickname": string
}

