const initState = {
    themeId: 1,
}

type StateTheme = typeof initState
type ThemeActionType = {
    type: 'SET_THEME_ID'
    id: number
}

export const themeReducer = (state = initState, action: ThemeActionType): StateTheme => { // fix any ✅
    switch (action.type) {

        case 'SET_THEME_ID':
            return { ...state, themeId: action.id }

        default:
            return state
    }
}

export const changeThemeId = (id: number): ThemeActionType => ({ type: 'SET_THEME_ID', id }) // fix any ✅


