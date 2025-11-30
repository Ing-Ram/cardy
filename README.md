# Cardy

A React-based card display application featuring family member profiles with dynamic image matching.

## Overview

Cardy is a simple yet elegant React application that displays personalized cards for family members. Each card includes a profile photo, name, and description. The app automatically matches image files to card data using intelligent name normalization.

## Features

- **Dynamic Image Matching**: Automatically maps image filenames to card data using flexible name normalization
- **Responsive Card Layout**: Clean, centered card layout that displays multiple profiles
- **Circular Profile Photos**: Avatar-style circular images with elegant styling
- **Easy to Extend**: Simple component structure makes it easy to add more cards or modify styling

## Project Structure

```
cardy/
├── public/              # Static assets
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── Components/       # React components
│   │   ├── button.jsx
│   │   ├── card.jsx      # Card wrapper component
│   │   ├── facecard.jsx  # Profile photo component with image lookup
│   │   ├── imageMapper.js # Image matching utility
│   │   └── CardCounter.jsx
│   ├── Pictures/        # Profile images
│   │   ├── chad_ingram.jpg
│   │   └── defaultImage.jpg
│   ├── Styles/          # CSS stylesheets
│   │   ├── button.css
│   │   ├── card.css
│   │   ├── cardcounter.css
│   │   ├── facecard.css
│   └── App.js           # Main app component
├── package.json
└── README.md
```

## Image Matching

The `imageMapper.js` utility intelligently matches image filenames to card names using flexible normalization:

- **Input**: `"Chad Ingram"` (card name)
- **File**: `chad_ingram.jpg` (image filename)
- **Matching**: Names are normalized by lowercasing and removing non-alphanumeric characters, so:
  - `"Chad Ingram"` matches `chad_ingram.jpg`
  - `"jane-ingram"` matches `jane_ingram.jpg`
  - Various spacing and punctuation variations are handled automatically

Fallback behavior: If no matching image is found, the `defaultImage.jpg` is displayed.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone or navigate to the project directory:
```bash
cd cardy
```

2. Install dependencies:
```bash
npm install
```

### Running the App

Start the development server:
```bash
npm start
```

The app will open in your browser at `http://localhost:3000`.

### Building for Production

Create an optimized production build:
```bash
npm run build
```

### Testing

Run the test suite:
```bash
npm test
```

## How It Works

### Card Data Structure

Cards are defined in `src/App.js` with the following structure:

```javascript
{
  cardName: "Chad Ingram",           // Name displayed on card
  cardDescription: "The Original O.G." // Description text
}
```

### Component Hierarchy

```
App
└── Card (repeated for each cardData object)
    ├── FaceCard (displays profile photo)
    │   └── imageMapper.getImageByName() → matches image
    ├── h1 (displays cardName)
    ├── p (displays cardDescription)
    └── Button
```

### Image Lookup Process

1. **Card receives props**: `cardName` and `cardDescription`
2. **FaceCard extracts name**: Gets `props.cardName`
3. **Image lookup**: Calls `getImageByName(name)` from `imageMapper.js`
4. **Normalization**: Name is normalized (lowercase, remove non-alphanumeric)
5. **Match found or fallback**: Returns matched image or defaults to `defaultImage.jpg`

## Adding New Cards

To add a new family member card:

1. Add the profile image to `src/Pictures/` (use snake_case naming, e.g., `firstname_lastname.jpg`)
2. Add a new entry to `cardData` in `src/App.js`:
```javascript
cardN: {
  cardName: "First Last",
  cardDescription: "Brief description"
}
```
3. Add the card to the render section:
```javascript
<Card {...cardData.cardN} />
```

The image will automatically be matched and displayed!

## Styling

All component styles are located in `src/Styles/`:

- **facecard.css**: Circular profile photo styling (50×50px, circular border, shadow)
- **card.css**: Card layout and spacing
- **button.css**: Button styling
- **cardcounter.css**: Counter component styling
- **App.css**: Global app layout

## Technologies Used

- **React** (v19.2.0): UI library
- **React DOM** (v19.2.0): DOM rendering
- **React Scripts** (5.0.1): Build and test tooling
- **CSS3**: Styling and layout

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)

## Development Notes

- The app uses Create React App for project scaffolding and build configuration
- `require.context()` is used in `imageMapper.js` for dynamic image imports
- Console logs are included for debugging image matching (can be removed in production)

## License

Private project

## Author

Chad Ingram
