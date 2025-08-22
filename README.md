

# Kala — Art Gallery E-commerce Platform
Welcome to the Art Gallery E-commerce Platform! This platform is designed for art enthusiasts and collectors who want to browse and purchase various forms of art, including paintings, sculptures, and more. The platform also includes an auction feature where users can bid on unique and rare pieces of art.
In addition to the e-commerce functionality, this platform also allows artists and creators to receive donations from Khalti who want to support their work. This platform is easy to use and navigate, with a user-friendly interface and secure payment options.

<br>

## Features
Here are some of the key features of the Art Gallery E-commerce Platform:
- Browse and Purchase Art
- Auctions
- Donations with Khalti
- Live Messaging
- User Accounts
- Search and Filter
- Stripe Payment
- Artist Profiles
- Reviews and Ratings
- Responsive Design

<br>

## Tech Stack
**Client:** React, Redux Toolkit, Material UI, Axios, Khalti Checkout Web, Socket IO

**Server:** Node, Express, Cloudinary, JSON Web Token, Nodemailer, Sharp, Stripe, Socket IO

<br>

## Demo
<div>
<span>
<h4>Banner Page</h4>
<img width="100%" alt="banner" src="https://user-images.githubusercontent.com/71174333/236187026-94346d16-7811-429d-b0c9-d9a2f20a63ca.jpg">
</span>
</div>

---

## Architecture

- __Frontend (`client/`)__
  - React (CRA), React Router, Redux Toolkit
  - UI: Material UI (MUI) + Ant Design (dark theme), custom CSS
  - Payments: Stripe Elements, Khalti Checkout Web
  - Realtime: Socket.IO client

- __Backend (`server/`)__
  - Node.js, Express, Socket.IO server
  - Auth: JWT with HTTP-only cookies
  - Media: Cloudinary for image/storage
  - Image processing: Sharp (thumbnails/watermarks)
  - Email: Nodemailer (SMTP)
  - Payments: Stripe, Khalti
  - Database: MongoDB (Mongoose)

Directory highlights:
- `server/configuration/` – Cloudinary, DB, Socket setup
- `server/controllers/` – business logic
- `server/routes/` – REST API definitions
- `server/middleware/` – auth, multer, error handling

<br>

## Features (Detailed)
- __Catalog__: list/filter/sort by categories, search, pagination
- __Art detail__: images, description, price, reviews, artist profile
- __Cart & Checkout__: Stripe payments, order creation, receipt email
- __Donations__: Khalti donations to artists
- __Auctions__: bid flow (timed), highest-bid tracking
- __Profiles__: user profile, likes, order history, artist portfolio
- __Admin__: manage users, arts, orders, reviews
- __Chat__: buyer-seller messaging (Socket.IO)
- __Uploads__: image upload with multer -> Cloudinary, optional watermarking
- __Responsive Dark UI__: modern glassmorphism theme

<br>

## Local Setup

1) Prerequisites
- Node.js LTS, npm
- MongoDB (Atlas or local)

2) Install deps
- Server: `cd server && npm install`
- Client: `cd client && npm install`

3) Environment variables
- Copy `server/config.env.example` to `server/config.env` and fill values:
```
PORT=8000
CLIENT_URL=http://localhost:3000

# MongoDB
DATABASE_URI=mongodb+srv://<user>:<pass>@cluster0.mongodb.net/kala

# JWT
JWT_SECRET=replace_me_with_a_long_random_secret
JWT_EXPIRES_IN=7d

# Cloudinary
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

# Stripe
STRIPE_SECRET_KEY=
STRIPE_PUBLISHABLE_KEY=

# Khalti
KHALTI_SECRET_KEY=

# Email (SMTP)
SMTP_HOST=
SMTP_PORT=587
SMTP_USER=
SMTP_PASS=
SMTP_FROM="Kala <no-reply@kala.local>"
```

4) Run
- Backend (from `server/`): `npm run dev`
- Frontend (from `client/`): `npm start`

To run frontend only, you can start the client without the server. The app will still render; payment screens requiring API keys won’t function until backend is up.

<br>

## API Overview

Base URL: `http://localhost:8000/api/v1`

- __Auth__
  - `POST /auth/register` – create account
  - `POST /auth/login` – login (sets HTTP-only cookie)
  - `POST /auth/logout` – clear session
  - `GET /auth/me` – current user

- __Users__
  - `GET /users/:id` – user profile
  - `PATCH /users/:id` – update profile
  - `GET /users/:id/likes` – liked arts

- __Arts__
  - `GET /arts` – list with query params: `q`, `category`, `sort`, `page`, `limit`
  - `GET /arts/:id` – art detail
  - `POST /arts` – create (auth, artist/admin)
  - `PATCH /arts/:id` – update (owner/admin)
  - `DELETE /arts/:id` – delete (owner/admin)
  - `POST /arts/:id/reviews` – add review

- __Uploads__
  - `POST /upload` – multipart/form-data via multer -> Cloudinary

- __Cart & Orders__
  - `POST /orders/stripe/intent` – create Stripe Payment Intent
  - `POST /orders` – finalize order after payment success
  - `GET /orders/my` – my orders
  - `GET /orders/:id` – order detail

- __Payments__
  - `GET /stripe-publishable-key` – returns Stripe publishable key
  - `POST /khalti/initiate` – create Khalti intent for donation

- __Auctions__
  - `GET /auctions` – list auctions
  - `POST /auctions/:id/bid` – place bid

- __Chat (Socket.IO)__
  - Namespace: `/chat`
  - Events: `join`, `message`, `typing`, `read`

Note: Exact route filenames live in `server/routes/` and controllers in `server/controllers/`.

<br>

## Database Models (MongoDB)

- __User__
  - name, email (unique), password(hash), role, avatar, bio
  - likes: [ArtId], orders: [OrderId]

- __Art__
  - title, description, category, price, status (sale/auction)
  - images (Cloudinary), artist (UserId), likesCount
  - reviews: [{ user, rating, comment, createdAt }]

- __Order__
  - user, items [{ artId, price }], amount, status, payment: { provider, id }

- __Auction__
  - art, startAt, endAt, currentBid, bids: [{ user, amount, at }]

- __Message__
  - roomId, from, to, text, readAt, createdAt

Schemas are in `server/models/` (names may vary slightly by file). Mongoose relations reference by ObjectId.

<br>

## Environment & Configuration

- CORS: `CLIENT_URL` controls allowed origin in dev
- Cookies: HTTP-only JWT cookie; set secure flags in production
- Cloudinary: required for uploads; see `server/configuration/cloudinary.js`
- Socket: server bootstraps IO in `server/configuration/socket.js`

<br>

## Scripts

Frontend (`client/package.json`):
- `npm start` – CRA dev server at 3000
- `npm run build` – production build
- `npm test` – tests

Backend (`server/package.json`):
- `npm run dev` – nodemon dev server at 8000
- `npm start` – production start

<br>

## Deployment Notes

- Set all env vars on your host (Stripe/Khalti/Cloudinary/DB/JWT/SMTP)
- Serve frontend build via CDN/host; point frontend to backend base URL
- Ensure HTTPS for cookies and payment providers

<br>

## Troubleshooting

- __Frontend shows white menus on dark__: ensure latest CSS is built; clear cache
- __CORS errors__: verify `CLIENT_URL` and server CORS config
- __Stripe errors__: publishable/secret keys must be set; check test mode
- __Khalti errors__: secret key and allowed domains must match
- __Image upload fails__: check Cloudinary creds and upload preset
- __Mongo connection fails__: verify `DATABASE_URI` network access/IP allowlist

<br>

