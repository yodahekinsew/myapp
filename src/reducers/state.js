const initialState = {
  tab: 'home',
  showMenu: 'closed',
  menuButton: '>',
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
      
    default:
      return state
  }
}

export default newState
