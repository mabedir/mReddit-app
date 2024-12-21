import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../redux/features/postSlice.jsx';

const PostList = ({ selectedSubreddit }) => {
  const dispatch = useDispatch();
  const { list, status } = useSelector((state) => state.posts);

  useEffect(() => {
    if (selectedSubreddit) {
      dispatch(fetchPosts(selectedSubreddit));
    }
  }, [selectedSubreddit, dispatch]);

  if (status === 'loading') {
    return <div>Loading posts...</div>;
  }

  if (status === 'failed') {
    return <div>Failed to load posts.</div>;
  }

  const renderMedia = (url) => {
    if (url.match(/\.(jpeg|jpg|png|gif)$/)) {
      return <img src={url} alt="Post media" className="post-thumbnail" />;
    }
    if (
      url.includes('twitch.tv') ||
      url.includes('youtube.com') ||
      url.includes('kick.com')
    ) {
      return (
        <a href={url} target="_blank" rel="noopener noreferrer">
          Watch Video
        </a>
      );
    }
    return null;
  };

  return (
    <div>
      <h2>Posts from r/{selectedSubreddit}</h2>
      <ul>
        {list.map((post) => (
          <li key={post.id} className="post">
            <h3>{post.title}</h3>
            {renderMedia(post.url)}
            <p>by {post.author}</p>
            <a href={post.url} target="_blank" rel="noopener noreferrer">
              View Post
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
