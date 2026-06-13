# MERN WorkSpace

A full learning workspace covering the complete MERN stack — from HTML/CSS basics through JavaScript, Node.js, Express, MongoDB, and React. Built session by session at VNR.

---

## Repository Structure

```
MERN-WorkSpace/
├── session-1  to  session-14/     # HTML & CSS sessions
├── session-js-15  to  25/         # JavaScript sessions
├── NODE DEMO/                     # Node.js core module demos
├── node assignments/              # Node.js practice assignments
├── backend-demo-1/                # Express + MongoDB (native driver)
├── express-mongoose-backend/      # Express + Mongoose
├── first-react-app/               # React demo app
├── react-demo-two/                # React Context API demo
├── react-assignments/             # React assignments (all topics)
├── vnr-blog-app/                  # Full-stack MERN blog application
│   ├── client/                    # React frontend (Vite)
│   └── server/                    # Express + MongoDB backend
├── practise/                      # HTML/CSS/JS scratch files
├── assests/                       # Shared media assets
└── backend-assignment/            # Backend practice assignments
```

---

## Sessions Overview

### HTML & CSS — Sessions 1–14

Progressive sessions covering core web fundamentals.

| Session | Topics |
|---------|--------|
| session-1 | HTML basics, lists, nested lists |
| session-2 | HTML structure, linking CSS |
| session-3 | CSS selectors, box model |
| session-4 | Navigation, multi-page sites, city pages project |
| session-5 | CSS layouts |
| session-6 | Flexbox |
| session-7 | CSS Grid |
| session-8 | Responsive design |
| session-9 | Forms and inputs |
| session-10 | Advanced CSS projects |
| session-11 | UI component projects |
| session-12 | Combined layout projects |
| session-14 | Final HTML/CSS projects |

---

### JavaScript — Sessions 15–25

| Session | Topics |
|---------|--------|
| session-js-15 | JS basics, variables, DOM intro, assignments 1–10 |
| session-js-16 | Control flow, functions, function expressions |
| session-js-17 | Arrays, objects, basic operations |
| session-js-18 | Advanced array methods, complex objects |
| session-js-19 | Object creation patterns, inheritance |
| session-js-20 | Spread/rest, string methods, shallow vs deep copy |
| session-js-21 | Destructuring, error handling, ES modules |
| session-js-22 | Synchronous vs asynchronous JS, debugging |
| session-js-23 | Promises, promise chaining |
| session-js-24 | Fetch API, JSON, API requests |
| session-js-25 | DOM manipulation (3 levels), event handling |

---

### Node.js

**NODE DEMO** — Core Node.js module demos (file system, streams, etc.)

**node assignments** — Practice assignments covering Node.js concepts

---

## Backend Projects

### backend-demo-1
Express server connected to MongoDB using the native driver.

- Product CRUD API (`/product-api`)
- Error handling middleware
- Port: `3500`

**Stack:** Express, MongoDB (native driver), express-async-handler

```bash
cd backend-demo-1
npm install
node server.js
```

---

### express-mongoose-backend
Express server with Mongoose ODM — cleaner schema-based approach.

- User API (`/user-api`)
- Mongoose models with schema validation
- Port: `6000`

**Stack:** Express, Mongoose

```bash
cd express-mongoose-backend
npm install
node server.js
```

---

## React Projects

### first-react-app
A React demo app exploring core React concepts.

**Concepts covered:**
- Components, props, state
- Event handling
- `useEffect` hook
- React Router v6 (nested routes, `<Outlet>`)
- React Hook Form
- Context API
- Lazy loading with `React.lazy` and `Suspense`
- Task management UI

**Stack:** React 18, Vite, React Router v6, Bootstrap, react-hook-form, react-icons

```bash
cd first-react-app
npm install
npm run dev
```

---

### react-demo-two
Demo focused on Context API — component tree with A through I components passing state via context.

**Concepts covered:**
- `createContext` / `useContext`
- Counter context
- Users context

```bash
cd react-demo-two
npm install
npm run dev
```

---

### react-assignments
All React assignments in one Vite project, organized by assignment number.

| Assignment | Topic |
|------------|-------|
| assignment-1 | Employee table |
| assignment-2.x | UI design, products list, user profiles |
| assignment-3.x | Array state, useEffect |
| assignment-4.x | Registration form, user CRUD |
| assignment-5.x | Context API, parent-child communication |
| assignment-6 | Full routing (Header, Footer, Login, Register, Technologies) |
| assignment-9 | Task management with context |

**Stack:** React 18, Vite, React Router v7, Bootstrap, react-hook-form, react-icons

```bash
cd react-assignments
npm install
npm run dev
```

---

## Full-Stack App — VNR Blog App

A complete MERN blog platform with role-based access (User, Author, Admin) and Clerk authentication.

### Features

- **Users** — Sign up, sign in, read articles, add comments
- **Authors** — Create, edit, soft-delete articles (protected by Clerk auth)
- **Admin** — User/author management
- **Authentication** — Clerk (`@clerk/express`)
- **Routing** — Role-based React Router v6 routes

### Server (`/vnr-blog-app/server`)

| Route | Method | Description |
|-------|--------|-------------|
| `/user-api/user` | POST | Create new user |
| `/user-api/comment/:articleId` | PUT | Add comment to article |
| `/author-api/author` | POST | Create new author |
| `/author-api/article` | POST | Publish new article |
| `/author-api/articles` | GET | Get all active articles (auth required) |
| `/author-api/article/:articleId` | PUT | Edit article (auth required) |
| `/author-api/articles/:articleId` | PUT | Soft delete / restore article |
| `/admin-api/*` | — | Admin operations |

**Stack:** Express, Mongoose, Clerk, CORS, dotenv, express-async-handler  
**Port:** `4000` (or `process.env.PORT`)

```bash
cd vnr-blog-app/server
npm install
# create a .env file with DBURL and Clerk keys
node server.js
```

### Client (`/vnr-blog-app/client`)

React SPA with role-based routing.

| Route | Component |
|-------|-----------|
| `/` | Home — all articles |
| `/signin` | Sign In |
| `/signup` | Sign Up |
| `/user-profile/:email` | User dashboard + articles |
| `/author-profile/:email` | Author dashboard + post article |

**Stack:** React 18, Vite, React Router v6, Bootstrap, Context API

```bash
cd vnr-blog-app/client
npm install
npm run dev
```

---

## Tech Stack Summary

| Layer | Technology |
|-------|------------|
| Frontend | React 18, Vite, React Router, Bootstrap |
| State / Forms | Context API, react-hook-form |
| Backend | Node.js, Express.js |
| Database | MongoDB (native driver + Mongoose) |
| Auth | Clerk (`@clerk/express`) |
| Markup / Styling | HTML5, CSS3 |
| Language | JavaScript (ES6+) |

---

## Getting Started

1. Clone the repo
   ```bash
   git clone https://github.com/tejashwin-05/MERN-WorkSpace.git
   cd MERN-WorkSpace
   ```

2. Install dependencies for the project you want to run
   ```bash
   cd <project-folder>
   npm install
   ```

3. Make sure MongoDB is running locally (`mongodb://localhost:27017`) for `backend-demo-1` and `express-mongoose-backend`

4. For `vnr-blog-app/server`, create a `.env` file:
   ```
   DBURL=mongodb+srv://<your-connection-string>
   PORT=4000
   CLERK_SECRET_KEY=<your-clerk-secret>
   ```

---

## Author

**Tejashwin** — MERN Stack learner at VNR
