import * as React from "react";

export const PostForm = ({ draftPost, draftPostActions, postActions }) => {
  return (
    <div>
      <label>
        Title:<br />
        <input
          type="text"
          value={draftPost.title}
          onChange={e => {
            draftPostActions.edit({
              title: e.target.value
            });
          }}
        />
      </label>
      <br />
      <p>Body</p>
      <textarea
        rows={10}
        cols={100}
        value={draftPost.body}
        onChange={e => {
          draftPostActions.edit({
            body: e.target.value
          });
        }}
      />
      <br />
      <button
        onClick={e => {
          postActions.addPost(draftPost);
          draftPostActions.edit({ title: "", body: "" });
        }}
      >
        Create
      </button>
    </div>
  );
};
