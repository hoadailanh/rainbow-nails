<template>
  <div class="header">
      <div class="mobile">
        <div class="logo-container">
            <div class="burger-menu">
              <BurgerMenu />
            </div>
            <div class="logo">
              Rainbow Nails
            </div>
            <div>
              <a href="tel:9057020301" class="phone">
                <img src="../assets/phone6.png">
              </a>
            </div>
          </div>
      </div>
      <div class="desktop">
        <div class="logo-container">
          <div class="logo">
            Rainbow Nail <span class="logo-small">Spa & Beauty</span>
          </div>
          <div class="social-links">
            <a href="tel:9057020301" class="phone">905-702-0301</a>
            <a href="https://www.facebook.com/rainbownailspaandbeauty/" target="_blank" class="social-link">
              <img src="../assets/facebook-icon.png">
            </a>
            <a href="https://www.facebook.com/rainbownailspaandbeauty/" target="_blank" class="social-link">
              <img src="../assets/instagram-icon.png">
            </a>
            <a href="https://www.facebook.com/rainbownailspaandbeauty/" target="_blank" class="social-link">
              <img src="../assets/shop-georgetown-icon.png">
            </a>
          </div>
        </div>
        <nav>
          <router-link to="/" class="nav-item" active-class="active-link">Home</router-link>
          <router-link to="/about-us" class="nav-item" active-class="active-link">About Us</router-link>
          <router-link to="/our-services" class="nav-item" active-class="active-link">Our Services</router-link>
          <router-link to="/contact-us" class="nav-item" active-class="active-link">Contact Us</router-link>
        </nav>
    </div>
  </div>
</template>

<script>
import BurgerMenu from './BurgerMenu.vue'
export default {
  name: 'HeaderBar',
  components: {
    BurgerMenu
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.mobile {
  display: none;
}

@media only screen and (max-width: 900px) {
  .mobile {
    display: block;
    .logo-container {
      .logo {
        font-size: 30px;
        padding: 0;
      }
      .phone {
        height: 42px;
        width: 42px;
        margin: 0;
        padding: 0;

      }
    }
  }
  .desktop {
    display: none;
  }
}

.active-link {
  background-color: rgb(248, 252, 252);
}
.header {
  position: sticky;
  top: 0;
  z-index: 1000;
}

.logo-container {
  width: 100%;
  background: linear-gradient(90deg, Red, Orange, Yellow, Green, Blue, Indigo, violet);
  height: 60px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: 600;

  .logo {
    display: inline-block;
    font-size: 50px;
    color: #a05b5b;
    font-family: 'Lucida Handwriting';
    padding-left: 10px;

    .logo-small {
      font-size: 20px;
    }

  }
  .phone {
    display: flex;
    font-weight: bold;
    font-size: 30px;
    padding-right: 15px;
    color: white;
    margin-top: 3px;
  }
}


nav {
  list-style: none;
  display: flex;
  background-color: rgb(233, 233, 238);
}

.social-links {
  list-style: none;
  display: flex;
  padding-right: 10px;
}


.nav-item {
  display: inline-block;
  padding: 10px 15px;
  text-decoration: none;
  color: #362b2b;
  font-size: 20px;
  font-weight: bold;
}

.social-link {
  display: inline-block;
  padding: 10px 5px;
  text-decoration: none;
  color: white;
}

.nav-item:hover {
  background-color: white;
  cursor: pointer;
}

.nav-item:hover {
  color: darkgreen;
}

</style>
