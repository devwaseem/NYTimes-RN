import { createStore } from 'redux'
import * as ActionTypes from './ActionTypes'

const initialStore = {
    bookmarkedStories: []
}

function reducer(state = initialStore, action) {
    switch(action.type){
        case ActionTypes.ADD_BOOKMARK: {
            const bookmarkedStories = state.bookmarkedStories
            const storyToBeAdded = action.payload.story
            for(let i=0;i<bookmarkedStories.length;i++) {
                if (bookmarkedStories[i].url === storyToBeAdded.url) {
                    //found duplicate so return the state
                    return state
                }
            }
            //unique story so add to bookmark
            return {
                ...state,
                bookmarkedStories: [...bookmarkedStories, storyToBeAdded]
            }
        }

        case ActionTypes.DELETE_BOOKMARK: {
            const bookmarkedStories = state.bookmarkedStories
            const storyToBeAdded = action.payload.story
            return {
                ...state,
                bookmarkedStories: bookmarkedStories.filter((item)=>(item.url !== storyToBeAdded.url))
            }
        }            

        default:
            return state
    }
}

export const Store = createStore(reducer)
export default Store