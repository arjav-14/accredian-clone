# Accredian Enterprise Page - Partial Clone

A high-fidelity, fully responsive clone of the Accredian Enterprise landing page built with **Next.js**, **Tailwind CSS**, and **Neon Postgres**.

## 🚀 Live Links
- **Vercel Deployment**: [Your Vercel Link Here]
- **GitHub Repository**: [Your GitHub Repo Link Here]

## 🛠️ Tech Stack
- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **Database**: Neon Postgres (Serverless PostgreSQL)
- **Deployment**: Vercel

---

## 📖 Table of Contents
- [Setup Instructions](#setup-instructions)
- [Approach Taken](#approach-taken)
- [AI Usage Explanation](#ai-usage-explanation)
- [Future Improvements](#future-improvements)

---

## ⚙️ Setup Instructions

### 1. Prerequisites
- Node.js (v14 or higher)
- npm or pnpm

### 2. Local Installation
```bash
# Clone the repository
git clone https://github.com/arjav-14/accredian-clone.git

# Navigate to the project folder
cd accredian-clone

# Install dependencies
npm install

# Run the development server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to see the result.

### 3. Database Configuration
To make the "Enquiry" form work, create a `.env.local` file at the root:
```env
DATABASE_URL='your_neon_postgres_url_here'
```

---

## 🎯 Approach Taken

The project was built using a **Modular Component Architecture**, ensuring each section of the landing page is independent and reusable.

### Key Implementation Details:
- **Responsive Navigation**: Implemented a sticky navbar with a "Scroll-Spy" logic that highlights the active section as the user scrolls.
- **Micro-Animations**: Used Tailwind CSS animations for the mobile client marquee and course segmentation carousels to match the premium "Enterprise" feel.
- **Lead Capture System**: Developed a functional API route (`/api/enquire`) that handles form validation and stores data in a persistent Neon Postgres database.
- **Performance Optimization**: Structured all images and components for fast loading and optimized for a standalone Vercel output.

---

## 🤖 AI Usage Explanation

This project was developed through a **Pair-Programming collaboration** with an AI coding assistant. 

- **Role of AI**: The AI assisted in scaffolding the initial component structures, debugging complex CSS responsiveness (like the mobile marquee), and writing the initial logic for the Next.js API routes.
- **Role of Developer**: I guided the design aesthetics, dictated the project architecture, provided the specific business logic for the form fields, and managed the deployment and database configuration.

---

## ✨ Future Improvements

Given more time, I would implement the following:
1. **Form Validation**: Integrate `React Hook Form` and `Zod` for more robust client-side validation.
2. **Dashboard**: Create a password-protected administrative dashboard to view and manage leads stored in the database.
3. **Advanced Animations**: Use `Framer Motion` for more complex section-entry animations and smooth modal transitions.
4. **Email Integration**: Connect the API to a service like `Resend` to send instant email notifications whenever a new lead enquired.

---

### 📝 Author
**Arjav** - Full Stack Developer
