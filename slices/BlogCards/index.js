import React, { useEffect, useState } from "react";
import BlogCard from "../../components/BlogCard";
import Prismic from "@prismicio/client";
import { apiEndpoint } from "../../prismic";

const BlogCards = ({ slice }) => {
  const heading = slice.primary.heading;
  const blogPostIds = slice.items.map((card) => {
    return card.blogPost?.id;
  });
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    Prismic.client(apiEndpoint)
      .getByIDs(blogPostIds)
      .then((response) => {
        const posts = response.results.map(({ data }) => data);
        setBlogPosts(posts);
      });
  }, [blogPostIds]);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl mb-6 text-primary  font-bold">
          {heading}
        </h2>
        <div className="flex flex-wrap -m-4">
          {blogPosts.length &&
            blogPosts.map(({ title, category, description, image }) => (
              <div key={title} className="p-4 md:w-1/3">
                <BlogCard
                  title={title}
                  category={category}
                  description={description}
                  image={image}
                />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default BlogCards;
