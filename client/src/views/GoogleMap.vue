<template>
  <div class="map">
    <GoogleMapLoader
      :markerPos="markerPos"
      :showMarker="showMarker"
    ></GoogleMapLoader>
  </div>
  <div id="floating-panel">
    <input
      v-model="coords.latitude"
      type="number"
      inputmode="numeric"
      placeholder="latitude"
    />
    <input
      v-model="coords.longitude"
      type="number"
      inputmode="numeric"
      placeholder="longitude"
    />
    <input @click="sendCoords" id="submit" type="button" value="find" />
  </div>
  <div v-if="err" class="error-message">{{ err }}</div>
</template>
<script>
import { defineComponent } from "vue";
import GoogleMapLoader from "@/components/GoogleMapLoader.vue";
import { apiService } from "@/services/api";

export default defineComponent({
  components: { GoogleMapLoader },
  data() {
    return {
      coords: {
        latitude: null,
        longitude: null,
      },
      markerPos: null,
      showMarker: false,
      err: null,
    };
  },
  mounted() {
    this.restoreMarkerState();
  },
  methods: {
    sendCoords() {
      apiService
        .post("/google-maps/marker", this.coords)
        .then(() => {
          this.markerPos = {
            lat: this.coords.latitude,
            lng: this.coords.longitude,
          };
        })
        .catch((error) => {
          if (
            error.response &&
            error.response.data &&
            error.response.data.message
          ) {
            this.err = error.response.data.message.join(", ");
          } else {
            this.err = "Помилка при виконанні запиту";
          }
        });
    },
    saveMarkerState() {
      localStorage.setItem("markerState", this.showMarker);
      localStorage.setItem("markerPos", JSON.stringify(this.markerPos));
    },
    restoreMarkerState() {
      const storedState = localStorage.getItem("markerState");
      this.showMarker = storedState;

      const storedPosition = localStorage.getItem("markerPos");
      this.markerPos = JSON.parse(storedPosition);
    },
  },
  watch: {
    markerPos() {
      this.showMarker = true;
      this.saveMarkerState();
      setTimeout(() => {
        this.showMarker = false;
        this.saveMarkerState();
      }, 60000);
    },
  },
});
</script>
<style>
.map {
  display: block;
}
.error-message {
  color: red;
  margin-top: 10px;
}
</style>
