<template>
  <q-page class="bg-black">
    <div class="col q-my-xl flex flex-center bg-white">
      <h1 class="text-weight-bolder desktop-only">Locations</h1>
      <h3 class="text-weight-bolder mobile-only">Locations</h3>
    </div>

    <div class="row q-gutter-md justify-center">
      <div
        class="col-lg-3 col-md-5 col-sm-5 col-xs-10"
        v-for="location in locationsState"
        :key="location.id"
      >
        <location-item
          :image="location.url"
          :name="location.name"
          :type="location.type"
          :dimension="location.dimension"
          :residents="location.residents.length"
        />
      </div>
    </div>
  </q-page>
</template>
<script>
import LocationItem from "../components/Locations/locations_item.vue";
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  preFetch({ store }) {
    return store.dispatch("locations/fetchLocations");
  },

  setup() {
    const $store = useStore();

    const locationsState = computed({
      get: () => $store.state.locations.locations,
    });
    return {
      locationsState,
    };
  },

  components: { LocationItem },
};
</script>
