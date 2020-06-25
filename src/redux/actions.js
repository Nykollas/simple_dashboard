export const SET_MODE = "SET_MODE";


export const setMode =  (value) => {
    console.log("Definindo estado " + value)
    return { type:SET_MODE, dark:value }
}

