<template>
  <div class="bg-grey-9 rounded-borders row q-mt-lg">
    <div class="col-12 q-gutter-md justify-center bg-white text-black">
      <div class="text-h5 text-weight-bolder">{{ name }}</div>
    </div>
    <div class="col-12 text-white q-gutter-y-sm q-pa-md">
      <div class="column">
        <div class="text-h7 text-grey text-weight-regular">Tipo</div>
        <div class="text-h6 text-weight-medium">{{ type }}</div>
      </div>
      <div class="row justify-left">
        <div class="column">
          <div class="text-h7 text-grey text-weight-regular">Dimension</div>
          <div class="text-h6 text-weight-medium">{{ dimension }}</div>
        </div>
        <q-space></q-space>
        <div class="column q-mr-xl">
          <div class="text-h7 text-grey text-weight-regular">Residentes</div>
          <div class="text-h6 text-weight-medium">{{ residents }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "LocationItem",
  props: {
    name: {
      require: true,
    },
    type: {
      require: true,
    },
    dimension: {
      required: true,
    },
    residents: {
      required: false,
    },
    image: {
      required: true,
    },
  },
});
</script>
