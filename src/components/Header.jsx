import { useState, useCallback } from 'react';
import logo from '../assets/mreddit-logo.webp';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import debounce from 'lodash.debounce';

const Header = ({ onSearch, closeSubreddit }) => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    const newTheme = darkMode ? 'light' : 'dark';
    setDarkMode(!darkMode);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const handleSearch = useCallback(
    debounce((query) => {
      onSearch(query);
    }, 300),
    [onSearch]
  );

  const onSearchChange = (e) => {
    const query = e.target.value.trim();
    handleSearch(query);
  };

  return (
    <header>
      <div className="logo-container" onClick={closeSubreddit}>
        <img src={logo} alt="mReddit Logo" className="logo" />
        <h1>mReddit</h1>
      </div>
      <form className="search-bar" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name="search"
          placeholder="Search subreddits..."
          onChange={onSearchChange}
        />
        <button type="submit">🔍</button>
      </form>
      <button onClick={toggleTheme}>
        {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
      </button>
    </header>
  );
};

export default Header;
