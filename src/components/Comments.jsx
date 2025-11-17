import React, { useState } from "react";

function Comments() {
  const [comments, setComments] = useState([]);
  const [message, setMessage] = useState("");

  function handleComment(e) {
    e.preventDefault();
    setComments((prevComment) => [...prevComment, message]);
    setMessage("");
  }

  return (
    <section className="my-10 max-w-5xl mx-auto px-4">
      <h2 className="text-2xl font-semibold mb-4">
        Comments ({comments.length})
      </h2>
      <p>
        {comments.map((comment) => (
          <p>{comment}</p>
        ))}
      </p>
      <form onSubmit={handleComment}>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Add a comment..."
          className="w-full rounded p-3 mt-5 border-0 outline-0 bg-gray-100"
        />
        <button className="bg-blue-600 text-white mt-3 px-4 py-2 rounded">
          Post Comment
        </button>
      </form>
    </section>
  );
}

export default Comments;
