const initialState = {
  postsComments: []
};

const CommentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_POSTS_COMMENTS":
      return { postsComments: [...action.payload] };
    default:
      return state;
  }
};

export default CommentsReducer;
