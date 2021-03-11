<template>
  <div>
    <div class="page-header">
      <div class="container">
        <div class="row">
          <!-- .col -->
        </div>
        <!-- .row -->
      </div>
      <!-- .container -->
    </div>
    <!-- .page-header -->

    <div class="featured-cause">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-heading">
              <h2 class="entry-title" style="margin-top: 40px;">PACKAGES</h2>
            </div>
            <!-- .section-heading -->
            <p>
              <i>All packages fill legal obligations for public consultations</i>
            </p>
          </div>
          <!-- .col -->
        </div>
        <!-- .row -->

        <div class="row">
          <div class="col-12 col-lg-6">
            <div class="cause-wrap d-flex flex-wrap justify-content-between">
              <figure class="m-0">
                <img src="@/images/miami.png" style="height: 300px; width: 240px;" alt />
              </figure>

              <div class="cause-content-wrap">
                <header class="entry-header d-flex flex-wrap align-items-center">
                  <h3 class="entry-title w-100 m-0">
                    <a href="#">Standard Package</a>
                  </h3>
                  <!-- .cats-links -->
                </header>
                <!-- .entry-header -->

                <div class="entry-content">
                  <ul>
                    <li>
                      <p>Virtual consultation venue for two weeks</p>
                    </li>
                    <li>
                      <p>Custom made project showcase</p>
                    </li>
                    <li>
                      <p>Comments section for public input</p>
                    </li>
                  </ul>
                </div>
                <!-- .entry-content -->

                <div class="entry-footer mt-5">
                  <a
                    @click.prevent="addToCart('1')"
                    class="btn gradient-bg mr-2"
                    style="color: white"
                  >Add to cart</a>
                </div>
                <!-- .entry-footer -->
              </div>
              <!-- .cause-content-wrap -->

              <div class="fund-raised w-100">
                <!-- .fund-raised-bar -->

                <div
                  class="fund-raised-details d-flex flex-wrap justify-content-between align-items-center"
                >
                  <!-- .fund-raised-goal -->
                </div>
                <!-- .fund-raised-details -->
              </div>
              <!-- .fund-raised -->
            </div>
            <!-- .cause-wrap -->
          </div>
          <!-- .col -->

          <div class="col-12 col-lg-6">
            <div class="cause-wrap d-flex flex-wrap justify-content-between">
              <figure class="m-0">
                <img src="@/images/chicago.png" style="height: 300px; width: 240px;" alt />
              </figure>

              <div class="cause-content-wrap">
                <header class="entry-header d-flex flex-wrap align-items-center">
                  <h3 class="entry-title w-100 m-0">
                    <a href="#">Gold Package</a>
                  </h3>
                  <!-- .cats-links -->
                </header>
                <!-- .entry-header -->

                <div class="entry-content">
                  <ul>
                    <li>
                      <p>All Standard Package services included</p>
                    </li>
                    <li>
                      <p>Letter dropping service to local area</p>
                    </li>
                    <li>
                      <p>Consultation venue available for 20 days</p>
                    </li>
                  </ul>
                </div>
                <!-- .entry-content -->

                <div class="entry-footer mt-5" style="height: 115px;">
                  <a
                    @click.prevent="addToCart('2')"
                    class="btn gradient-bg mr-2"
                    style="color: white"
                  >Add to cart</a>
                </div>
                <!-- .entry-footer -->
              </div>
              <!-- .cause-content-wrap -->
            </div>
            <!-- .cause-wrap -->
          </div>
          <!-- .col -->
        </div>
        <!-- .row -->
      </div>
      <!-- .container -->
    </div>
    <!-- .featured-cause -->

    <div class="our-causes pt-0">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 col-lg-12">
            <div class="cause-wrap">
              <h1>Payment</h1>

              <div
                class="figure-overlay d-flex justify-content-center align-items-center position-absolute w-100 h-100"
              >
                <a
                  href="#"
                  class="btn gradient-bg mr-2"
                  style="margin-top: 30%;"
                  @click.prevent="createOrder"
                >Order now</a>
              </div>
              <!-- .figure-overlay -->

              <div class="cause-content-wrap">
                <header class="entry-header d-flex flex-wrap align-items-center">
                  <h3 class="entry-title w-100 m-0">
                    <a>Items</a>
                  </h3>
                  <p style="margin-left: 25%;">
                    <i>Payments are to be made after the consultation has concluded</i>
                  </p>
                  <ul style="margin-top: 50px; margin-left: 30%; text-align: left">
                    <div v-if="standardPackGetter">
                      <li>Standard Package £350</li>
                      <ul>
                        <li>
                          <p>Virtual consultation venue for two weeks</p>
                        </li>
                        <li>
                          <p>Custom made project showcase</p>
                        </li>
                        <li>
                          <p>Comments section for public input</p>
                        </li>
                      </ul>
                    </div>
                    <div v-if="goldPackGetter">
                      <li>Gold Package £425</li>
                      <ul>
                        <li>
                          <p>All Standard Package services included</p>
                        </li>
                        <li>
                          <p>Letter dropping service to local area</p>
                        </li>
                        <li>
                          <p>Consultation venue available for 20 days</p>
                        </li>
                      </ul>
                    </div>
                  </ul>
                </header>
                <!-- .entry-header -->
                <p>Total: {{ this.price }}</p>
                <!-- .entry-content -->
                <!-- .fund-raised-bar -->

                <div
                  class="fund-raised-details d-flex flex-wrap justify-content-between align-items-center"
                >
                  <!-- .fund-raised-goal -->
                </div>
                <!-- .fund-raised-details -->
              </div>
              <!-- .fund-raised -->
            </div>
            <!-- .cause-content-wrap -->
          </div>
          <!-- .cause-wrap -->
        </div>
        <!-- .col -->
      </div>
    </div>
  </div>
  <!-- .footer-bar -->
  <!-- .site-footer -->
</template>

<script>
export default {
  data () {
    return {
      package: ""
    }
  },
  methods: {
    addToCart(item) {
      if (item == "1") {
        this.package = "standard"
        this.$store.commit("addStandardPack");
        this.$store.commit("removeGoldPack");
      } else if (item == "2") {
        this.package = "gold"
        this.$store.commit("addGoldPack");
        this.$store.commit("removeStandardPack");
      }
    },
    createOrder () {
      axios.post("http://locahost:3000/createorder", {
        package: this.package
      // Sort the rest when credentials are sorted
      })
    }
  },
  computed: {
    standardPackGetter: function () {
      return this.$store.state.standard;
    },
    goldPackGetter: function () {
      return this.$store.state.gold;
    },
    price: function () {
      if (
        this.$store.state.standard == false &&
        this.$store.state.gold == false
      ) {
        return "£0.00";
      } else if (this.$store.state.standard == true) {
        return "£350.00";
      } else if (this.$store.state.gold == true) {
        return "£425.00";
      }
    },
  },
};
</script>

<style>
</style>