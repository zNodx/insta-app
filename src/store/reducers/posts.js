import { ADD_POST } from "../actions/constants";

const initialState = {
  posts:  [
    {
      id: Math.random(),
      nickname: 'Rafael Pereira Filho',
      email: 'rafaelperfil@gmail.com',
      image: require('../../../assets/imgs/fence.jpg'),
      comments: [
        {
          nickname: 'John Ray Sheldon',
          comment: 'Stunning'
        },
        {
          nickname: 'Ana Julia Arruda',
          comment: 'Foto linda! Onde foi tirada?'
        }
      ]
    },
    {
      id: Math.random(),
      nickname: 'Francisco Pereira Filho',
      email: 'fraperfil@gmail.com',
      image: require('../../../assets/imgs/bw.jpg'),
      comments: []
    }
  ]
}

const reducer = ( state = initialState, action) => {
  switch(action.type) {
    case ADD_POST: 
    return {
      ...state,
      posts: state.posts.concat({
        ...action.post
       })
    }
    default:
      return state
  }
}

export default reducer