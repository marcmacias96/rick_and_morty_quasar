export function setData(state, data){
    state.locations = data.results
    state.info = data.info
    
}