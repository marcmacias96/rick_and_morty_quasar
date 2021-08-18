<template>
  <div class="bg-grey-9 rounded-borders row">
    <div class="col-auto q-mr-md">
      <q-avatar rounded size="250px">
        <img :src="image" />
      </q-avatar>
    </div>
    <div class="col-auto q-py-sm">
      <div class="text-weight-bolder text-h5 text-white">{{ name }}</div>
      <div class="row q-py-sm items-center">
        <div class="col-1">
          <q-avatar color="green" size="15px"></q-avatar>
        </div>
        <div class="col">
          <div class="text-h6 text-white">{{ state }} - {{ species }}</div>
        </div>
      </div>
      <div class="col q-gutter-y-sm">
        <div class="text-h6 text-grey text-weight-regular">Origin</div>
        <div class="text-h5 text-white text-weight-bold">{{ origin.name }}</div>
        <div class="text-h6 text-grey text-weight-regular">Ubicacion</div>
        <div class="text-h5 text-white text-weight-bold">
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
