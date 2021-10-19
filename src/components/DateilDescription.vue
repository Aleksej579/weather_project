<template>
  <el-card shadow="hover" class="newCity">
    {{ this.$store.state.listCard }}
    <hr />
    <p>City: {{ this.$store.state.listCard[0].name }}</p>
    <p>Temp: {{ this.$store.state.listCard[0].temp }}</p>
    <p>Wind: {{ this.$store.state.listCard[0].wind }}</p>
    <el-button @click="addNew_()">btn</el-button>
  </el-card>
</template>

<script>
export default {
  name: "DateilDescription",
  data() {
    return {};
  },
  methods: {
    addNew_() {
      // this.$store.commit("addNew", { names: 100, ages: 200 });
    },
  },
};
</script>

<style scoped>
.newCity {
  line-height: initial;
}
</style>