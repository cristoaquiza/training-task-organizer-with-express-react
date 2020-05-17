import { SET_TASKS, ADD_TASK } from './actions'

const reducer = (state, action) => {
  switch (action.type) {
    case SET_TASKS:
      return {
        ...state,
        tasks: action.payload
      }
    case ADD_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          action.payload
        ]
      }
    default:
      return state
  }
}

export default reducer