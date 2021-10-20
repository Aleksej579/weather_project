<template>
  <el-card shadow="hover" class="newCity">
    <!-- <pre>{{ this.$store.state.listCard }}</pre> -->
    <p>City: {{ this.$store.state.listCard[indexI].name }}</p>
    <p>Temp: {{ this.$store.state.listCard[indexI].temp }}</p>
    <p>Wind: {{ this.$store.state.listCard[indexI].wind }}</p>
  </el-card>
</template>

<script>
export default {
  name: "DateilDescription",
  data() {
    return {
      indexI: this.$route.params.index,
    };
  },
};
</script>

<style scoped>
.newCity {
  line-height: initial;
}
</style>