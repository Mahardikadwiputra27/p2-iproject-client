<template>
  <div>
    <nav-bar></nav-bar>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="history in histories" :key="history.id">
          <td v-text="history.id"></td>
          <td v-text="history.name"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
export default {
  components: { NavBar },
  name: "HistoryView",
  computed: {
    histories() {
      return this.$store.state.histories;
    },
  },
  methods: {
    fetchHistory() {
      this.$store.dispatch("getHistories");
    },
  },
  created() {
    console.log("history page");
    this.fetchHistory();
  },
};
</script>

<style></style>
