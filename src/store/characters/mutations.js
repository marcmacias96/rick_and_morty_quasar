export function setData(state, data) {
    state.characters = data.results
    state.info = data.info
}
export function addMore(state, data) {
    state.characters = state.characters.concat(data.results)
}
export function setPage(state) {
    state.page++ 
}

export function setSearch(state, isSearch) {
    state.isSearch = isSearch
}

export function clearSearch(state) {
    state.characters = []
    
}
