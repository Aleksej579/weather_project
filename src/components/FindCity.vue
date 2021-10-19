<template>
  <div>
    <el-form ref="formValue" :model="formValue" label-width="100px">
      <el-form-item prop="addCity">
        <el-input
          v-model="formValue.addCity"
          type="text"
          autocomplete="off"
          placeholder="Enter new city"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('formValue')"
          >Submit</el-button
        >
        <el-button @click="resetForm('formValue')">Reset</el-button>
      </el-form-item>
    </el-form>

    <el-form-item v-if="this.$store.state.listCard.length > 0">
      <el-card
        shadow="hover"
        class="newCity"
        v-for="index in this.$store.state.listCard"
        :key="index"
      >
        <el-row>
          <el-col :span="6">{{ index.name }}</el-col>
          <el-col :span="6">{{ index.temp }}</el-col>
          <el-col :span="6"
            ><router-link to="/detail"
              ><el-button
                ><i class="bx bx-link-external"></i></el-button></router-link
          ></el-col>
          <el-col :span="6">
            <el-button @click="remItem_(index.index)"
              ><i class="bx bx-trash"></i></el-button
          ></el-col>
        </el-row>
      </el-card>
    </el-form-item>
  </div>
</template>

<script>
export default {
  name: "FindCity",
  data() {
    return {
      formValue: {
        addCity: "",
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${this.formValue.addCity}&appid=bbc9d9f77eec628025ef1f81cc3f885f&units=metric `
          )
            .then((response) => response.json())
            .then((weatherData) => {
              var theIndex = this.$store.state.listCard.length;
              this.$store.commit("addNew", {
                index: theIndex,
                local: this.formValue.addCity,
                name: weatherData.name,
                temp: `temp: ${weatherData.main.temp} *С`,
                wind: `wind: ${weatherData.wind.speed} m/s`,
              });
            });
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    remItem_(i) {
      this.$store.commit("remItem", i);
    },
  },
};
</script>

<style scoped>
.newCity {
  line-height: initial;
}
</style>