import { UserType } from "../HW8"

type ActionType = { type: "sort"; payload: "up" | "down" } | { type: "check"; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
  // need to fix any
  switch (action.type) {
    case "sort": {
      const newState = [...state]
      if (action.payload === "up") {
        return newState.sort((a: UserType, b: UserType) => a.name.localeCompare(b.name))
      }
      if (action.payload === "down") {
        return newState.sort((a: UserType, b: UserType) => b.name.localeCompare(a.name))
      }
      return state // need to fix
    }
    case "check": {
      return state.filter((el) => el.age >= action.payload) // need to fix
    }
    default:
      return state
  }
}
