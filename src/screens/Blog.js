import React from "react";
import Posts from "./Posts";
import LoadingSpinner from "./LoadingSpinner";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import SideBar from "../components/SideBar";

const Blog = () => {
  const [flag, setflag] = useState(0);
  const [noMore, setnoMore] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const [page, setpage] = useState(2);
  const [more, setmore] = useState([]);

  const loadMore = () => {
    setIsLoading(true);
    setpage(page + 1);
    if (page > 3) setnoMore(1);
    fetch(`https://www.wp-course.site/wp-json/youthink/posts?page=${page}`)
      .then((res) => res.json())
      .then((json) => {
        setmore([...more, ...json.data]);
        setIsLoading(false);
      });
    setflag(1);
    console.log("more", more);
  };

  const [posts, setposts] = useState([
    {
      title: " ",
      date: " ",
      excerpt: "",
      thumbnail: " ",
      slug: "",
      tags: [""],
      views: 0,
    },
  ]);

  // intialing the comments array
  const [comments, setcomments] = useState([
    {
      id: 0,
      author_name: "",
      author: " ",
      content: {
        rendered: "",
      },
      author_avatar_urls: {
        24: "",
        48: "",
        96: "",
      },
    },
  ]);

  // fetching the posts array
  useEffect(() => {
    fetch("https://www.wp-course.site/wp-json/youthink/posts")
      .then((res) => res.json())
      .then((json) => {
        setposts(json.data);
      });
  }, [!posts]);

  // fetching the comments array
  useEffect(() => {
    fetch("https://www.wp-course.site/wp-json/wp/v2/comments")
      .then((res) => res.json())
      .then((json) => {
        setcomments(json);
      });
  }, [!comments]);

  return (
    <div>
      <h2 className="address">Our Latest Posts</h2>
      <div className="row">
        <div className="col-8 ">
          {posts.map((post, i) => {
            return <Posts post={post} key={i} />;
          })}

          {flag == 1
            ? more.map((post, i) => {
                return <Posts post={post} key={i} />;
              })
            : ""}
        </div>

        <div className="col-4 my-3">
          <SideBar comments={comments} />
        </div>
      </div>
      {isLoading ? <LoadingSpinner /> : ""}
      {noMore == 0 ? (
        <button
          type="button"
          onClick={loadMore}
          disabled={isLoading}
          className="btn btn-primary"
          id="more"
        >
          Load More
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Blog;
