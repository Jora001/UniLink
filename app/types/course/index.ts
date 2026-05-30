export type Course = {
    "id": number,
    "title": string,
    "description": string,
    "price": number,
    "image": string,
    "rating": number,
    "category": string,
    "duration": string,
    "companyId": number,
    "createdAt": string,
    "updatedAt": string
};

export type CoursePagination = {
    "total": number,
    "page": number,
    "totalPages": number
};