const initialState = {
  tab: 'home',
  showMenu: 'closed',
  menuButton: '>',
  showOpening: true,
  showOptions: false,
  pose: 'initial',
  next_pose: 'home',
}

const newState = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_TAB':
      return Object.assign({}, state, {
        tab: action.tab,
      })

    case 'CHANGE_SHOWMENU':
      return Object.assign({}, state, {
        showMenu: action.showMenu
      })

    case 'CHANGE_MENUBUTTON':
      return Object.assign({}, state, {
        menuButton: action.menuButton
      })

    case 'CHANGE_SHOWOPENING':
      return Object.assign({}, state, {
        showOpening: action.showOpening
      })

    case 'CHANGE_SHOWOPTIONS':
      return Object.assign({}, state, {
        showOptions: action.showOptions
      })

    case 'CHANGE_POSE':
      return Object.assign({}, state, {
        pose: action.pose
      })

    case 'CHANGE_NEXTPOSE':
      return Object.assign({}, state, {
        next_pose: action.next_pose
      })

    default:
      return state
  }
}

export default newState
