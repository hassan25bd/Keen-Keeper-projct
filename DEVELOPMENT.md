# Development Guide — KeenKeeper

This document explains the architecture and how to extend KeenKeeper.

---

## Project Architecture

### State Management

**TimelineProvider (Context API)**
```javascript
- timeline: Array of interaction entries
- addTimelineEntry(entry): Function to add new interactions
- Automatically syncs with localStorage
```

Location: [`app/context.js`](app/context.js)

### Data Flow

1. **Home Page** → Fetches friends.json → Displays in grid
2. **Friend Card** → Link to detail page → Pass friend ID as route param
3. **Friend Detail** → Show stats, buttons for interactions
4. **Quick Check-In Buttons** → Call `addTimelineEntry()` → Add to Timeline
5. **Timeline Context** → Auto-save to localStorage
6. **Timeline Page** → Consume timeline from context → Display with filters

---

## File Structure

```
app/
├── layout.js           - Root layout (providers, navbar, footer)
├── page.js             - Home page (friend grid)
├── globals.css         - Global Tailwind styles
├── context.js          - Timeline state provider
├── not-found.js        - 404 error page
├── friend/
│   └── [id]/
│       └── page.js     - Friend detail page
├── timeline/
│   └── page.js         - Timeline display & filter
└── stats/
    └── page.js         - Analytics with pie chart

components/
├── Navbar.js           - Top navigation
├── Footer.js           - Bottom footer
├── FriendCard.js       - Friend card in grid
├── Banner.js           - Home page banner
└── LoadingSpinner.js   - Loading indicator
```

---

## How to Extend

### 1. Adding More Friends

Edit [`public/friends.json`](public/friends.json):
```json
{
  "id": 9,
  "name": "New Friend",
  "picture": "https://...",
  "email": "newfriend@example.com",
  "bio": "Your description",
  "days_since_contact": 5,
  "status": "on-track",
  "tags": ["tag1", "tag2"],
  "goal": 14,
  "next_due_date": "2026-04-25"
}
```

### 2. Adding New Pages

Create a new folder in `app/` with a `page.js` file:
```javascript
// app/newpage/page.js
export default function NewPage() {
  return <div>New Page Content</div>;
}
```

The page will be accessible at `/newpage`.

### 3. Creating New Components

Add new components to `components/` folder:
```javascript
// components/NewComponent.js
export default function NewComponent() {
  return <div>Component content</div>;
}
```

Import and use in pages:
```javascript
import NewComponent from '@/components/NewComponent';
```

### 4. Styling

Use Tailwind CSS classes for styling:
```jsx
<div className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-accent">
  Styled element
</div>
```

Custom component classes are in [`app/globals.css`](app/globals.css):
- `.btn-primary` - Primary button
- `.btn-secondary` - Secondary button
- `.card` - Card container
- `.badge` - Badge element

### 5. Using Timeline Context

Add interactions from other pages:
```javascript
import { useTimeline } from '@/app/context';
import toast from 'react-hot-toast';

export default function MyComponent() {
  const { addTimelineEntry } = useTimeline();

  const handleInteraction = () => {
    addTimelineEntry({
      id: Date.now(),
      type: 'call', // or 'text', 'video'
      title: 'Call with Friend',
      date: new Date().toISOString().split('T')[0],
      friendId: 1,
      friendName: 'Friend Name',
    });
    toast.success('Interaction logged! 🎉');
  };

  return (
    <button onClick={handleInteraction}>
      Log Interaction
    </button>
  );
}
```

---

## Environment Setup

### Development
```bash
npm run dev
# Open http://localhost:3000
```

### Production Build
```bash
npm run build
npm start
```

### Linting
```bash
npm run lint
```

---

## Dependencies

- **next** - React framework
- **react** - UI library
- **tailwindcss** - Styling
- **recharts** - Charts
- **lucide-react** - Icons
- **react-hot-toast** - Notifications

---

## Performance Tips

1. **Image Optimization**: Next.js automatically optimizes images via `next/image`
2. **Code Splitting**: Each page is automatically code-split by Next.js
3. **Local Storage**: Browser caches timeline data automatically
4. **Lazy Loading**: Components load on demand

---

## Debugging

### Browser DevTools
- Open DevTools (F12)
- Check **Console** for errors
- Use **Application** tab to inspect localStorage

### Local Storage Inspection
```javascript
// In browser console
localStorage.getItem('timeline')  // View timeline data
localStorage.clear()             // Clear all data
```

---

## Common Issues

### 1. "Friends not loading"
- Check if `public/friends.json` exists
- Check browser console for network errors
- Ensure JSON is valid

### 2. "Timeline not persisting"
- Check if localStorage is enabled
- Look at browser dev tools → Application → LocalStorage

### 3. "Styles not applying"
- Clear `.next` folder: `rm -rf .next`
- Rebuild: `npm run dev`

---

## Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
# Follow prompts
```

### Other Platforms
- **Netlify**: Build command: `npm run build`, Publish: `.next`
- **Heroku**: Add `Procfile` with `web: npm start`

---

## Git Workflow

```bash
# Create feature branch
git checkout -b feature/feature-name

# Make changes and commit
git add .
git commit -m "feat: add feature description"

# Push to remote
git push origin feature/feature-name

# Create pull request
# Merge to main
```

Example commits:
- `feat: add search functionality`
- `fix: resolve timeline filter bug`
- `refactor: optimize friend card component`
- `docs: update README`
- `test: add timeline functionality tests`

---

## Next Steps for Enhancement

1. **Search**: Add search by friend name or tags
2. **Sort**: Sort timeline by date (ascending/descending)
3. **Edit Goals**: Allow editing relationship goals
4. **Export**: Export interaction history as CSV
5. **Dark Mode**: Add theme toggle
6. **Database**: Move from JSON to backend database
7. **Authentication**: Add user login/registration
8. **Calendar Integration**: Sync with calendar
9. **Email Reminders**: Send email reminders for due contacts
10. **Mobile App**: Create React Native/Flutter mobile version

---

Enjoy building! 🚀
