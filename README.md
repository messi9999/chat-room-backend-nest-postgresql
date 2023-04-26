# chat-room-backend-nest-postgresql

# Structure of this project

### Backend

NestJS

### Database

Postgresql

# 1. Get start

## Install

```
npm install
```

## Run

```
npm run start
```

or

```
npm run start:dev
```

# 2. API reference

- Base URL

```
localhost:3002
```

- Get:

```
/chat
```

Get the home message

- Get:

```
/api/chat
```

Get previous message from database

- Post:

```
/api/createRoom
```

Create new chat room
Example of request body:

```
{
    "email": "aaa@mail.com"
}
```

- Get: /room

```
/room
```

Get all the created rooms

- Get: /room:<uuid>

```
/room:<uuid>
```

Get specific room

- Post: /api/addUser

```
/api/addUser
```

Add new user to a specific room using room id
Body of the request has to contains room id
Like this:

```
{
    "email": "aaa@mail.com",
    "room": "3cda2d54-553e-4861-b42d-d5640b02b136"
}
```

- Get:

```
/api/getUsers:<uuid>
```

Get all users from specific room using room id

# 3. Database

There are 3 tables

### room

- id
- email

### user

- id
- email
- roomId

### chat

- id
- chat
- roomId
- userId

# 4. Socket.io

- When a client send a message it has to contain user email, roomid and userid in its body
- Example

```
{
    "chat": "Hello! How are you?",
    "room": "3cda2d54-553e-4861-b42d-d5640b02b136"
    "user": "f80ba23a-ecee-48c2-ac58-9eb7a0e83ef4"
}
```
