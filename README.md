# Next-Gen Learning Dashboard

A futuristic student learning dashboard built with Next.js, Supabase, Tailwind CSS, and Framer Motion.

## Live Demo

Vercel Deployment URL: https://learn-x-dashboard.vercel.app/

## Features

- Responsive Bento Grid Layout
- Server-Side Data Fetching
- Supabase Database Integration
- Animated Course Progress Bars
- Activity Heatmap
- Framer Motion Stagger Animations
- Animated Sidebar Navigation
- Loading Skeletons
- Error Handling
- Mobile Navigation

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion
- Supabase
- Lucide React

## Architecture Decisions

### Server Components

Course data is fetched using Next.js Server Components to reduce client-side JavaScript and improve performance.

### Client Components

Interactive UI elements such as:

- Sidebar Navigation
- Progress Bar Animations
- Course Card Hover Effects

are implemented as Client Components.

### Component Structure

components/
├── layout/
├── dashboard/
└── ui/

This structure keeps the application modular and scalable.

## Challenges Faced

### Supabase Row Level Security

Initially, data was not returned because no RLS policies were configured. A public read policy was added for development.

### Hydration Issues

The activity heatmap initially used Math.random() during rendering, causing hydration mismatches. This was fixed by using deterministic data.

### Responsive Layout

The Bento Grid required different layouts across desktop, tablet, and mobile breakpoints while maintaining consistent spacing and animations.

## Environment Variables

Create a .env.local file using:

NEXT_PUBLIC_SUPABASE_URL=

NEXT_PUBLIC_SUPABASE_ANON_KEY=

## Running Locally

npm install

npm run dev
