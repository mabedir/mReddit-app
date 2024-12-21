import { useState } from 'react';
import Header from './components/Header.jsx';
import SubredditList from './components/SubredditList.jsx';
import PostList from './components/PostList.jsx';

const App = () => {
  const [selectedSubreddit, setSelectedSubreddit] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const closeSubreddit = () => {
    setSelectedSubreddit(null);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <Header closeSubreddit={closeSubreddit} onSearch={handleSearch} />
      <div className="container">
        <div className="sidebar">
          <SubredditList
            onSelectSubreddit={setSelectedSubreddit}
            searchQuery={searchQuery}
          />
        </div>
        <div className="content">
          {selectedSubreddit ? (
            <PostList selectedSubreddit={selectedSubreddit} />
          ) : (
            <div>Select a subreddit to view posts.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
