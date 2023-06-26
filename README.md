
## Apartment Booking System

## Description

- Purpose: The system is meant for managing a simple apartment booking system including rooms, customers and bookings.
- Key Feature:
  - Customer can get list available rooms.
  - Customer can book multiple rooms.

## Prerequisites

- Node >= 16
- Docker
- PostgreSQL

We use framework NESTJS
[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Run With Docker Compose

```bash
docker-compose up -d
```
## Run Manually

### Install postgres

**docker**:

```bash
docker run -d  -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=remi -p 5432:5432 --name docker-postgres postgres
```
### Setup .env

`.env` file with the following properties.

To generate file .env, you can run script
`./scripts/generate-env.ts`
or
`npm run generate-env`

## Installation

```bash
$ npm install
```

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

Url: http://localhost:4000

