<template>
  <div class="main">
    <HeaderBar />
    <div class="content">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import '@splidejs/vue-splide/dist/css/splide.min.css'
import '@splidejs/vue-splide/dist/css/splide-core.min.css'
import '@splidejs/vue-splide/dist/css/themes/splide-default.min.css'
import '@splidejs/vue-splide/dist/css/themes/splide-sea-green.min.css'
import '@splidejs/vue-splide/dist/css/themes/splide-skyblue.min.css'
import HeaderBar from './components/HeaderBar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    HeaderBar,
    Footer
  }
}
</script>

<style>
html {
  font-family: Raleway,sans-serif;
  color: #6d6c6c;
  background-color: rgb(191, 234, 234);
}


h2, h3, h5 {
    letter-spacing: 1px;
    font-weight: 600;
    color: #303030;
    margin: 0;
}


element.style {
}
.about_img h2 {
    font-size: 20px;
}
h2, h1, h3, h4, h5, .title_appointment, .color-main, .title_gift, .list_service optgroup, .in-container-service h4, .price-item-number, .nav-left.stickUp .navbar-nav>li>a:hover, .nav-left.nav-white .navbar-nav>li>a:hover, .service-name {
    color: var(--free_theme_color_1);
}
h1, h2, h3 {
    text-transform: uppercase;
}

*, *::before, *::after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}


@media only screen and (min-width: 1500px) {
  .main {
    width: 1500px;
  }
}

@media only screen and (max-width: 1500px) {
  .main {
    width: 1300px;
  }
}

@media only screen and (max-width: 1300px) {
  .main {
    width: 1100px;
  }
}

@media only screen and (max-width: 1100px) {
  .main {
    width: 1000px;
  }
}

@media only screen and (max-width: 900px) {
  .main {
    width: 100%;
  }
}

.main {
    margin: auto;
    background-color: rgb(248, 252, 252);
  }
.content {
  /*color:rgb(33, 24, 6);*/

  text-align: center;

  margin: 15px 10px;
}

</style>
