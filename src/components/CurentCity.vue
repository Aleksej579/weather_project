<template>
  <div class="hello">
    <el-card shadow="hover" class="currentCity">
      <h2>{{ currentCityWeather.name }}</h2>
      {{ currentCityWeather.temp }} <br />
      {{ currentCityWeather.wind }}
    </el-card>
  </div>
</template>

<script>
export default {
  name: "CurentCity",
  data() {
    return {
      currentCityWeather: {
        local: "",
        name: "",
        temp: "",
        wind: "",
      },
    };
  },
  computed: {},
  methods: {
    getCurentWeather() {
      fetch("https://ipwhois.app/json/")
        .then((response) => response.json())
        .then((local) => {
          fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${local.city}&appid=bbc9d9f77eec628025ef1f81cc3f885f&units=metric `
          )
            .then((response) => response.json())
            .then((weatherData) => {
              this.currentCityWeather.name = weatherData.name;
              this.currentCityWeather.temp = `temp: ${weatherData.main.temp} *С`;
              this.currentCityWeather.wind = `wind: ${weatherData.wind.speed} m/s`;
            });
        });
    },
  },
  beforeMount() {
    this.getCurentWeather();
  },
};
</script>

<style scoped>
.currentCity {
  line-height: initial;
}
</style>
