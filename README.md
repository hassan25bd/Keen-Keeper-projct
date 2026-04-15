# 👥 KeenKeeper — Keep Your Friendships Alive

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![Node Version](https://img.shields.io/badge/node-%3E%3D18-green)

## 📝 Description

**KeenKeeper** is a modern web application designed to help you manage and maintain meaningful friendships by tracking interactions and providing insights into your relationship patterns. It's your personal shelf of meaningful connections where you can browse, tend, and nurture the relationships that matter most.

Whether you're maintaining long-distance friendships or staying connected with people in your life, KeenKeeper helps you:
- Track when you last contacted each friend
- Log interactions (calls, texts, video calls)
- Receive alerts when friendships need attention
- Visualize your communication patterns with analytics

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| **Next.js 14** | React framework with App Router for modern web development |
| **React 18** | UI library for building interactive components |
| **TypeScript** | Type-safe JavaScript development |
| **Tailwind CSS** | Utility-first CSS framework for responsive design |
| **Recharts** | Chart library for data visualization |
| **Lucide React** | Beautiful, consistent icon library |
| **React Hot Toast** | Non-intrusive toast notification system |
| **Context API** | State management with localStorage persistence |

---

## ✨ Key Features

### 1. **Friend Management Dashboard**
   - Browse all your friends in a beautiful 4-column grid layout
   - Color-coded status badges (On-Track, Almost Due, Overdue)
   - Quick status overview with friend information cards
   - Responsive design for mobile, tablet, and desktop

### 2. **Friend Detail Pages**
   - Comprehensive profile view with bio and contact info
   - Two-column layout with stats and quick actions
   - Relationship goal tracking with progress indicators
   - Action buttons (Snooze, Archive, Delete)

### 3. **Quick Check-In Buttons**
   - Log interactions with one click (Call, Text, Video)
   - Real-time toast notifications for user feedback
   - Automatic timeline entry creation
   - Friend-specific interaction tracking

### 4. **Interactive Timeline**
   - Chronological view of all interactions
   - Filter by interaction type (Calls, Texts, Videos)
   - Detailed entry cards with dates and friend names
   - Persistent storage with localStorage

### 5. **Friendship Analytics**
   - Interactive pie chart showing interaction breakdown
   - Summary cards with interaction counts by type
   - Visual insights into communication preferences
   - Percentage-based statistics

### 6. **Responsive Navigation**
   - Clean, modern navbar with active link highlighting
   - Mobile hamburger menu for smaller screens
   - Quick access to Home, Timeline, and Stats pages
   - Sticky navigation for easy access

### 7. **Smart Footer**
   - Social media links integration
   - Privacy, Terms, and Cookie links
   - Professional branding footer

### 8. **Data Persistence**
   - Timeline data automatically saved to browser localStorage
   - Offline access to interaction history
   - Seamless synchronization across sessions

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18 or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/hassan25bd/Keen-Keeper-projct.git
cd Keen-Keeper-projct

# Install dependencies
npm install

# Start development server
npm run dev

# Open in browser
# Visit http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── page.js            # Home page
│   ├── layout.js          # Root layout
│   ├── context.js         # Timeline context provider
│   ├── globals.css        # Global styles
│   ├── friend/[id]/       # Friend detail page
│   ├── timeline/          # Timeline page
│   └── stats/             # Analytics page
├── components/            # Reusable React components
│   ├── Navbar.js         # Navigation bar
│   ├── Footer.js         # Footer component
│   ├── FriendCard.js     # Friend card component
│   ├── Banner.js         # Home banner
│   └── LoadingSpinner.js # Loading indicator
├── public/               # Static files
│   └── friends.json      # Friend data (12 profiles)
└── ...config files       # Next.js, Tailwind, TypeScript config
```

---

## 💡 Features Breakdown

### Home Page
- ✅ Welcome banner with call-to-action button
- ✅ 4 summary stat cards (Total, On-Track, Need Attention, Interactions)
- ✅ Friend card grid (4 columns on desktop, responsive on mobile)
- ✅ Loading spinner animation
- ✅ 12 realistic friend profiles with photos

### Friend Detail Page
- ✅ Profile picture with status badge
- ✅ Friend bio and contact information
- ✅ 3 stats cards (Days Since Contact, Goal, Next Due Date)
- ✅ Relationship goal with progress bar
- ✅ Quick check-in buttons (Call, Text, Video)
- ✅ Action buttons (Snooze, Archive, Delete UI)

### Timeline Page
- ✅ Chronological interaction history
- ✅ Filter by interaction type with count badges
- ✅ Rich timeline cards with icons and dates
- ✅ Empty state with helpful guidance
- ✅ Sticky filter bar while scrolling

### Stats Page
- ✅ Beautiful gradient stat cards
- ✅ Interactive donut chart with percentages
- ✅ Legend showing interaction counts
- ✅ Empty state prompting user to log interactions
- ✅ Responsive chart layout

---

## 🎨 Design System

**Color Palette:**
- Primary: `#2d5a4f` (Dark Green)
- Accent: `#1a3a32` (Darker Green)
- Status: Red (Overdue), Yellow (Almost Due), Green (On-Track)

**Responsive Breakpoints:**
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

---

## 📦 Dependencies

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "next": "^14.0.0",
  "tailwindcss": "^3.3.0",
  "recharts": "^2.10.0",
  "lucide-react": "^0.292.0",
  "react-hot-toast": "^2.4.1"
}
```

---

## 🔄 State Management

- **Context API** for global timeline state
- **localStorage** for data persistence
- **React Hooks** for component-level state
- **useMemo** for performance optimization

---

## 📊 Sample Data

The project includes 12 realistic friend profiles with:
- Profile pictures (using Unsplash)
- Contact information
- Relationship history
- Custom tags and bios
- Contact goals and next due dates

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Other Platforms
- Netlify: Build command: `npm run build`, Publish: `.next`
- AWS Amplify: Connect GitHub repo, auto-deploy on push
- Docker: Create Dockerfile and deploy to any container service

---

## 📝 Git Workflow

This project includes multiple meaningful commits:
- feat: Initial project setup
- feat: Build core components (Navbar, Footer, Cards)
- feat: Implement home page with friend grid
- feat: Build friend detail page
- feat: Add timeline functionality
- feat: Create stats page with analytics
- feat: Add responsive design
- feat: Enhance UI/UX styling

---

## 🤝 Contributing

Contributions welcome! Please:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the MIT License.

---

## 👨‍💻 Author

**Hassan** - [GitHub Profile](https://github.com/hassan25bd)

---

## 💬 Support

For support, open an issue in the GitHub repository.

---

## 🙏 Acknowledgments

- Unsplash for free, high-quality images
- Next.js team for the amazing framework
- Tailwind CSS for utility-first styling
- Recharts for beautiful charts

---

**Happy friend keeping! 👥**

*Keep your friendships alive and thriving with KeenKeeper.*
