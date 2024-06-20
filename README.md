# Year Progress Tracker App

This React app calculates and visualizes the progress of the current year based on elapsed time. It dynamically updates a progress bar and displays the percentage of the year that has passed.

## Features

- Real-time tracking of the progress of the current year.
- Smoothly increments the progress value every 50 milliseconds until the target value is reached.
- Updates the progress every second for accurate tracking.

## Implementation Details

- Utilizes React's `useEffect` and `useState` for managing state and side effects.
- Two intervals are employed: one for gradual incrementation of the progress value, and another for updating it every second.
- The progress bar is displayed using a custom `Progress` component.

## Usage
1. Clone this repository
2. Run the dev server command
```bash
git clone github.com/KevinNVM/year-progress-bar.git
cd year-progress-bar
npm install
npm run dev # press o then enter to open it in browser
```

## Credits
- UI is built using React, tailwindcss, shacdn/ui
