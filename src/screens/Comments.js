import React from "react";

const Comments = (comment) => {
  const dangerouslySetInnerHTML = "";

  function createMarkup(data) {
    return { __html: data };
  }

  return (
    <div>
      <img id="avatar" src={comment.comment.author_avatar_urls[24]} alt="..." />
      <span>
        <strong> {comment.comment.author_name}</strong>
      </span>
      <p>
        <div
          dangerouslySetInnerHTML={createMarkup(
            comment.comment.content.rendered
          )}
        />
      </p>
      <p>{dangerouslySetInnerHTML}</p>
    </div>
  );
};

export default Comments;
