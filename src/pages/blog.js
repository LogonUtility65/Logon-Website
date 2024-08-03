import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Blog_Spotlight_Section from '../components/Blog/blog_spotlg_sec'
import Blog_section from '../components/Blog/blog_section';

function Blog() {
    return (
        <HelmetProvider>
            <div>
                <Helmet>
                    <title>Blog Page -Logon Utility</title>
                    <meta name="description" content="This is the Blog page of your website. It includes information about our services, testimonials, and more." />
                </Helmet>

                <Blog_Spotlight_Section />
                <Blog_section />
                {/* <PostList /> */}



            </div>

        </HelmetProvider>
    );
}

export default Blog
