<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a
      >.
    </p>

    <el-button type="primary">Primary</el-button>
    <el-button type="danger">Danger</el-button>

    <el-row :gutter="12">
      <el-col :span="8">
        <el-card shadow="always"> Always </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="hover"> Hover </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="never"> Never </el-card>
      </el-col>
    </el-row>

    <el-card class="box-card">
      <div v-for="o in 4" :key="o" class="text item">
        {{ "List item " + o }}
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

/* new css */
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 480px;
}
</style>
