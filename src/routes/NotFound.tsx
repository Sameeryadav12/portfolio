// src/routes/NotFound.tsx
import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="max-w-2xl mx-auto p-6 text-center">
      <h1 className="text-4xl font-semibold mb-4">404 — Not Found</h1>
      <p className="opacity-80 mb-6">
        The page you’re looking for doesn’t exist or has moved.
      </p>
      <Link className="btn btn-primary" to="/">Go Home</Link>
    </section>
  )
}
