import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../../styles/css/main.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
import author_box_img from '../../assets/img/author-box-img.png';

const IndividualPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [featuredImage, setFeaturedImage] = useState(null);
  const [author, setAuthor] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [nextPost, setNextPost] = useState(null);
  const [prevPost, setPrevPost] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://blog.logonutility.com/wp-json/wp/v2/posts?slug=${slug}&_embed`);
        if (response.data && response.data.length > 0) {
          const postData = response.data[0];
          setPost(postData);
          document.title = `${postData.title.rendered} | Logon Utility`;

          if (postData.featured_media) {
            const mediaResponse = await axios.get(`http://blog.logonutility.com/wp-json/wp/v2/media/${postData.featured_media}`);
            setFeaturedImage(mediaResponse.data.source_url);
          }

          const authorResponse = await axios.get(`http://blog.logonutility.com/wp-json/wp/v2/users/${postData.author}`);
          setAuthor(authorResponse.data);

          // Fetch next and previous posts
          const postsResponse = await axios.get(`http://blog.logonutility.com/wp-json/wp/v2/posts?_embed`);
          const posts = postsResponse.data;
          const currentIndex = posts.findIndex(p => p.id === postData.id);
          if (currentIndex > 0) {
            setPrevPost(posts[currentIndex - 1]);
          }
          if (currentIndex < posts.length - 1) {
            setNextPost(posts[currentIndex + 1]);
          }
        } else {
          setError('Post not found');
        }
      } catch (error) {
        setError('Failed to fetch post');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  const handleNavigation = (postSlug) => {
    navigate(`/blog/${postSlug}`);
  };

  return (
    <div className="blog-single-wrap">
      <section className="page-header padding blog-hd-sec">
        <div className="container">
          <div className="page-content text-center">
            {loading ? (
              <h2 className="h2-hd">Loading...</h2>
            ) : error ? (
              <h2 className="h2-hd">{error}</h2>
            ) : (
              <h2 className="blog-pst-h2">{post.title.rendered}</h2>
            )}
            {!loading && !error && (
              <p className='blog-pst-p'>Home / Blog / {post.title.rendered}</p>
            )}
          </div>
        </div>
      </section>

      <div className="container">
        {loading ? (
          <div className="loader">
            <div className="spinner"></div>
          </div>
        ) : error ? (
          <p>{error}</p>
        ) : (
          post && (
            <article>
              <div className="blog-thumb-pst">
                {featuredImage && <img src={featuredImage} alt={post.title.rendered} />}
              </div>
              <div className="blog-single-content">
                <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />

                {author && (
                  <div className="author-box bg-grey">
                    <img src={author_box_img} alt={author.name} />
                    <div className="author-info">
                      <h3>Logon Utility</h3>
                      <p>Logon Utility is a premier service provider specializing in Bulk SMS, WhatsApp marketing, and comprehensive communication solutions. Our team is dedicated to helping businesses streamline their messaging strategies, ensuring efficient and effective communication. Trust Logon Utility to elevate your digital outreach and connect with your audience like never before.</p>
                      <ul className="social-icon">
                        <li>
                          <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}

                <div className="post-navigation row">
                  {prevPost && (
                    <div className="col prev-post">
                      <a href="#" onClick={() => handleNavigation(prevPost.slug)}><i className="fas fa-arrow-left"></i>Prev Post</a>
                    </div>
                  )}
                  {nextPost && (
                    <div className="col next-post">
                      <a href="#" onClick={() => handleNavigation(nextPost.slug)}>Next Post <i className="fas fa-arrow-right"></i></a>
                    </div>
                  )}
                </div>

              </div>
            </article>
          )
        )}
      </div>
    </div>
  );
};

export default IndividualPost;
