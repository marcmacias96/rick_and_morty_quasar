<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar class="bg-white text-black">
        <q-avatar>
          <img src="img/pngwing.com.png" />
        </q-avatar>
        <q-toolbar-title class="text-weight-bold">
          Rick and Morty
        </q-toolbar-title>
        <q-input
          borderless
          standout
          v-model="filter"
          input-class="text-right"
          class="q-ml-md text text-black"
          placeholder="Search"
          color="black"
        >
          <template v-slot:append>
            <q-icon v-if="filter === ''" name="search" />
            <q-icon
              v-else
              name="clear"
              class="cursor-pointer"
              @click="filter = ''"
            />
          </template>
        </q-input>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { useStore } from "vuex";
export default {
  setup() {
    const $store = useStore();

    return {
      getData() {
        $store.dispatch("characters/fetchCharacters");
      },
      getDataFiltered(filter) {
        $store.dispatch("characters/fetchFilter", filter);
      },
      setSearchState(state) {
        $store.commit("characters/setSearch", state);
      },
      clearSearch() {
        $store.commit("characters/clearSearch");
      },
    };
  },
  data() {
    return {
      filter: "",
    };
  },
  watch: {
    filter(newFilter, oldFilter) {
      if (newFilter != "") {
        this.setSearchState(true);
        this.getDataFiltered(newFilter);
      } else {
        this.setSearchState(false);
        this.clearSearch();
        this.getData();
      }
    },
  },
};
</script>
