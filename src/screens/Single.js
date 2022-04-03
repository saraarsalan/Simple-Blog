import React from "react";
import SideBar from "../components/SideBar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Single = () => {
  // the clicked post
  const { slug } = useParams();

  console.log("this post come to the single ", slug);

  // intialing the posts array
  const [post, setpost] = useState([
    {
      author: "",
      title: " ",
      date: " ",
      content: "",
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
  https: useEffect(() => {
    fetch(`https://www.wp-course.site/wp-json/youthink/post?slug={${slug}}`)
      .then((res) => res.json())
      .then((json) => {
        setpost(json.data);
      });
  }, [!post]);
  console.log("fetch posts in single this al posts", post);

  useEffect(() => {
    fetch("https://www.wp-course.site/wp-json/wp/v2/comments")
      .then((res) => res.json())
      .then((json) => {
        setcomments(json);
      });
  }, [!comments]);
  function createMarkup(data) {
    return { __html: data };
  }

  return (
    <div>
      <h2 className="address">{post.title}</h2>
      <div className="row">
        <div className="col-8 ">
          <div className="card">
            <img src={post.thumbnail} className="card-img-top" alt="..." />
          </div>

          <div className="card-body ">
            <div className="col-6">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  fill="currentColor"
                  class="bi bi-person"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                </svg>
                <strong> {post.author}</strong>{" "}
              </span>
            </div>
            <div className="col-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                class="bi bi-eye"
                viewBox="0 0 16 16"
              >
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
              </svg>
              <span className="card-text"> {post.views} / </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                className="bi bi-calendar2-event"
                viewBox="0 0 16 16"
              >
                <path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z" />
                <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z" />
              </svg>
              <span className="card-text"> {post.date} / </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                className="bi bi-tags"
                viewBox="0 0 16 16"
              >
                <path d="M3 2v4.586l7 7L14.586 9l-7-7H3zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2z" />
                <path d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1v5.086z" />
              </svg>

              {/* <span> {post.tags.join(", ")}</span> */}

              <span className="card-text"> {post.tags} </span>
            </div>

            <p>
              <div dangerouslySetInnerHTML={createMarkup(post.content)} />
            </p>
          </div>
        </div>

        <div className="col-4 my-3">
          <SideBar comments={comments} />
        </div>
      </div>
    </div>
  );
};

export default Single;
