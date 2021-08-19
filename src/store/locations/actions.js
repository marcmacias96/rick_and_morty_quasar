import { api } from "src/boot/axios";

export async function fetchLocations({commit}){
    try {
        const response = await api.get('/location')
        commit('setData', response.data)
    } catch (error) {
        console.error(error);
    }
}

export function fetchMore({ commit,state }, done) {
    if (state.info.next != null && !state.isSearch ) {
         try {
            commit('setPage')
            api.get('/location/?page=' + state.page).then(function (response) {
                commit('addMore', response.data)
                done()
            })
       
        } catch (error) {
            console.error(error);
        }
    } else {
        done()
    }
   
}