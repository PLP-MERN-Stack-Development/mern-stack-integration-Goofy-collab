import { Link } from 'react-router-dom';
import './PostCard.css';

const PostCard = ({ post }) => {
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="post-card">
      {post.featuredImage && post.featuredImage !== 'default-post.jpg' && (
        <div className="post-card-image">
          <img 
            src={`http://localhost:5000/uploads/${post.featuredImage}`} 
            alt={post.title}
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
      )}
      
      <div className="post-card-content">
        <h2 className="post-card-title">
          <Link to={`/posts/${post._id}`}>{post.title}</Link>
        </h2>
        
        <div className="post-card-meta">
          <span className="post-card-author">
            By {post.author?.name || 'Anonymous'}
          </span>
          <span className="post-card-date">{formatDate(post.createdAt)}</span>
          {post.category && (
            <span className="post-card-category">{post.category.name}</span>
          )}
        </div>
        
        {post.excerpt && (
          <p className="post-card-excerpt">{post.excerpt}</p>
        )}
        
        <div className="post-card-footer">
          <span className="post-card-views">👁 {post.viewCount} views</span>
          <Link to={`/posts/${post._id}`} className="post-card-link">
            Read More →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;