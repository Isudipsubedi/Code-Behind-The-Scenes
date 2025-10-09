Description
As a self-taught developer eager to dive into backend development, I created this project to learn modern backend concepts hands-on. Starting from scratch with no prior backend experience (just basic JavaScript knowledge), I explored Node.js, Express.js, databases, authentication, and containerization. Along the way, I built and deployed a demo to-do app that includes user registration/login, JWT token verification for secure authentication, CRUD operations for to-dos (create, read, update, delete), route handling, and database interactions.
This project evolved through stages: beginning with theory on how the internet and full-stack works, then a basic server, a comprehensive app with SQLite, and finally an advanced version with PostgreSQL, Prisma ORM, and Docker. I deployed the final app to Vercel for a live demo, making it accessible online. The process helped me understand real-world backend architecture, and now I have a portfolio-ready project!
Live Demo: (https://code-behind-the-scenes.onrender.com/)

Features

User Authentication: Secure registration and login with JWT tokens for session management and verification.
Token Verification: Middleware to protect routes, ensuring only authenticated users can access their to-dos.
CRUD Operations for To-Dos: Create new to-dos, read (fetch all/user-specific), update (e.g., mark as complete), and delete to-dos.
Route Handling: Organized API endpoints for auth (/auth/register, /auth/login) and to-dos (/todos).
Database Integration: Starts with SQLite for simplicity, evolves to PostgreSQL with Prisma ORM for efficient queries.
Frontend Serving: Serves a simple HTML/CSS/JS frontend for the to-do app.
Containerization: Dockerized for easy setup and deployment.
Deployment: Hosted on Vercel with PostgreSQL database (via Vercel Postgres or similar).

Technologies Used

Backend: Node.js, Express.js
Authentication: JSON Web Tokens (JWT), bcrypt for password hashing
Databases: SQLite (initial), PostgreSQL (advanced)
ORM: Prisma for database interactions
Containerization: Docker and Docker Compose
Deployment: Vercel (with PostgreSQL integration)
Testing: REST Client extension in VS Code for API emulation

What I Learned
Through this project, I gained practical knowledge in:

Building RESTful APIs with Express.js and handling network requests.
Implementing secure JWT authentication, including token generation, verification, and middleware protection.
CRUD operations with databases: From raw SQL queries in SQLite to ORM-based interactions with Prisma and PostgreSQL.
Route organization and endpoint protection.
Containerizing apps with Docker for consistent environments.
Deploying a full backend app to Vercel, including database setup and environment variables.
Debugging, error handling, and best practices like environment variables for secrets.

This hands-on approach solidified concepts like full-stack communication, client-server interactions, and scalable backend design.
Getting Started (Local Setup)

Clone the Repository:
textgit clone https://github.com/yourusername/node-backend-todo-app.git
cd node-backend-todo-app

Install Dependencies (Navigate to the relevant chapter folder, e.g., cd chapter4 for the advanced version):
textnpm install

Set Up Environment Variables:

Create a .env file in the root (for Chapter 4):
textDATABASE_URL="postgresql://postgres:postgres@localhost:5432/todo-app?schema=public"
JWT_SECRET=your_jwt_secret_here
PORT=5003
NODE_ENV=development

Update DATABASE_URL as needed for your setup.


** Prisma Setup** (For Chapter 4):

Generate Prisma client: npx prisma generate
Run migrations: npx prisma migrate dev --name init


Run Locally (Without Docker):

npm run dev
Access at http://localhost:5003 (or your port).


With Docker (For Chapter 4):

Build: docker-compose build
Migrate DB: docker compose run app npx prisma migrate dev --name init
Run: docker-compose up
Stop: Ctrl+C or docker-compose down.



Deployment to Vercel
To deploy like I did:

Set Up Vercel:

Sign up at vercel.com.
Install Vercel CLI: npm i -g vercel.
Log in: vercel login.


Configure Prisma with Vercel Postgres:

Create a free Postgres database on Vercel (via dashboard).
Update prisma/schema.prisma with the Vercel-provided DATABASE_URL.
Add environment variables in Vercel dashboard: DATABASE_URL, JWT_SECRET, NODE_ENV=production.


Deploy:

Push to GitHub.
In render dashboard, import your repo and deploy.
Set build command: npx prisma generate && npx prisma migrate deploy && npm run start (add start script in package.json: "start": "node src/server.js").
Vercel handles Node.js apps seamlessly; Prisma works with serverless functions.


Note: For production, use a secure JWT_SECRET and monitor database connections.
Usage

Register: POST /auth/register with { "username": "user@example.com", "password": "pass123" }.
Login: POST /auth/login with same body; get JWT token.
Protected Routes: Use token in headers (Authorization: <token>) for /todos (GET all, POST new, PUT/:id update, DELETE/:id delete).

Test with VS Code REST Client or tools like Postman.
Troubleshooting

Database errors? Run migrations again.
Port conflicts? Update .env PORT.
Docker issues? Ensure Docker Desktop is running.
Deployment fails? Check Vercel logs for Prisma connection issues.
