<template>
  <GoogleMap :api-key="key" style="width: 100%; height: 500px" :center="center" :zoom="15">
    <Marker v-if="updateShowMarker" :options="{ position: updateMarkerPos }" />
  </GoogleMap>
</template>

<script>
import { defineComponent } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";

export default defineComponent({
  components: { GoogleMap, Marker },
  props: {
    markerPos: {
      type: Object
    },
    showMarker: {
      type: Boolean
    }
  },
  computed: {
    updateMarkerPos() {
      return this.markerPos;
    },
    updateShowMarker() {
      return this.showMarker;
    }
  },
  data() {
    return {
      key: "AIzaSyCOEzzS_AR8KKp4iSDJDHb-GMepCSVd2P0",
      center: { lat: 40.689247, lng: -96.044502 }
    }
  },
  watch: {
    updateMarkerPos(newValue) {
      this.center = newValue;
    }
  }
});
</script>