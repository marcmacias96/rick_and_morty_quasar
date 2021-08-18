import { api } from 'boot/axios'


export async function fetchCharacters({ commit }) {
    try {
        const response = await api.get('/character')
        commit('setData', response.data)
    } catch (error) {
        console.error(error);
    }
   
}

export function fetchMore({ commit,state }, done) {
    if (state.info.next != null && !state.isSearch ) {
         try {
            commit('setPage')
            api.get('/character/?page=' + state.page).then(function (response) {
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

export async function fetchFilter({ commit }, filter) {
    try {
        const response = await api.get('/character/?name=' + filter)
        commit('setData', response.data)
    } catch (error) {
        console.error(error);
    }
   
}