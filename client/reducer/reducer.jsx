export default function chatApp( state = 'Login', action) {
  switch (action.type) {
    case 'SET_VISIBLE_COMPONENT':
      return action.component;
    default:
      return state;
  }
}
