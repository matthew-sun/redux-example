import { combineReducers } from 'redux'
import items from './items'
import filter from './filter'

const rootReducer = combineReducers({
    items,
    filter
})

export default rootReducer
