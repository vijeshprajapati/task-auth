## Nestjs Auth 

A simple backend REST API for a blog built using NestJS, Prisma, PostgreSQL and Swagger. 

## Installation

1. Install dependencies: `npm install`
2. Make sure you have a local instance of PostgreSQL running. 
3. Apply database migrations: `npx prisma migrate dev` 
4. Start the project:  `npm run start:dev`

#### Swagger Documentation

5. Access the Swagger documentation at http://localhost:3000/api

### Database schema
The database schema is as follows
```
{
  id: Int 
  name: String 
  password: String
  username: String
  email: String
  role: String
}
```
## Endpoints
1. /auth/register: Register User in database.

2. /auth/login: Login the user

3. /auth/refresh: Refresh the auth Token

#### Role Protected
4. /users: To get information of all the users in the database. This endpoint is protected by Role Based Authorization.
- Created a custom decorator @Roles(), so that RBAC can be implemented easily
- A default Admin has been created in the database. Only Role admin can access the /users endpoint

5. /users/comments: This is the comments route

