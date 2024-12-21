import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSubreddits } from '../redux/features/subRedditSlice.jsx';

const SubredditList = ({ onSelectSubreddit, searchQuery }) => {
  const dispatch = useDispatch();
  const { list, status } = useSelector((state) => state.subreddits);
  const filteredSubreddits = list.filter((subreddit) =>
    subreddit.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    dispatch(fetchSubreddits());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading subreddits...</div>;
  }

  if (status === 'failed') {
    return <div>Failed to load subreddits.</div>;
  }

  return (
    <div>
      <h2>Subreddits</h2>
      <ul>
        {filteredSubreddits.map((subreddit) => (
          <li
            key={subreddit.id}
            onClick={() => onSelectSubreddit(subreddit.name)}
          >
            {subreddit.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubredditList;
