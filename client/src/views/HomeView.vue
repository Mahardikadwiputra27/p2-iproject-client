<template>
  <div class="main-search-input-wrap">
    <div id="map" style="width: 1000px; height: 600px"></div>
    <div class="main-search-input fl-wrap">
      <div class="main-search-input-item">
        <input
          type="text"
          v-model="searchName"
          placeholder="Search University..."
        />
      </div>
      <button class="main-search-button" @click.prevent="search">Search</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "HomeView",
  data() {
    return {
      searchName: "",
    };
  },
  computed: {
    coordinates() {
      return this.$store.state.coordinates;
    },
  },
  methods: {
    search() {
      this.$store.dispatch("getSearch", { name: this.searchName }).then(() => {
        this.run();
      });
    },
    run() {
      /* eslint-disable */
      console.log(
        this.coordinates.place.candidates[0].geometry.location.lng,
        this.coordinates.place.candidates[0].geometry.location.lat
      );

      mapboxgl.accessToken =
      navigator.geolocation.getCurrentPosition(success, error, {
        enableHighAccuracy: true,
      });
      function success(position) {
        setupLocation([position.coords.longitude, position.coords.latitude]);
      }
      function error(position) {
        setupLocation([-6.208417, 106.83919]);
      }
      if (!this.coordinates) {
        setupLocation([position.coords.longitude, position.coords.latitude]);
      } else {
        setupLocation([
          this.coordinates.place.candidates[0].geometry.location.lng,
          this.coordinates.place.candidates[0].geometry.location.lat,
        ]);
        this.coordinates.nearbyPlace.results.forEach((el) => {
          return new mapboxgl.Marker().set
            .setLngLat([el.geometry.location.lat, el.geometry.location.lng])
            .addTo(map);
        });
      }

      function setupLocation(center) {
        const map = new mapboxgl.Map({
          container: "map", // container ID
          style: "mapbox://styles/mapbox/streets-v11", // style URL
          center: center, // starting position [lng, lat]
          zoom: 16, // starting zoom
        });
      }
    },
  },

  created() {
    this.run();
    this.search();
  },
};
</script>

<style scoped>
body {
  background-color: #8f4df8;
}

.main-search-input {
  background: #fff;
  padding: 0 120px 0 0;
  border-radius: 1px;
  margin-top: 200px;
  box-shadow: 0px 0px 0px 6px rgba(255, 255, 255, 0.3);
}

.fl-wrap {
  float: left;
  width: 100%;
  position: relative;
}

.main-search-input:before {
  content: "";
  position: absolute;
  bottom: -40px;
  width: 50px;
  height: 1px;
  background: rgba(255, 255, 255, 0.41);
  left: 50%;
  margin-left: -25px;
}

.main-search-input-item {
  float: left;
  width: 100%;
  box-sizing: border-box;
  border-right: 1px solid #eee;
  height: 50px;
  position: relative;
}

.main-search-input-item input:first-child {
  border-radius: 100%;
}

.main-search-input-item input {
  float: left;
  border: none;
  width: 100%;
  height: 50px;
  padding-left: 20px;
}

.main-search-button {
  background: #4db7fe;
}

.main-search-button {
  position: absolute;
  right: 0px;
  height: 50px;
  width: 120px;
  color: #fff;
  top: 0;
  border: none;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  cursor: pointer;
}

.main-search-input-wrap {
  max-width: 500px;
  margin: 20px auto;
  position: relative;
}

:focus {
  outline: 0;
}

@media only screen and (max-width: 768px) {
  .main-search-input {
    background: rgba(255, 255, 255, 0.2);
    padding: 14px 20px 10px;
    border-radius: 10px;
    box-shadow: 0px 0px 0px 10px rgba(255, 255, 255, 0);
  }

  .main-search-input-item {
    width: 100%;
    border: 1px solid #eee;
    height: 50px;
    border: none;
    margin-bottom: 10px;
  }

  .main-search-input-item input {
    border-radius: 6px !important;
    background: #fff;
  }

  .main-search-button {
    position: relative;
    float: left;
    width: 100%;
    border-radius: 6px;
  }
}
</style>
