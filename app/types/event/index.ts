export type Event = {
    "id": number,
    "companyId": number,
    "name": string,
    "start": string,
    "end": string,
    "isOnline": boolean,
    "location": string,
    "duration": string,
    "isPayable": boolean,
    "isCompleted": boolean,
    "price": number,
    "ageLimit": number,
    "description": string,
    "image": string
};

export type AddEventType = {
    "companyId": number,
    "name": string,
    "start": string,
    "end": string,
    "isOnline": boolean,
    "location": string,
    "duration": string,
    "isPayable": boolean,
    "isCompleted": boolean,
    "price": number,
    "ageLimit": number,
    "description": string,
    "image": string
}