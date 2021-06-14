// Import createStore and combineReducers here.
import { createStore, combineReducers} from 'redux'

// Import the slice reducers here.
import {currencyFilterReducer} from '../features/currencyFilterSlice.js'
import {inventoryReducer} from '../features/inventorySlice.js'
import {cartReducer} from '../features/cartSlice.js'


// Create and export the store here.
const store = createStore(combineReducers({
    currencyFilter: currencyFilterReducer,
    cart: cartReducer,
    inventory: inventoryReducer

}))

export default store