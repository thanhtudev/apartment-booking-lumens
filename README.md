
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


## Apartment Booking Lumens API

This API collection provides endpoints for managing apartment bookings and related entities.

### List Customer

- **Endpoint**: GET /customers
- **Description**: Retrieves a list of all customers.
- **Response**: No response details provided.

### List All Rooms

- **Endpoint**: GET /rooms
- **Description**: Retrieves a list of all rooms.
- **Response**: No response details provided.

### List Available Rooms

- **Endpoint**: GET /rooms/available-rooms
- **Description**: Retrieves a list of available rooms within a specified date range.
- **Parameters**:
  - `page` (integer): The page number of results (default: 1)
  - `limit` (integer): The maximum number of results per page (default: 10)
  - `start_date` (string): The start date of the availability range (format: YYYY-MM-DD)
  - `end_date` (string): The end date of the availability range (format: YYYY-MM-DD)
- **Response**: No response details provided.

### Get Booking Detail

- **Endpoint**: GET /bookings/{{booking_id}}
- **Description**: Retrieves the details of a specific booking.
- **Parameters**:
  - `booking_id` (string): The ID of the booking to retrieve.
- **Response**: No response details provided.

### Create Booking

- **Endpoint**: POST /bookings/book-multiple
- **Description**: Creates multiple bookings for a customer.
- **Request**:
  - **Body**:
    - **customerId** (integer): The ID of the customer making the bookings.
    - **bookings** (array): An array of booking objects containing the following properties:
      - **roomId** (integer): The ID of the room to book.
      - **start_date** (string): The start date of the booking (format: YYYY-MM-DD).
      - **end_date** (string): The end date of the booking (format: YYYY-MM-DD).
- **Response**: No response details provided.


