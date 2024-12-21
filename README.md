# Reddit Client App

## Overview

This Reddit Client App is a lightweight application that allows users to browse and view posts from various subreddits. The app is built using **ReactJS** with **Redux** for state management and styled with **CSS**. It fetches data from the Reddit JSON API and displays post details, including images and videos where available.

---

## Features

- **Subreddit Navigation**: Users can select and view posts from any subreddit.
- **Dynamic Post Display**: Posts with images or videos are displayed alongside text content.
- **Theme Switching**: Toggle between light and dark themes.
- **Responsive Design**: Works seamlessly on desktop and mobile devices.

---

## Technologies Used

- React
- Redux Toolkit
- Vite
- Material-UI
- Lodash

---

## Project Structure

```
mreddit-app/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── SubredditList.jsx
│   │   ├── PostList.jsx
│   ├── redux/
│   │   ├── features/
│   │   │   ├── subRedditSlice.jsx
│   │   │   ├── postSlice.jsx
│   │   ├── store.js
│   ├── App.jsx
│   ├── main.jsx
│   ├── styles.css
├── .gitignore
├── package.json
├── README.md
```

---

## Installation and Setup

### Prerequisites

- Node.js (v14+)
- npm or yarn

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/reddit-client-app.git
   cd reddit-client-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the app in your browser:
   ```
   http://localhost:5173
   ```

---

## Usage

1. **Select a Subreddit**: Click on a subreddit from the sidebar.
2. **View Posts**: Posts will load dynamically in the main section.
3. **Switch Themes**: Use the theme toggle button to switch between light and dark mode.
4. **Logo Action**: Click the logo to reset and close the subreddit view.

---

## API Integration

The app fetches data from the Reddit JSON API:

- URL format: `https://www.reddit.com/r/{subreddit}.json`
- Parses the response to extract post details like:
  - Title
  - Author
  - Media (images/videos)

---

## Contribution

Contributions are welcome! Please open an issue or submit a pull request for any changes.

---

## License

This project is licensed under the MIT License. Feel free to use and modify it as per your needs.

---

## Acknowledgments

- [Reddit API Documentation](https://www.reddit.com/dev/api/)
- [React Documentation](https://reactjs.org/)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)

---
