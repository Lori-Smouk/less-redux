export const plus = () => {
    return  {
        type: "plus"
    }
}
export const minus = () => {
    return  {
        type: "minus"
    }
}
export const reset = () => {
    return {
        type: "reset"
    }
}
export const add = (change) => {
    return {
        type: "add",
        number: change
    }
}