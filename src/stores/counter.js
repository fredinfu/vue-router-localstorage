import {defineStore} from 'pinia'

export const useCounter = defineStore("counter", {
    //state
    state: ()=> ({
        count: 0,
        name: "Sant"
    })
    //getters
    //actions
})