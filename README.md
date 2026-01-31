# Blogs API

A RESTful Blogs API made with Node.js, Express and MongoDB with full CRUD operation capabilities with request validation and API documentation.

## Features

- CRUD (Create, Read, Update, Delete) operations on blogs.
- RESTful API design
- Request validations using Joi
- API documentation using Swagger

## Tech Stack

- **Backend**: Node.js and Express
- **Database**: MongoDB
- **Validation**: Joi
- **API Docs**: Swagger (OpenAPI)

## Live demo

Coming soon

## API Endpoints

| Method | Endpoint       | Description       |
| ------ | -------------- | ----------------- |
| POST   | /api/blogs     | Create a new blog |
| GET    | /api/blogs     | Get all blogs     |
| GET    | /api/blogs/:id | Get blog by ID    |
| PUT    | /api/blogs/:id | Update a blog     |
| DELETE | /api/blogs/:id | Delete a blog     |

## Example request

```
POST /api/blogs
Content-Type: application/json

{
  "title": "My First Blog",
  "content": "This is my first blog post"
}

```

## Setup for locally running the API

### Clone the repository

```bash
git clone https://github.com/kunalpatil22/blogs-api.git
```

### Install packages

```bash
cd blogs-api
npm install
```

### Setup environment variables

Create a `.env` file in root folder

```env
NODE_ENV='development'
PORT=8080
MONGODB_URI='mongodb://127.0.0.1:27017/blogs_api'

# Swagger documentation server URL if you are deploying the API
SWAGGER_SERVER_URL=<deployment_server_url>
```

### Starting the server

```bash
npm start
```

### Local demo

- **API**: http://127.0.0.1:8080/api/blogs
- **Docs**: http://127.0.0.1:8080/api/docs

## Future Improvements

- Authentication & authorization (JWT)
- Pagination and filtering
- Slug-based blog URLs
- Rate limiting
- Role-based access control

## Contributing

Contributions are welcome!

## Licensing

This project is licensed under the [MIT License](LICENSE).
