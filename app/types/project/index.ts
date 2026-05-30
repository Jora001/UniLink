export type Project = {
    "id": number,
    "title": string,
    "image": string,
    "description": string,
    "schedule": string,
    "jobType": string,
    "companyId": number,
    "createdAt": string,
    "updatedAt": string,
    "positions": [
      {
        "id": number,
        "projectId": number,
        "positionName": string,
        "title": string,
        "desc": string,
        "createdAt": string,
        "updatedAt": string
      }
    ]
  }