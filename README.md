# SocioTalk

A simple social posts application built with **Node.js (Express)**, **PostgreSQL**, and **React**. Users can create posts, view all posts, like posts, and comment on posts. Authentication is handled via JWT stored in cookies.

---

## Features

- User authentication (JWT-based)
- Create, view, and list posts
- Like and comment on posts
- Separate pages for "My Posts" and "All Posts"
- Likes and comments update in real-time on the frontend
- Secure cookie-based JWT authentication

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Vansh98789/SocioTalk.git
cd SocioTalk

2. Backend Setup
cd backend
bun install


Create a .env file with your database URL:

DATABASE_URL="postgresql://neondb_owner:npg_HLnSmqUjAK28@ep-bold-king-aiing12i-pooler.c-4.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"


Start the backend server:

bun index.ts


The backend runs on http://localhost:3000.

 3. Frontend Setup
cd ../frontend
npm install
npm run dev


The frontend runs on http://localhost:5173.
