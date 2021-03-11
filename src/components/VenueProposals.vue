<template>
  <div>
    <div class="text-center py-0">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-md-12">
            <a href="https://www.togetherhousing.co.uk" target="blank"
              ><img
                class="d-block rounded-0 img-fluid py-0 pt-0 float-left"
                src="@/assets/assets/styleguide/together-housing.png"
                alt="Card image cap"
                width="250"
                style="margin-top: 50px"
            /></a>
          </div>
        </div>
      </div>
      <VenueNavbar></VenueNavbar>
      <div class="py-0" style="margin-top: 50px">
        <div class="container">
          <div class="row" style="width: 100%">
            <div class="text-center mx-auto col-md-12">
              <h2
                style="text-align: left; color: rgb(44, 62, 80)"
                class="m-0 pt-3"
              >
                <b class="w-75">Proposed Plans and Elevations</b><br /><b
                  >The Avenue, Campsall</b
                ><br />
              </h2>
              <p style="text-align: left">
                Click an image to view it in fullscreen
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4 p-3">
              <img
                v-viewer="{ movable: false }"
                class="img-fluid d-block"
                src="@/assets/assets/styleguide/Download/campsall1-1.png"
                width="500"
              />
              <div class="row">
                <div class="col-md-12">
                  <h4 class="text-center">3 Bedroomed Home</h4>
                </div>
              </div>
            </div>
            <div class="col-md-4 p-3">
              <img
                v-viewer="{ movable: false }"
                class="img-fluid d-block"
                src="@/assets/assets/styleguide/Download/2bed.png"
                width="500"
              />
              <div class="row">
                <div class="col-md-12">
                  <h4 class="text-center">2 Bedroomed Home</h4>
                </div>
              </div>
            </div>
            <div class="col-md-4 p-3">
              <img
                v-viewer="{ movable: false }"
                class="d-block img-fluid"
                src="@/assets/assets/styleguide/Download/streetScene.png"
                width="500"
              />
              <h4 class="text-center">Street Scene</h4>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 p-3">
              <img
                v-viewer="{ movable: false }"
                id="myImg"
                class="img-fluid d-block"
                src="@/assets/assets/styleguide/Layout.png"
              />
            </div>
            <div id="myModal" class="modal">
              <span class="close">&times;</span>
              <img class="modal-content" id="img01" />
              <div id="caption"></div>
            </div>
          </div>
          <div class="py-5" style="background-color: #99004c">
            <div class="container">
              <div class="row">
                <div class="col-md-12 w-100">
                  <h1 class="mb-3" style="color: white; text-align: left">
                    <b>Our Proposals</b>
                  </h1>
                  <div class="row">
                    <div class="col-md-12">
                      <p class="text-justify lead w-100" style="color: white">
                        Together Housing Group, in partnership with Esh
                        Construction, are proposing to build 19 affordable
                        family homes. The existing site has been unused and
                        derelict for several years and the former club has
                        fallen into a state of disrepair, becoming a potential
                        focus of antisocial behaviour. The homes we are
                        proposing will go some way to address the housing
                        shortage in Doncaster, we have liaised with DMBC to
                        understand the housing need in the area and our proposed
                        mix of 2 and 3 bedroomed family homes go some way to
                        address this. We are committed to delivering affordable
                        homes for the benefit of the community, our proposals
                        for this development are to provide homes for affordable
                        rent which will be managed and maintained by Together
                        Housing Group. If Planning Approval is granted, we would
                        aim to complete the construction of the homes within
                        approximately one year of starting construction works.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="py-0">
            <div class="container">
              <div class="row">
                <a
                  href="https://www.eshgroup.co.uk/about-esh-construction/new-build-and-refurbishment/"
                >
                  <div class="col-md-12 p-0">
                    <img
                      class="d-block img-fluid mx-auto"
                      src="@/assets/assets/styleguide/Esh-Living.png"
                      width="350"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div class="py-3">
            <div class="container">
              <div class="row">
                <div class="col-md-12 text-center">
                  <p>
                    Email: info@devcom.land DevCom LTD is a company registered
                    in the UK(10495364). Registered at: Orchard View, Hay Green,
                    Sour Lane, Fishlake. Doncaster DN7 5JY. VAT registration
                    number: 260297700
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 text-center">
                  <p class="mb-0"><i>© 2021 DevCom Ltd</i></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/bootstrap_views/aquamarine.css";
import "@/assets/bootstrap_views/wireframe.css";
import "@/assets/bootstrap_views/aquamarine.scss";
import "@/assets/bootstrap_views/wireframe.scss";
import "viewerjs/dist/viewer.css";
import Viewer from "v-viewer";
import Navbar from "@/components/VenueNavbar";
import Modal from "./Modal.vue";
import Vue from "vue";
// import Navbar from './Navbar.vue';
import VenueNavbar from '@/components/VenueNavbar.vue'

Vue.use(Viewer);

export default {
  components: {
    Navbar,
    Modal,
    Navbar,
    VenueNavbar
  },
};
</script>

<style scoped>

</style>