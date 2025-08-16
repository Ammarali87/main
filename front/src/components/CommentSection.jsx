// import { useState } from 'react';

// function CommentSection() {
//   const [commentInput, setCommentInput] = useState('');
//   const [comments, setComments] = useState([
//     {
//       name: 'John Doe',
//       comment: 'This course is really helpful!',
//       date: '2025-08-16',
//       image:
//         'https://randomuser.me/api/portraits/men/32.jpg',
//     },
//     {
//       name: 'Jane Smith',
//       comment: 'Learned so much, especially about SEO!',
//       date: '2025-08-15',
//       image:
//         'https://randomuser.me/api/portraits/women/44.jpg',
//     },
//   ]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!commentInput.trim()) return;

//     const newComment = {
//       name: 'Anonymous User',
//       comment: commentInput,
//       date: new Date().toISOString().split('T')[0],
//       image: `https://randomuser.me/api/portraits/${
//         Math.random() > 0.5 ? 'men' : 'women'
//       }/${Math.floor(Math.random() * 90)}.jpg`,
//     };

//     setComments([newComment, ...comments]);
//     setCommentInput('');
//   };

//   return (
//     <div className="comments-section bg-gray-100 p-4 rounded shadow-md mt-6">
//       <h3 className="text-xl font-bold mb-4">Comments and Reviews</h3>

//       {/* Input Form */}
//       <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 mb-4">
//         <input
//           className="flex-1 px-3 focus:outline-none focus:ring-1 focus:ring-blue-400 
//            py-2 border border-gray-300 rounded placeholder-gray-500"
//           type="text"
//           name="comment"
//           id="comment"
//           placeholder="Write a comment..."
//           value={commentInput}
//           onChange={(e) => setCommentInput(e.target.value)}
//         />
//         <button
//           type="submit"
//           className="bg-sky-500 text-white px-4 py-2 rounded hover:bg-sky-600"
//         >
//           Submit
//         </button>
//       </form>

//       {/* Comments List */}
//       <div className="comments space-y-4">
//         {comments.map((comment, index) => (
//           <div
//             key={index}
//             className="comment-item bg-white p-3 rounded shadow flex gap-3"
//           >
//             <img
//               src={comment.image}
//               alt={comment.name}
//               className="w-12 h-12 rounded-full object-cover"
//             />
//             <div>
//               <h4 className="font-bold text-sm">{comment.name}</h4>
//               <p className="text-gray-700 text-sm">{comment.comment}</p>
//               <span className="text-gray-400 text-xs">{comment.date}</span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default CommentSection;


import { useState, useEffect } from 'react';
import axios from 'axios';

function CommentSection({ productId }) {
  const [commentInput, setCommentInput] = useState('');
  const [comments, setComments] = useState([]);

  // Fetch reviews from backend
  useEffect(() => {
    async function fetchReviews() {
      const res = await axios.get(
        `http://localhost:3000/api/v1/products/${productId}/reviews`
      );
      setComments(res.data.data); // Adjust according to your API response
    }
    fetchReviews();
  }, [productId]);

  // Submit new review
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!commentInput.trim()) return;

    // You may need to send user info and productId
    await axios.post(
      `http://localhost:3000/api/v1/products/${productId}/reviews`,
      { comment: commentInput }
    );

    setCommentInput('');
    // Re-fetch reviews after submit
    const res = await axios.get(
      `http://localhost:3000/api/v1/products/${productId}/reviews`
    );
    setComments(res.data.data);
  };

  return (
    <div className="comments-section bg-gray-100 p-4 rounded shadow-md mt-6">
      <h3 className="text-xl font-bold mb-4">Comments and Reviews</h3>

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 mb-4">
        <input
          className="flex-1 px-3 focus:outline-none focus:ring-1 focus:ring-blue-400 
           py-2 border border-gray-300 rounded placeholder-gray-500"
          type="text"
          name="comment"
          id="comment"
          placeholder="Write a comment..."
          value={commentInput}
          onChange={(e) => setCommentInput(e.target.value)}
        />
        <button
          type="submit"
          className="bg-sky-500 text-white px-4 py-2 rounded hover:bg-sky-600"
        >
          Submit
        </button>
      </form>

      {/* Comments List */}
      <div className="comments space-y-4">
        {/* {comments.map((comment, index) => (
          <div
            key={index}
            className="comment-item bg-white p-3 rounded shadow flex gap-3"
          >
            <img
              src={comment.image}
              alt={comment.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h4 className="font-bold text-sm">{comment.name}</h4>
              <p className="text-gray-700 text-sm">{comment.comment}</p>
              <span className="text-gray-400 text-xs">{comment.date}</span>
            </div>
          </div>
        ))} */}
        {comments.map((review, index) => (
        <div key={index} className="comment-item bg-white p-3 rounded shadow flex gap-3">
            <img
            src={review.user?.profileImage || 'default-image-url'}
            alt={review.user?.name || 'Anonymous'}
            className="w-12 h-12 rounded-full object-cover"
            />
            <div>
            <h4 className="font-bold text-sm">{review.user?.name || 'Anonymous'}</h4>
            <p className="text-gray-700 text-sm">{review.comment}</p>
            <span className="text-gray-400 text-xs">{new Date(review.createdAt).toLocaleDateString()}</span>
            </div>
        </div>
        ))}
      </div>
    </div>
  );
}

export default CommentSection;





// also map  can be  