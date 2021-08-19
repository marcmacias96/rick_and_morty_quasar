<template>
  <q-layout view="hHh Lpr lff">
    <q-header>
      <q-toolbar class="bg-white text-black">
        <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
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

    <q-drawer
      v-model="drawer"
      show-if-above
      :width="200"
      :breakpoint="500"
      bordered
      class="bg-grey-3"
    >
      <q-scroll-area class="fit">
        <q-list>
          <template v-for="(menuItem, index) in menuList" :key="index">
            <q-item clickable v-ripple :to="menuItem.to">
              <q-item-section avatar>
                <q-icon :name="menuItem.icon" />
              </q-item-section>
              <q-item-section>
                {{ menuItem.label }}
              </q-item-section>
            </q-item>
            <q-separator :key="'sep' + index" v-if="menuItem.separator" />
          </template>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { useStore } from "vuex";
import { ref } from "vue";
export default {
  setup() {
    const $store = useStore();
    const menuList = [
      {
        icon: "groups",
        label: "Characters",
        separator: false,
        to: "/",
      },
      {
        icon: "place",
        label: "Place",
        separator: false,
        to: "/locations",
      },
    ];

    return {
      drawer: ref(false),
      menuList,
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
