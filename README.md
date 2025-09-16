# IDEADoodle — Miro-like Collaborative Whiteboard (Next.js)

A simplified README for **IDEADoodle**, a collaborative whiteboard app built with **Next.js**, using **Clerk** for authentication and organizations, **Convex** for backend storage and real-time data, and **Liveblocks** for presence and collaboration.

---

## Overview

IDEADoodle is inspired by Miro. It allows users to create boards, draw, add sticky notes, and collaborate in real time with teammates. The app combines three core services:

- **Clerk**: Manages authentication (sign-in, sign-up) and organization/team management.
- **Convex**: Provides database, server functions, and persistent real-time sync.
- **Liveblocks**: Handles real-time presence (cursors, selections) and collaborative editing.

---

## Tech Stack

- **Next.js** — React framework for the frontend
- **Clerk** — Authentication & organizations
- **Convex** — Backend with real-time database
- **Liveblocks** — Real-time collaboration tools
- **Tailwind CSS** (optional) — Styling

---

## Key Features

- Secure login and organization-based access with Clerk
- Create and manage collaborative boards
- Real-time presence: see teammates’ cursors and actions
- Persistent storage of board data in Convex
- Liveblocks-powered instant collaboration
- Role-based permissions (e.g., owner, editor, viewer)

---

## Prerequisites

Before starting, you’ll need:

- Node.js (latest LTS)
- Clerk account and API keys
- Convex project setup
- Liveblocks project and keys

---

## Environment Setup

You will need environment variables for:
- Clerk (auth keys, frontend API)
- Convex (project URL, keys)
- Liveblocks (public and secret keys)

These should be placed in a `.env.local` file during development or in your hosting provider’s settings.

---

## Development Steps

1. Clone the project repository.
2. Install dependencies with `npm install` or `yarn install`.
3. Configure `.env.local` with Clerk, Convex, and Liveblocks keys.
4. Start Convex dev server (if required).
5. Run the app locally with `npm run dev`.
6. Log in with Clerk and test board creation and real-time collaboration.

---

## Architecture (High-level)

- **Frontend (Next.js)**: UI and routes.
- **Authentication (Clerk)**: Users and teams.
- **Backend (Convex)**: Persistent storage and access rules.
- **Collaboration (Liveblocks)**: Real-time presence and shared actions.

Convex ensures data is stored reliably, while Liveblocks ensures instant collaboration. Together they provide durability and speed.

---

## Deployment Checklist

- Add all required environment variables in your deployment platform.
- Configure Clerk redirect URIs and allowed origins.
- Verify Convex deployment is live and accessible.
- Configure Liveblocks allowed origins and keys.

---

## Future Ideas

- Export boards as images or PDFs
- Templates and frames
- Comments and discussions on boards
- Video/audio calls per board

---

## Previews

<img width="3320" height="1714" alt="localhost_3000_" src="https://github.com/user-attachments/assets/9a140839-b43d-4d0d-b721-e385131c4e2f" />
<img width="3320" height="1714" alt="localhost_3000_board_j576enjaz1e63mqydzxpnhpx1s7nk62z (1)" src="https://github.com/user-attachments/assets/a48304c3-a747-4e45-9036-52b083f6c7aa" />
<img width="3320" height="1714" alt="localhost_3000_board_j576enjaz1e63mqydzxpnhpx1s7nk62z (2)" src="https://github.com/user-attachments/assets/9b26bc53-f250-4572-a7ff-82920f63ceef" />
<img width="3320" height="1714" alt="localhost_3000_board_j576enjaz1e63mqydzxpnhpx1s7nk62z" src="https://github.com/user-attachments/assets/de7459bc-319f-4119-aa35-60c1caa97bba" />

---


*Thanks for Visiting*
