import { SET_POSTS, ADD_COMMENT, POST_CREATED, CREATING_POST } from "./constants";
import axios from "axios";

export const addPost = post => {
  return dispatch => {
  dispatch(creatingPost())


    axios.post('/posts.json', { ...post })
      .catch(err => console.log(err))
      .then(res => {
        dispatch(fetchPosts())
        dispatch(postCreated())
      })
  }
}

export const addComment = payload => {
  return dispatch => {
    axios.get(`/posts/${payload.postId}.json`)
      .catch(err => console.log(err))
      .then(res => {
        const comments = res.data.comments || []
        comments.push(payload.comment)
        axios.patch(`/posts/${payload.postId}.json`, {comments})
          .catch(err => console.log(err))
          .then(res => {
            dispatch(fetchPosts())
          })
      })
  }
}

export const setPosts = posts => {
  return {
    type: SET_POSTS,
    posts
  }
}

export const fetchPosts = () => {
  return dispatch => {
    axios.get('/posts.json')
      .catch(err => console.log(err))
      .then(res => {
        const rawPosts = res.data
        const posts = []
          for (let key in rawPosts){
            posts.push({
              ...rawPosts[key],
              id: key,
            })
          }
        dispatch(setPosts(posts.reverse()))
      })
  }
}

export const creatingPost = () => {
  return {
    type: CREATING_POST 

  }
}

export const postCreated = () => {
  return {
    type: POST_CREATED
  }
}