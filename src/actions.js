const retrieveCat = {
    type: "RETRIEVE_CAT",
    payload: {
        description: "Retrieve a cat from thecatapi"
    }
}

const nextCat = {
    type: "NEXT_CAT",
    payload: {
        description: "Navigate to next cat."
    }
}

const prevCat = {
    type: "PREV_CAT",
    payload: {
        description: "Navigate to previous cat."
    }
}