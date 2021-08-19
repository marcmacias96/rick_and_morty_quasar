<template>
  <div class="bg-grey-9 rounded-borders row">
    <div class="col-xs-12 col-lg-3 col-md-4 col-xl-4">
      <q-img
        :src="image"
        fit="cover"
        class="rounded-borders"
        style="min-width: 140px; height: 220px"
      />
    </div>
    <div class="col-7 q-py-sm q-ml-md">
      <div class="text-weight-bolder text-h5 text-white">{{ name }}</div>
      <div class="row items-center no-wrap">
        <div class="col-1">
          <q-avatar
            v-if="state == 'Alive'"
            color="green"
            size="15px"
          ></q-avatar>
          <q-avatar v-if="state == 'Dead'" color="red" size="15px"></q-avatar>
          <q-avatar
            v-if="state == 'unknown'"
            color="grey"
            size="15px"
          ></q-avatar>
        </div>
        <div class="col-auto q-ml-sm">
          <div class="text-h6 text-white">{{ state }} - {{ species }}</div>
        </div>
      </div>
      <div class="col q-gutter-y-sm">
        <div class="text-h7 text-grey text-weight-regular">Origin</div>
        <div class="text-h6 text-white text-weight-bold">{{ origin.name }}</div>
        <div class="text-h7 text-grey text-weight-regular">Ubicacion</div>
        <div class="text-h6 text-white text-weight-bold">
          {{ location.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "CharacterItem",
  props: {
    name: {
      required: true,
    },

    state: {
      required: true,
    },

    species: {
      default: "",
    },

    origin: {
      default: "",
    },
    location: {
      default: "",
    },
    image: {
      required: true,
    },
  },
});
</script>
