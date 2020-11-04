import { NYTimesTopStory } from "../Models/NYTimesModels";
import * as ActionType from './ActionTypes'
import Store from './Redux'



export const addBookmark = (story: NYTimesTopStory) => {
    Store.dispatch({
        type: ActionType.ADD_BOOKMARK,
        payload: {
            story
        }
    })
}

export const deleteBookmark = (story: NYTimesTopStory) => {
    Store.dispatch({
        type: ActionType.DELETE_BOOKMARK,
        payload: {
            story
        }
    })
}