<template>
  <div>
    <header class="site-header">
      <div class="top-header-bar">
        <div class="container">
          <div
            class="row flex-wrap justify-content-center justify-content-lg-between align-items-lg-center"
          >
            <!-- .col -->
          </div>
          <!-- .row -->
        </div>
        <!-- .container -->
      </div>
      <!-- .top-header-bar -->

      <div class="nav-bar">
        <div class="container">
          <div class="row">
            <div class="col-12 d-flex flex-wrap justify-content-between align-items-center">
              <div class="site-branding d-flex align-items-center">
                <router-link to="/" style="text-decoration: none;">
                  <h1 id="logo" style="color: black;">
                    <b>demo</b>
                  </h1>
                </router-link>
              </div>
              <!-- .site-branding -->

              <nav class="site-navigation d-flex justify-content-end align-items-center">
                <ul
                  class="d-flex flex-column flex-lg-row justify-content-lg-end align-content-center"
                >
                  <li>
                    <router-link to="/">Home</router-link>
                  </li>
                  <li>
                    <router-link to="/venue/home">Example Venue</router-link>
                  </li>
                  <li v-if="this.$store.state.loggedIn == false">
                    <router-link to="/purchase">Book now</router-link>
                  </li>
                  <!-- <li>
                    <router-link to="/report">Report</router-link>
                  </li>
                  <li v-if="this.$store.state.loggedIn == false">
                    <router-link to="/login">Login</router-link>
                  </li>
                  <li v-if="this.$store.state.loggedIn == true" @click.prevent="logOut">
                    <router-link to="/">Logout</router-link>
                  </li> -->
                </ul>
              </nav>
              <!-- .site-navigation -->
              <!-- .hamburger-menu -->
            </div>
            <!-- .col -->
          </div>
          <!-- .row -->
        </div>
        <!-- .container -->
      </div>
      <!-- .nav-bar -->
    </header>
  </div>
</template>

<script>
import axios from "axios";

export default {
  // created() {
  //   axios
  //     .get("http://localhost:3000/api/v1/created")
  //     .then((response) => console.log(response));
  // },
  methods: {
    logOut() {
      this.$store.commit("logOut");
    },
  },
};
</script>

<style scoped>
header {
  border-bottom: 10px solid black
}

#logo:hover {
  color: red;
  text-decoration: none;
}


</style>