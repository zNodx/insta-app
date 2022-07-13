import { ADD_POST } from "./constants";

export const addPost = post => {
  return {
    type: ADD_POST,
    post
  }
}