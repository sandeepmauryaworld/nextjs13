const fetchPost = async (lid) => {
  const res = await fetch(
    `https://qyydnh2xz9.execute-api.us-west-1.amazonaws.com/prod/products?lid=${lid}`
  );
  const posts = await res.json();
  return posts;
};

const Post = async ({ params: { lid } }) => {
  const Post = await fetchPost(lid);
  {
    /* <h3>{Post.address_1}</h3> */
  }
  return <h3>{Post.address_1}</h3>;
};

export default Post;
