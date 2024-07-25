# QEvent - Event Management System

QEvent is a comprehensive Event Management System built with Spring Boot for the backend API, React.js for the frontend user interface, and PostgreSQL as the relational database.

## Features

- Create, manage, and view events
- Register attendees
- User authentication and authorization
- QR code generation for event attendance

## Prerequisites

- Java JDK 11 or later
- Node.js 14 or later
- PostgreSQL 12 or later
- Maven 3.6 or later

## Backend Setup

1. Navigate to the Backend directory:`cd Backend`

2. Configure the database connection in `src/main/resources/application.properties`

3. Build the project:`mvn clean install`

4. Run the application: navigate to the `QeventApplication.Java` fie and run the file

The backend will start on `http://localhost:8080`

## Frontend Setup

1. Navigate to the frontend directory: `cd frontend`

2. Install dependencies:`npm install` or `npm i`

3. Start the development server:`npm start`
4. The frontend will be available on `http://localhost:3000`

<img src="https://t.bkit.co/w_66a1d1c7db357.gif" />
