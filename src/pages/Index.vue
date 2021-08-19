<template>
  <q-page class="bg-black">
    <div class="col q-my-xl flex flex-center bg-white">
      <h1 class="text-weight-bolder desktop-only">Characters</h1>
      <h3 class="text-weight-bolder mobile-only">Characters</h3>
    </div>
    <div>
      <q-infinite-scroll @load="getMore" class="column">
        <div class="row justify-center q-px-xl q-gutter-x-lg q-gutter-y-md">
          <div
            class="col-lg-5 col-md-5 col-sm-5 col-12"
            v-for="character in charactersState"
            :key="character.id"
          >
            <character-item
              :image="character.image"
              :name="character.name"
              :state="character.status"
              :species="character.species"
              :origin="character.origin"
              :location="character.location"
            />
          </div>
        </div>

        <template v-slot:loading>
          <div class="row justify-center q-my-md">
            <q-spinner-dots color="primary" size="40px" />
          </div>
        </template>
      </q-infinite-scroll>
    </div>
  </q-page>
</template>

<script>
import CharacterItem from "../components/home/character_item.vue";
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  preFetch({ store }) {
    return store.dispatch("characters/fetchCharacters");
  },

  setup() {
    const $store = useStore();

    const charactersState = computed({
      get: () => $store.state.characters.characters,
    });

    return {
      charactersState,
      getMore(index, done) {
        $store.dispatch("characters/fetchMore", done);
      },
      getDataFiltered(filter) {
        $store.dispatch("characters/fetchFilter", done);
      },
    };
  },

  components: {
    CharacterItem,
  },
};
</script>
