import * as React from "react";

export const PostList = ({ posts }) => {
  return (
    <ul>
      {posts.payload.map((post, i) => {
        return (
          <li key={i}>
            title: {post.title}
            <br />
            body: {post.body}
          </li>
        );
      })}
    </ul>
  );
};
