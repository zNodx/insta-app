import { SET_POSTS, ADD_COMMENT } from "./constants";
import axios from "axios";

export const addPost = post => {

  return dispatch => {
    axios.post('/posts.json', { ...post })
      .catch(err => console.log(err))
      .then(res => console.log(res.data))
  }
}

export const addComment = payload => {
  return {
    type: ADD_COMMENT,
    payload
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
        console.log(res.data)
        const rawPosts = res.data
        const posts = []
          for (let key in rawPosts){
            posts.push({
              ...rawPosts[key],
              id: key,
            })
          }
        dispatch(setPosts(posts))
      })
  }
}