# Dial Rishikesh

Dial Rishikesh is a premier IT Solutions and Digital Marketing Agency based in Uttarakhand. This platform serves as the digital gateway for localized marketing excellence, blending Himalayan tradition with modern technology.

## Project Vision
To empower Uttarakhand's businesses with world-class digital tools, emphasizing the "Vocal for Local" mission and delivering high-performance IT solutions.

## Technology Stack
- **Frontend**: [Next.js](https://nextjs.org/) (latest)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v4)
- **Backend/Auth/DB**: [Supabase](https://supabase.com/)
- **Hosting**: [Vercel](https://vercel.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)

## Project Structure
This project follows a **Single-App Monorepo** structure:
- `src/frontend/web`: Main Next.js application.
- `src/frontend/web/admin`: Admin dashboard for blog management.
- `src/backend`: Shared backend logic, database schemas, and migration scripts.
- `docs/`: Comprehensive project documentation.
- `scripts/`: Automation and setup scripts.

## Getting Started
### Prerequisites
- Node.js (Latest LTS)
- npm or yarn
- Supabase Account

### Installation
1. Clone the repository.
2. Run the setup script:
   ```bash
   ./scripts/setup.sh
   ```
3. Configure your `.env` file with the credentials provided in `.env.example`.
4. Start the development server:
   ```bash
   cd src/frontend/web
   npm run dev
   ```

## License
© 2026 Dial Rishikesh. All rights reserved.
