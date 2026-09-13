# API Conventions

## Base URL
`/api`

## Response Envelope

Success:
```json
{
  "success": true,
  "data": {},
  "message": ""
}

Error:
```json
{
  "success": false,
  "error": "message"
}
## Status Codes

- 200 OK — successful GET/PUT/DELETE
- 201 Created — successful POST
- 400 Bad Request — validation error
- 401 Unauthorized — missing/invalid token
- 403 Forbidden — valid token, insufficient permission
- 404 Not Found — resource doesn't exist
- 500 Internal Server Error — unhandled error

## Naming

- Routes: plural nouns (`/applications`, not `/application`)
- Resource IDs: MongoDB ObjectId in URL param (`/applications/:id`)
- Query params for filtering: `?status=Applied&sort=-deadline&search=google`

## Authentication

All protected routes require:

```text
Authorization: Bearer <jwt_token>