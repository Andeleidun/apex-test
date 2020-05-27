import * as actions from './actions';

const initState = {
    catStore : [],
    index: 0
}

export default async function reducer(state = initState, action) {
    let length = state.catStore.length - 1;
    let newIndex;
    switch (action.type) {
        case "RETRIEVE_CAT":
            // fetch(url)
            //     .then(resp => resp.json)
            //     .then(data => {
            //         return state = {
            //             ...state,
            //             catStore: state.catStore.push(data)
            //         }
            //     })
        case "NEXT_CAT":
            if (state.index === length) {
                newIndex = 0;
            } else {
                newIndex = state.index++;
            }
            return state = {
                ...state,
                index: newIndex
            }
        case "PREV_CAT":
            if (state.index === 0) {
                newIndex = length;
            } else {
                newIndex = state.index--;
            }
            return state = {
                ...state,
                index: newIndex
            }
        default:
            return state;
    }
}