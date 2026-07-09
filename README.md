# 💰 Budgety App

A modern, user-friendly budget management application built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- 📊 **Easy Tracking** - Quickly add and categorize your transactions
- 🎯 **Budget Goals** - Set budget limits for different categories
- 📈 **Insights** - Visualize your spending with charts and reports
- 💳 **Transaction Management** - View, edit, and delete transactions
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- 🔐 **Secure** - Built with security best practices

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, PostCSS
- **HTTP Client**: Axios
- **Code Quality**: ESLint
- **Package Manager**: npm/yarn

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/AjibadeHassan/Budgety-App.git
cd Budgety-App
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create environment configuration:
```bash
cp .env.local.example .env.local
```

4. Update `.env.local` with your configuration:
```
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000/api
```

### Running the Application

**Development mode:**
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:3000`

**Production build:**
```bash
npm run build
npm run start
```

### Linting

```bash
npm run lint
# or
yarn lint
```

## Project Structure

```
Budgety-App/
├── pages/              # Next.js pages and API routes
│   ├── api/           # API endpoints
│   ├── _app.tsx       # App wrapper
│   ├── _document.tsx  # Document wrapper
│   ├── index.tsx      # Home page
│   └── dashboard.tsx  # Dashboard page
├── components/        # Reusable React components
│   ├── Navbar.tsx
│   └── Footer.tsx
├── lib/               # Utility functions and API client
│   └── api.ts        # Axios configuration
├── types/             # TypeScript type definitions
│   └── index.ts
├── styles/            # Global styles
│   └── globals.css
├── public/            # Static files
└── README.md          # Project documentation
```

## Pages

### Home Page (`/`)
- Landing page with feature overview
- Call-to-action buttons for signup and demo
- Feature highlights

### Dashboard (`/dashboard`)
- Overview of financial summary
- Monthly budgets tracking
- Recent transactions list
- Budget vs. spent visualization

## API Routes

### `GET /api/hello`
Welcome endpoint to verify API is working

**Response:**
```json
{
  "message": "Welcome to Budgety API!"
}
```

## Component Documentation

### Navbar Component
- Sticky navigation bar
- Responsive mobile menu
- Navigation links to home, dashboard, and transactions
- Login button

### Footer Component
- Multi-column footer layout
- Company info
- Product, Support, and Legal links
- Copyright year (auto-updated)

## Type Definitions

```typescript
// Transaction
interface Transaction {
  id: string;
  category: string;
  amount: number;
  description: string;
  date: Date;
  type: 'income' | 'expense';
}

// Budget
interface Budget {
  id: string;
  category: string;
  limit: number;
  spent: number;
  month: string;
}

// API Response
interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}
```

## API Client

The app includes a pre-configured Axios client with:
- Automatic authorization header injection
- Token management via localStorage
- Automatic redirect to login on 401 errors
- Base URL configuration from environment

**Usage:**
```typescript
import apiClient from '@/lib/api';

const response = await apiClient.get('/transactions');
```

## Styling

- **Framework**: Tailwind CSS with custom color scheme
- **Colors**:
  - Primary: `#3B82F6` (Blue)
  - Secondary: `#10B981` (Green)
  - Danger: `#EF4444` (Red)
  - Warning: `#F59E0B` (Amber)

## Future Enhancements

- [ ] User authentication system
- [ ] Backend API implementation
- [ ] Database integration
- [ ] Advanced analytics and charts
- [ ] Budget alerts and notifications
- [ ] Export transactions (CSV, PDF)
- [ ] Dark mode support
- [ ] Mobile app (React Native)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email hassanajibade17@gmail.com or open an issue on GitHub.

## Author

**Ajibade Hassan Ademidun**
- GitHub: [@AjibadeHassan](https://github.com/AjibadeHassan)
- Email: hassanajibade17@gmail.com

---

**Made with ❤️ by Ajibade Hassan**
