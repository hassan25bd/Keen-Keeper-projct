# 👥 KeenKeeper — Keep Your Friendships Alive

**Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.**

KeenKeeper is a web application designed to help you manage and maintain meaningful friendships by tracking interactions and providing insights into your relationship patterns.

---

## 🎯 Features

1. **Friend Management Dashboard** - View all your friends with their contact status and interaction details
2. **Interactive Timeline** - Log and track all interactions (calls, texts, video calls) with friends
3. **Friendship Analytics** - Visualize your interaction patterns with interactive pie charts
4. **Smart Status Tracking** - Friends automatically flagged as "On Track", "Almost Due", or "Overdue" for contact
5. **Quick Check-In** - Fast-log interactions directly from the friend detail page
6. **Responsive Design** - Fully functional on mobile, tablet, and desktop devices
7. **Toast Notifications** - Real-time feedback on user actions
8. **Persistent Storage** - Timeline data saved to local storage for offline access

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| **React.js** | Frontend UI library |
| **Next.js 14** | React framework with App Router |
| **Tailwind CSS** | Utility-first CSS framework |
| **Recharts** | Chart library for analytics |
| **Lucide React** | Icon library |
| **React Hot Toast** | Toast notification system |

---

## 📋 Project Structure

```
keen-keeper/
├── app/
│   ├── layout.js              # Root layout with providers
│   ├── page.js                # Home page
│   ├── globals.css            # Global styles
│   ├── context.js             # Timeline context provider
│   ├── not-found.js           # 404 page
│   ├── friend/
│   │   └── [id]/
│   │       └── page.js        # Friend detail page
│   ├── timeline/
│   │   └── page.js            # Timeline page
│   └── stats/
│       └── page.js            # Stats page
├── components/
│   ├── Navbar.js              # Navigation bar
│   ├── Footer.js              # Footer component
│   ├── FriendCard.js          # Friend card component
│   ├── Banner.js              # Home page banner
│   └── LoadingSpinner.js      # Loading indicator
├── public/
│   └── friends.json           # Friend data
├── package.json               # Dependencies
├── next.config.js             # Next.js configuration
├── tailwind.config.js         # Tailwind CSS configuration
└── postcss.config.js          # PostCSS configuration
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18 or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd keen-keeper
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📱 Pages & Features

### Home Page
- **Banner Section** - Welcome message with "Add Friend" button
- **Statistics Cards** - Total friends, on-track count, friends needing attention, interactions this month
- **Friend Grid** - 4-column layout showing all friends with status badges
- **Loading State** - Animated spinner while fetching data

### Friend Detail Page
- **Two-Column Layout**
  - **Left Column**: Profile picture, name, status, tags, bio, email, action buttons
  - **Right Column**: Stats cards, relationship goal with progress bar, quick check-in buttons
- **Quick Check-In**: Log calls, texts, or video calls with one click
- **Action Buttons**: Snooze, Archive, Delete (UI only)

### Timeline Page
- **Interactive Filter**: Filter by All, Call, Text, or Video
- **Chronological Display**: All interactions sorted by date
- **Rich Cards**: Each entry shows date, type, and friend name
- **Persistent Data**: Timeline saved to localStorage

### Stats Page (Friendship Analytics)
- **Pie Chart**: Visual breakdown of interaction types
- **Summary Cards**: Total interactions with breakdown by type
- **Empty State**: Helpful message when no interactions logged

### Navigation & Components
- **Responsive Navbar**: Logo, navigation links with active state
- **Mobile Menu**: Hamburger menu for mobile devices
- **Footer**: Company info, quick links, social media
- **404 Page**: Friendly error page for invalid routes

---

## 🎨 Design & Styling

- **Color Scheme**:
  - Primary: `#2d5a4f` (Dark Green)
  - Accent: `#1a3a32` (Darker Green)
  - Danger: `#ef4444` (Red)
  - Warning: `#f97316` (Orange)
  - Success: `#22c55e` (Green)

- **Tailwind CSS**: Responsive grid layouts and utility classes
- **Responsive Breakpoints**: Mobile-first design with md and lg breakpoints

---

## 💾 Data Management

### Friend Data Structure
```json
{
  "id": 1,
  "name": "David Kim",
  "picture": "https://...",
  "email": "david@example.com",
  "bio": "Friend description",
  "days_since_contact": 5,
  "status": "on-track",
  "tags": ["work", "college"],
  "goal": 14,
  "next_due_date": "2026-04-20"
}
```

### Timeline Entry Structure
```json
{
  "id": 1234567890,
  "type": "call",
  "title": "Call with David Kim",
  "date": "2026-04-15",
  "friendId": 1,
  "friendName": "David Kim"
}
```

---

## 🔄 State Management

- **Context API**: `TimelineProvider` for global timeline state
- **Local Storage**: Automatic persistence of timeline data
- **Component State**: React hooks for local component state

---

## 📦 Build & Deployment

### Build for Production
```bash
npm run build
npm start
```

### Deployment to Vercel (Recommended for Next.js)
```bash
npm install -g vercel
vercel
```

---

## ✅ Requirements Checklist

### Basic Requirements
- ✅ Works on all screen sizes (mobile, tablet, desktop)
- ✅ 8+ Git commits planned
- ✅ Runs without errors
- ✅ Complete README with project info

### Main Requirements (50 Marks)
- ✅ Navbar with logo and navigation links
- ✅ Banner with title, subtitle, CTA button
- ✅ Friend data in JSON file (8 friends)
- ✅ Friend cards in 4-column grid
- ✅ Friend detail page with 2-column layout
- ✅ Quick check-in functionality
- ✅ Timeline page with entries
- ✅ Footer section
- ✅ Responsive design
- ✅ 404 page
- ✅ Loading animation
- ✅ Toast notifications

### Challenge Requirements (10 Marks)
- ✅ Pie chart on Stats page
- ✅ Timeline filter by type
- ✅ GitHub README

---

## 🚧 Future Enhancements

- Search functionality for friends and timeline
- Sort timeline by date
- Edit relationship goals
- Friend profile editing
- Email reminders for due contacts
- Export interaction history
- Dark mode theme
- Integration with calendar

---

## 📝 License

This project is created for educational purposes.

---

## 👨‍💻 Developer

Built with ❤️ for maintaining meaningful friendships.

---

## 📞 Support

For issues or questions, please check the project requirements or create an issue in the repository.
