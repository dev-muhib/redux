const { reset } = require('nodemon')
const {createStore} = require('redux')

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const RESET = 'RESET'
const INCREMENT_BY_VALUE = 'INCREMENT_BY_VALUE'
const USER = 'USER'
const ADD_USER = 'ADD_USER'



//state initial
const initialCounterState = {
    count: 1,
    user: ["Muhib"]
}

//action Create
const incrementCounterAction = () => {
    return {
        type: INCREMENT
    }
}

const decrementCounterAction = () => {
    return {
        type: DECREMENT
    }
}

const resetAction = () => {
    return {
        type: RESET
    }
}

const incrementByValue = (value) => {
    return {
        type: INCREMENT_BY_VALUE,
        payload: value
    }
}

const userList = () => {
    return {
        type: USER
    }
}
const addUser = (value) => {
    return {
        type: ADD_USER,
        payload: value
    }
}


//create reducer

const counterReducer = (state=initialCounterState, action) => {
    switch(action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count -1
            }
        case INCREMENT_BY_VALUE:
            return {
                ...state,
                count: state.count + action.payload
            }
        case RESET:
            return {
                ...state,
                count: 0
            }
        case USER:
            return {
                ...state,
                user: [...state.user]
            }
        case ADD_USER:
            return {
                ...state,
                user: [...state.user, action.payload],
                count: state.count + 1
            }
        default:
            state

    }
}

//store

const store = createStore(counterReducer)

store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(addUser("dasda"))
store.dispatch(addUser("rrrr"))