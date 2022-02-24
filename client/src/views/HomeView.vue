<template>
  <div>
    <div id="map" style="width: 100vw; height: 100vh"></div>
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
      map: null,
    };
  },
  computed: {
    coordinates() {
      return this.$store.state.coordinates;
    },
  },
  methods: {
    search() {
      /* eslint-disable */
      this.$store.dispatch("getSearch", { name: this.searchName }).then(() => {
        let hotels = [];
        this.coordinates.nearbyPlace.results.forEach((el) => {
          let temp = [];
          temp.push(el.geometry.location.lng);
          temp.push(el.geometry.location.lat);
          hotels.push(temp);
        });

        this.map.setCenter([
          this.coordinates.place.candidates[0].geometry.location.lng,
          this.coordinates.place.candidates[0].geometry.location.lat,
        ]);
        const marker = new mapboxgl.Marker({
          color: "#FFFFFF",
        })
          .setLngLat([
            this.coordinates.place.candidates[0].geometry.location.lng,
            this.coordinates.place.candidates[0].geometry.location.lat,
          ])
          .addTo(this.map);
        hotels.forEach((el) => {
          const nearbyMarket = new mapboxgl.Marker({
            color: "red",
          })
            .setLngLat(el)
            .addTo(this.map);
        });

        console.log(this.map, "<<<<<<");
      });
    },
  },
  mounted() {
    console.log("abcd");
    mapboxgl.accessToken =
      "pk.eyJ1IjoibWFoYXJkaWthZHdpcHV0cmExMyIsImEiOiJja3p6MW1hMG4wNDdpM3BwYmdsY3ZqaXd4In0.vs-DzV-aeM8q6BPONXrcbA";
    const newmap = new mapboxgl.Map({
      container: "map", // container ID
      style: "mapbox://styles/mapbox/streets-v11", // style URL
      center: [106.8334, -6.1291], // starting position [lng, lat]
      zoom: 14, // starting zoom
    });
    const marker = new mapboxgl.Marker({
      color: "#FFFFFF",
    })
      .setLngLat([106.8334, -6.1291])
      .addTo(newmap);

    this.map = newmap;
    console.log(newmap, "mounted");
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
