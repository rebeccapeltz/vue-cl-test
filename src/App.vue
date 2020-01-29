<template>
  <div>
    <!-- <cld-video cloudName="demo" publicId="race_rode_car">
    </cld-video> -->
    <video id="demo-player" controls autoplay class="cld-video-player"></video>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  mounted: function() {
    console.log("mounted");
    window.addEventListener("load", function(event) {
      var cld = cloudinary.Cloudinary.new({
        cloud_name: "demo"
      });
      var demoplayer = cld.videoPlayer("demo-player").width(600);
      demoplayer.source("race_road_car");
    });
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  display: grid;
  place-items: center;
  height: 80vh;
}
.vue-logo {
  width: 50px;
  height: auto;
}
</style>
