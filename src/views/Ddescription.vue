<template>
  <div class="about">
    <el-container>
      <el-header>
        <router-link to="/">Home</router-link> |
        <router-link to="/detail">Detailed description</router-link>
      </el-header>
      <el-main><DateilDescription /></el-main>
    </el-container>
  </div>
</template>

<script>
import DateilDescription from "@/components/DateilDescription.vue";

export default {
  name: "DateilPage",
  components: {
    DateilDescription,
  },
};
</script>

<style scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>