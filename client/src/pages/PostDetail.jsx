

import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { usePost } from '../hooks/usePosts';
import { useAuth } from '../hooks/useAuth';
import { postService } from '../services/api';
import Loading from '../components/Loading';
import './PostDetail.css';

const PostDetail = () => {
  const { id } = useParams();
  const { post, loading, error } = usePost(id);
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  const [comment, setComment] = useState('');
  const [commentLoading, setCommentLoading] = useState(false);
  const [commentError, setCommentError] = useState('');

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        await postService.deletePost(post._id);
        navigate('/');
      } catch (err) {
        alert('Failed to delete post');
      }
    }
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    setCommentError('');
    setCommentLoading(true);

    try {
      await postService.addComment(post._id, { content: comment });
      setComment('');
      window.location.reload(); 
    } catch (err) {
      setCommentError(err.response?.data?.error || 'Failed to add comment');
    } finally {
      setCommentLoading(false);
    }
  };

  if (loading) return <Loading />;

  if (error) {
    return (
      <div className="error-container">
        <p className="error-message">{error}</p>
        <Link to="/" className="back-link">← Back to Home</Link>
      </div>
    );
  }

  if (!post) return null;

  const isAuthor = user && post.author && user.id === post.author._id;

  return (
    <div className="post-detail-page">
      <Link to="/" className="back-link">← Back to Posts</Link>
      
      <article className="post-detail">
        <header className="post-header">
          <h1>{post.title}</h1>
          
          <div className="post-meta">
            <span className="post-author">
              By {post.author?.name || 'Anonymous'}
            </span>
            <span className="post-date">{formatDate(post.createdAt)}</span>
            {post.category && (
              <span className="post-category">{post.category.name}</span>
            )}
            <span className="post-views">👁 {post.viewCount} views</span>
          </div>

          {isAuthor && (
            <div className="post-actions">
              <Link to={`/edit-post/${post._id}`} className="edit-button">
                Edit Post
              </Link>
              <button onClick={handleDelete} className="delete-button">
                Delete Post
              </button>
            </div>
          )}
        </header>

        {post.featuredImage && post.featuredImage !== 'default-post.jpg' && (
          <div className="post-image">
            <img 
              src={`http://localhost:5000/uploads/${post.featuredImage}`} 
              alt={post.title}
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
        )}

        <div className="post-content">
          {post.content.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {post.tags && post.tags.length > 0 && (
          <div className="post-tags">
            {post.tags.map((tag, index) => (
              <span key={index} className="tag">#{tag}</span>
            ))}
          </div>
        )}
      </article>

      <section className="comments-section">
        <h2>Comments ({post.comments?.length || 0})</h2>

        {isAuthenticated ? (
          <form onSubmit={handleCommentSubmit} className="comment-form">
            {commentError && <div className="error-message">{commentError}</div>}
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write a comment..."
              required
              rows="4"
            />
            <button type="submit" disabled={commentLoading}>
              {commentLoading ? 'Posting...' : 'Post Comment'}
            </button>
          </form>
        ) : (
          <p className="login-prompt">
            Please <Link to="/login">login</Link> to leave a comment.
          </p>
        )}

        <div className="comments-list">
          {post.comments && post.comments.length > 0 ? (
            post.comments.map((comment) => (
              <div key={comment._id} className="comment">
                <div className="comment-header">
                  <strong>{comment.user?.name || 'Anonymous'}</strong>
                  <span className="comment-date">
                    {formatDate(comment.createdAt)}
                  </span>
                </div>
                <p className="comment-content">{comment.content}</p>
              </div>
            ))
          ) : (
            <p className="no-comments">No comments yet. Be the first to comment!</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default PostDetail;