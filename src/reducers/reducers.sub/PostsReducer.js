const initialState = {
    usersPosts: [],
    
  };
  
  const PostsReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_USERS_POSTS":
        return { usersPosts: [...action.payload] };
      default:
        return state;
    }
  };
  
  export default PostsReducer;