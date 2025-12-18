# ProjectDetailModal Component Documentation

## Overview
`ProjectDetailModal` is a **reusable, universal modal component** designed to display detailed information about projects from both App and Website portfolios. It intelligently handles different data structures, making it a single solution for all project types.

## Features

✅ **Universal Data Handling**
- Automatically detects and displays both `descriptionPoints` (Apps) and `features` (Websites)
- Handles optional fields like `subtitle`, `category`, `description`, `previewLink`
- Gracefully adapts to any project data structure

✅ **Image Gallery Slider** (Right Side)
- Interactive slider for project screenshots/images
- Next/Previous navigation buttons (appear on hover)
- Thumbnail strip for quick navigation
- Image counter showing current position
- Only displays if `images` array exists in project data

✅ **Complete Project Information** (Left Side)
- Project title, subtitle, and category
- Technology tags/badges
- Full description
- All features/description points with checkmark indicators
- Project videos with embedded players
- Live project link (if previewLink exists)

✅ **Responsive Design**
- Mobile-friendly layout
- Desktop: Left-Right split view (details + slider)
- Tablet/Mobile: Stacked view
- Glassmorphic styling with blur effects

✅ **Accessibility**
- Close button (✕) in top-right corner
- Click outside modal to close
- Smooth animations and transitions
- Custom styled scrollbar

## Usage

### Basic Import and Setup
```jsx
import ProjectDetailModal from "./ProjectDetailModal";
import { useState } from "react";

function MyComponent() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      {/* Your project cards here */}
      <button onClick={() => setSelectedProject(projectData)}>
        View Details
      </button>

      {/* Modal Component */}
      <ProjectDetailModal 
        project={selectedProject} 
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
```

### Props

| Prop | Type | Description |
|------|------|-------------|
| `project` | Object \| null | The project data object to display |
| `isOpen` | Boolean | Controls modal visibility |
| `onClose` | Function | Callback when modal should close |

## Data Structure Support

### App Projects Format
```json
{
  "id": 1,
  "title": "Project Title",
  "description": "Long description...",
  "image": "path/to/image.png",
  "tags": ["React Native", "Firebase"],
  "descriptionPoints": [
    "Feature 1",
    "Feature 2"
  ],
  "videos": [
    { "title": "Demo", "file": "path/to/video.mp4" }
  ],
  "images": ["path/to/screenshot1.png", "path/to/screenshot2.png"]
}
```

### Website Projects Format
```json
{
  "id": 1,
  "title": "Project Title",
  "subtitle": "Subtitle",
  "category": "Category Name",
  "description": "Long description...",
  "image": "path/to/image.png",
  "tags": ["React.js", "Tailwind CSS"],
  "features": [
    "Feature 1",
    "Feature 2"
  ],
  "previewLink": "https://example.com",
  "videos": [
    { "title": "Demo", "file": "path/to/video.mp4" }
  ],
  "images": ["path/to/screenshot1.png"]
}
```

## Optional Fields

The modal handles these optional properties gracefully:
- `subtitle` - Displayed if present
- `category` - Shows as a badge if present
- `descriptionPoints` - Used instead of `features` if present
- `features` - Alternative to `descriptionPoints`
- `description` - Full project description
- `videos` - Video gallery with embedded players
- `images` - Image slider gallery (right side)
- `previewLink` - Live project button (websites only)

## Design Features

### Visual Elements
- **Glassmorphism Effect**: Semi-transparent background with blur
- **Gradient Borders**: Using portfolio primary color
- **Custom Scrollbar**: Matches theme colors
- **Smooth Animations**: Fade-in and hover effects
- **Color Theme**: Uses `colors` from theme configuration

### Layout Sections
1. **Left Side (Details)**
   - Main project image
   - Title, subtitle, category
   - Technology tags
   - Description
   - Features list with checkmarks
   - Video gallery
   - Live project link (if available)

2. **Right Side (Gallery)**
   - Interactive image slider
   - Navigation controls
   - Image counter
   - Thumbnail strip
   - *Only displays if images array exists*

## Customization

To modify modal appearance, edit the component's inline styles or update the theme colors used:

```jsx
// Edit colors in the component
style={{ background: colors.primary }}
style={{ color: colors.background }}
```

## Browser Support
- Modern browsers supporting CSS Grid, Flexbox, and CSS Custom Properties
- Graceful degradation for older browsers

## Performance Notes
- Lazy loads images when displayed
- Efficient state management for image slider
- Modal renders only when `isOpen` is true
- No unnecessary re-renders due to controlled component pattern

## Integration Examples

### With AllProjects Component
```jsx
// Already integrated in AllProjects.jsx
<ProjectDetailModal 
  project={selectedProject} 
  isOpen={!!selectedProject}
  onClose={() => setSelectedProject(null)}
/>
```

### Standalone Usage
```jsx
import ProjectDetailModal from "./components/ProjectDetailModal";

// Use in any component to display project details
<ProjectDetailModal 
  project={myProject}
  isOpen={showModal}
  onClose={handleCloseModal}
/>
```

## Future Enhancements
- Add keyboard navigation (arrow keys for image slider)
- Add fullscreen image viewer
- Add download functionality for resources
- Add social sharing buttons
- Add animated image transitions

---

**Note**: This component is designed to be flexible and accommodate various project data structures without modification. Any fields not present in the project object will simply not be displayed.
