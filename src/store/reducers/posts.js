import { SET_POSTS, ADD_COMMENT } from "../actions/constants";

const initialState = {
  posts:  []
}

const reducer = ( state = initialState, action) => {
  switch(action.type) {
    case SET_POSTS: 
      return {
        ...state,
        posts: action.posts
      }
    case ADD_COMMENT:
      return {
        ...state,
        posts: state.posts.map(post => {
          if (post.id === action.payload.postId) {
            if(post.comments){
              post.comments = post.comments.concat(
                action.payload.comment
              )
            }else{
              post.comments = [action.payload.comment]
            }
          }
          return post
        })
      }
    default:
      return state
  }
}

export default reducer