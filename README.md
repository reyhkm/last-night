# Romantic Lyrics Display - Last Night on Earth

This is a React + Vite project that displays animated lyrics for Green Day's song "Last Night on Earth", synchronized with audio playback.

## Design
The design aims for a romantic, elegant, and clean user experience with a dark theme, a beautiful background, and smooth, glowing text animations for the lyrics.

## Setup and Running the Project

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (version 16 or higher)
- npm or yarn

### 2. Add Media Files
Before you start, you need to add the required media files to the `public` directory in the project root.

1.  **Audio File**: Get the MP3 for "Last Night on Earth" by Green Day and place it in the `public` folder. **It must be named `last-night-on-earth.mp3`**.
2.  **Background Image**: Find a background image you like (a starry night or romantic landscape is recommended). Place it in the `public` folder and **name it `background.jpg`**.

The `public` directory should look like this:
```
public/
├── background.jpg
├── last-night-on-earth.mp3
└── vite.svg
```

### 3. Install Dependencies
Open your terminal in the project root and run:
```bash
npm install
```

### 4. Run the Development Server
Once the dependencies are installed, you can start the development server:
```bash
npm run dev
```
This will open the website in your default browser, usually at `http://localhost:5173`.

## How It Works
- **Audio Synchronization**: The app uses a `timeupdate` event on the HTML `<audio>` element to track the current playback time.
- **Lyric Highlighting**: On each time update, the app checks which lyric line corresponds to the current time and applies special styling (glowing effect, larger size) to it.
- **Auto-Scrolling**: The page automatically and smoothly scrolls to keep the currently sung lyric line in the center of the screen.
- **User Interaction**: Due to browser policies, audio cannot play automatically. The user is first presented with a "Click to Start" screen to initiate the experience.

## Customization
- **Lyrics & Timestamps**: The lyrics and their timings are located in `src/data/lyrics.js`. You can edit this file to adjust timings or even use a different song.
- **Styling**: All styling is done with Tailwind CSS. You can modify the classes in the components (`src/components/*.jsx`) or change the theme configuration in `tailwind.config.js`.
