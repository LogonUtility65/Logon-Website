import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../styles/css/blog_section.css';

const POSTS_PER_PAGE = 6;
const EXCERPT_LIMIT = 70;

const Blog_Section = () => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);
  const [loading, setLoading] = useState(true);  // Add loading state

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`http://blog.logonutility.com/wp-json/wp/v2/posts?per_page=${POSTS_PER_PAGE}&page=${currentPage}&_embed`);
        setPosts(response.data);
        setTotalPosts(parseInt(response.headers['x-wp-total'], 10));
        setLoading(false);  // Set loading to false after data is fetched
      } catch (error) {
        console.error('Error fetching posts:', error);
        setError('Failed to fetch posts');
        setLoading(false);  // Set loading to false in case of error
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://blog.logonutility.com/wp-json/wp/v2/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
        setError('Failed to fetch categories');
      }
    };

    fetchPosts();
    fetchCategories();
  }, [currentPage]);

  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

  const truncateText = (text, limit) => {
    if (text.length <= limit) {
      return text;
    }
    return text.substring(0, limit) + '...';
  };

  return (
    <section className="blog-section padding">
      <div className="container">
        <div className="blog-wrap row">
          <div className="col-lg-12 sm-padding">
            <div className="row">
              {error ? (
                <p>{error}</p>
              ) : loading ? (  // Show loader if loading
                <div className="loader">
                  <div className="spinner"></div>
                </div>
              ) : posts.length === 0 ? (
                <p>No posts found.</p>
              ) : (
                posts.map(post => (
                  <div key={post.id} className="col-sm-4 padding-15">
                    <div className="blog-item">
                      <div className="blog-thumb">
                        {post._embedded && post._embedded['wp:featuredmedia'] && (
                          <img src={post._embedded['wp:featuredmedia'][0].source_url} alt={post.title.rendered} />
                        )}
                        <span className="category">
                          {post.categories.map(categoryId => {
                            const category = categories.find(cat => cat.id === categoryId);
                            return (
                              <Link key={categoryId} to={`/category/${category.slug}`}>{category.name}</Link>
                            );
                          })}
                        </span>
                      </div>
                      <div className="blog-content">
                        <h3><Link to={`/blog/${post.slug}`}>{post.title.rendered}</Link></h3>
                        <p dangerouslySetInnerHTML={{ __html: truncateText(post.excerpt.rendered, EXCERPT_LIMIT) }} />
                        <Link to={`/blog/${post.slug}`} className="read-more">Read More</Link>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
            
            {totalPages > 1 && (
              <ul className="pagination-wrap text-center mt-30">
                <li><a href="#" onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}><i className="ti-arrow-left" /></a></li>
                {Array.from({ length: totalPages }, (_, i) => (
                  <li key={i}><a href="#" className={i + 1 === currentPage ? 'active' : ''} onClick={() => setCurrentPage(i + 1)}>{i + 1}</a></li>
                ))}
                <li><a href="#" onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}><i className="ti-arrow-right" /></a></li>
              </ul>
            )}
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default Blog_Section;
