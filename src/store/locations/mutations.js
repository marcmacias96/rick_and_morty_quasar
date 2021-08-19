import state from "../characters/state"

export function setData(state, data){
    state.locations = data.results
    state.info = data.info
    
}

export function addMore(state, data){
    state.locations = state.locations.concat(data.results)
}

export function setPage(state){
    state.page++
}

export function setSearch(state, isSearch){
    state.isSearch = isSearch
}

export function clearSearch(State){
    state.locations = []
}