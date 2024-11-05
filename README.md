# Project Documentation

## Overview

In this project, we fetch data from a news API and display it on a website built with a component-based architecture and a mobile-first design approach.
The client side of the project is organized into three layers for clear separation of concerns:

- Parent Components: High-level components like the main landing page that orchestrate the overall functionality and call other components as needed.
- Data Fetching Layer: A dedicated layer for handling data fetching and managing errors independently of the parent components.
- Presentational Components: UI-focused components that are responsible only for displaying the data, with no embedded logic.

## Prerequisites

- **Node.js** (version 16 or higher recommended)
- **npm** (version 6 or higher recommended)
- **Git**

## Packages Used

On client side

- "axios": "^1.7.7"
- "@types/react": "^18.3.12"
- "@types/react-dom": "^18.3.1"
- "typescript": "^5.6.3"

On server side

- "axios": "^1.7.7"
- "cors": "^2.8.5"
- "dotenv": "^16.4.5"
- "express": "^4.21.1"
- "node-cache": "^5.1.2"

## Installation

### 1. Clone the Repository

```bash
git clone git@github.com:NadineAtoui/news-website.git
cd news-website
```

### 2. Backend Setup (Node.js)

#### 1. Navigate to the backend directory:

```bash
cd server
```

#### 2. Install dependencies:

```bash
npm install
```

#### 3. Set up environment variables:

- Create a `.env` file in the root of the backend folder.
- Add variables like:

```bash
PORT=3000
API_KEY=your_api_key
```

#### 4. Start the backend server:

```bash
node api/news.js
```

**The server runs at http://localhost:3000 by default.**

## 3. Frontend Setup (React)

### 1. Navigate to the frontend directory:

```bash
cd ../client
```

### 2. Install dependencies:

```bash
npm install
// incase of conflicts try
npm install --legacy-peer-deps
```

### 3. Set up environment variables:

- Create a .env file in the root of the frontend folder.
- Add variables like:

```bash
REACT_APP_API_HOST=http://localhost:3000
```

### 4. Start the frontend server:

```bash
npm run start
```

**The frontend runs at http://localhost:3001 by default.**

## Usage

Once both servers are running:

1. Access the application at http://localhost:3001.
2. The frontend communicates with the backend API for data.

## Project Structure

```bash
news-website/
    ├── server/
    │   ├── api/
    │   ├── .env
    │   └── package.json
    ├── client/
    │   ├── src/
    │   │   ├── api/
    │   │   ├──  components/
    │   │   ├──  helpers/
    │   │   ├──  hooks/ // custom hooks
    │   │   ├──  pages/
    │   │   ├──  types/
    │   │   ├──  index.tsx
    │   │   └──  content.js
    │   ├── .env
    │   ├──  tsconfig.json
    │   └── package.json
    └── README.md
```

## Running Tests

Use the following command to run the tests:

```bash
npm test
```

This will execute the test suite and provide the results in your terminal.

## Troubleshooting

- CORS Issues: Ensure that CORS is enabled in the backend for requests from the frontend origin.
- Environment Variables: Check that all required environment variables are correctly set in both .env files.
