# Accredian Enterprise - Landing Page Clone

This project is a fully responsive landing page clone for **Accredian Enterprise**, built as an internship assignment. It is designed to be a high-converting, modern, and engaging landing page for enterprise training solutions.

## 🚀 Tech Stack Used

- **Framework**: Next.js (App Router)
- **Language**: JavaScript (ES6+)
- **Styling**: Tailwind CSS v4
- **Components**: Functional React Components + Hooks (`useState`, `useEffect`)
- **Backend/API**: Next.js Serverless API Routes (Mock Data)

## 📁 Component Structure

The application is structured to decouple reusable UI elements from the main layout.

```text
/app
├── /components
│   ├── Navbar.js         // Responsive top navigation with mobile menu
│   ├── Hero.js           // First visual impression, value proposition & primary CTA
│   ├── Programs.js       // Dynamic grid loaded from the API
│   ├── WhyAccredian.js   // Icon-based feature grid detailing the platform's value
│   ├── Testimonials.js   // Social proof section with quotes and avatars
│   ├── CTASection.js     // Final 'Get Started' push 
│   ├── LeadForm.js       // Lead capture form integrated inside the CTA section
│   └── Footer.js         // Company links, contact info, and social icons
├── /api
│   ├── /programs/route.js // GET: Returns mock array of programs
│   └── /leads/route.js    // POST: In-memory store for captured lead form submissions
├── page.js               // Parent assembly file importing and stacking all components
├── layout.js             // Global HTML/Body layout with Inter font injection
└── globals.css           // Tailwind root configuration and brand color variables
```

## ⚙️ Setup Instructions

To run this project locally, follow these steps:

1. **Clone the repository** (if applicable) or navigate to the project directory:
   ```bash
   cd accredian-clone
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **View the application**:
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🌐 Deployment Instructions (Vercel)

This project is production-ready and optimized for Vercel deployment.

1. Push your code to a GitHub/GitLab repository.
2. Go to [Vercel](https://vercel.com) and log in.
3. Click "Add New Project" and import your repository.
4. Leave the default settings (Build Command: `npm run build`, Output Directory: `.next`).
5. Click **Deploy**. Vercel will automatically detect the Next.js App Router and deploy it seamlessly!

## 🤖 AI Usage Section

As per the requirements, AI assistance was utilized in the creation of this project.

**AI assisted with:**
- **Component planning**: Structuring the division between the main `page.js` and the isolated functional components.
- **Layout generation**: Creating responsive semantic HTML structure for the grid-based sections (like Programs and Features).
- **Tailwind styling suggestions**: Constructing the modern design system, glassmorphism overlays, and defining the primary blue brand colors `#1b72e8`.
- **Mock API structure**: Setting up Next.js app directory API routes (`/api/programs` and `/api/leads`) with error handling and local memory arrays.

**Manual work included:**
- **Responsive tuning**: Ensuring mobile padding, font sizing, and hamburger menus functioned effectively.
- **Component reuse structure**: Mapping out how the API data connects properly to `Programs.js` state.
- **Layout hierarchy decisions**: Sizing the hero sections and deciding to embed the Lead Form directly into a consolidated `CTASection.js` for better conversion flow without leaving the page.
- **UI refinements**: Iterating on standard colors to perfectly match the provided sample image.

## 📈 Future Improvements

While this clone meets the assignment criteria, several enhancements could be made before a real-world release:

1. **Database Integration**: Replace the in-memory array for leads with a real PostgreSQL database (e.g., Supabase or Prisma).
2. **Form Validation Library**: Integrate `React Hook Form` and `Zod` to implement more robust client-side validation and better error state handling in the Lead Form.
3. **Animations**: Incorporate `Framer Motion` to add scroll-triggered entrance animations for the program cards and features.
4. **Dark Mode**: While a light enterprise theme is currently implemented, a toggle for a comprehensive dark mode would make the dashboard more modern.
