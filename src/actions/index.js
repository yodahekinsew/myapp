export const changeTab = (tab) => ({
  type: 'CHANGE_TAB',
  tab: tab,
})

export const changeShowMenu = (showMenu) => ({
  type: 'CHANGE_SHOWMENU',
  showMenu: showMenu,
})

export const changeMenuButton = (menuButton) => ({
  type: 'CHANGE_MENUBUTTON',
  menuButton: menuButton,
})

export const changeShowOpening = (showOpening) => ({
  type: 'CHANGE_SHOWOPENING',
  showOpening: showOpening,
})

export const changeShowOptions = (showOptions) => ({
  type: 'CHANGE_SHOWOPTIONS',
  showOptions: showOptions,
})

export const changePose = (pose) => ({
  type: 'CHANGE_POSE',
  pose: pose,
})

export const changeNextPose = (next_pose) => ({
  type: 'CHANGE_NEXTPOSE',
  next_pose: next_pose,
})

export const changeChannel = (channel) => ({
  type: 'CHANGE_CHANNEL',
  channel: channel,
})

export const changeSelection = (selection) => ({
  type: 'CHANGE_SELECTION',
  selection: selection,
})

export const changeMaxSelection = (maxSelection) => ({
  type: 'CHANGE_MAXSELECTION',
  maxSelection: maxSelection,
  selection: 1,
})
