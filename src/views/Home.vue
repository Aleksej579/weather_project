<template>
  <div class="home">
    <el-container>
      <el-header>
        <router-link to="/">Home</router-link> |
        <router-link to="/detail">Detailed description</router-link>
      </el-header>
      <el-main>
        <el-row :gutter="15">
          <el-col :span="8">
            <CurentCity />
          </el-col>
          <el-col :span="15"> test </el-col>
          <el-divider></el-divider>
        </el-row>
        <FindCity />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import CurentCity from "@/components/CurentCity.vue";
import FindCity from "@/components/FindCity.vue";
import "boxicons";

export default {
  name: "Home",
  components: {
    CurentCity,
    FindCity,
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
