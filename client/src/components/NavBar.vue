<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand">Hotel Visit</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <button class="nav-item nav-link active" @click.prevent="home">
          Home
        </button>
        <button class="nav-item nav-link" @click.prevent="history">
          History
        </button>
        <button class="nav-item nav-link" @click.prevent="logout">
          Logout
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
    home() {
      this.$router.push("/");
    },
    history() {
      console.log("tombol history");
      this.$router.push("/history");
    },
    logout() {
      localStorage.clear();
      this.$$router.push("/login");
    },
  },
};
</script>

<style></style>
