<template>
  <div>
    <!-- <Navbar></Navbar> -->
    <div
      class="pt-0 pb-2 text-center shadow-none flex-grow-1"
      style="color: black"
    >
      <div class="text-center py-0" style="background-color: white">
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-md-12">
              <a href="https://www.togetherhousing.co.uk" target="_blank">
                <img
                  style="margin-top: 50px"
                  class="d-block rounded-0 img-fluid py-0 pt-0 float-left"
                  src="@/assets/assets/styleguide/together-housing.png"
                  alt="Card image cap"
                  width="250"
                />
              </a>
              <VenueNavbar></VenueNavbar>
            </div>
          </div>
        </div>
      </div>
      <div class="container border-primary py-0 mt-0">
        <div class="row" style="margin-top: 50px">
          <div class="col-md-6">
            <h2
              style="text-align: left; color: rgb(44, 62, 80)"
              class="m-0 pt-3"
            >
              <b class="w-75">Community Consultation&nbsp;</b><br /><b
                >The Avenue, Campsall</b
              ><br />
            </h2>
            <p class="lead text-justify" style="color: black">
              We are seeking your feedback on our proposals for a residential
              development on the site of the former Campsall and District
              Working Mens Social Club, The Avenue, Campsall. Unfortunately due
              to Covid 19 we are unable to carry out our usual, face to face,
              public consultation so we have prepared this online portal to open
              dialogue with the local community and to enable you to provide
              feedback. We would like to understand your views on the proposals
              prior to finalising our design and submitting for Planning
              Approval. We will aim to accommodate, wherever possible, any
              comments raised. This portal will be open for a period of two
              weeks and will close on Friday 19th March 2021. &nbsp; &nbsp;<br /><br />Together
              Housing Group, in partnership with Esh Construction, are proposing
              to build 19 affordable family homes. The existing site has been
              unused and derelict for several years and the former club has
              fallen into a state of disrepair, becoming a potential focus of
              antisocial behaviour. The homes we are proposing will go some way
              to address the housing shortage in Doncaster, we have liaised with
              DMBC to understand the housing need in the area and our proposed
              mix of 2 and 3 bedroomed family homes go some way to address this.
              We are committed to delivering affordable homes for the benefit of
              the community, our proposals for this development are to provide
              homes for affordable rent which will be managed and maintained by
              Together Housing Group. If Planning Approval is granted, we would
              aim to complete the construction of the homes within approximately
              one year of starting construction works.
            </p>
            <div class="col-md-12"></div>
            <br />
          </div>
          <div class="col-md-6">
            <img
              class="img-fluid d-block rounded p-2"
              src="@/assets/assets/styleguide/Sidew.jpeg"
            />

            <img
              class="img-fluid d-block rounded p-2"
              src="@/assets/assets/styleguide/4249.jpeg"
            />
          </div>
        </div>
        <div class="row"></div>
      </div>
    </div>
    <div class="py-5" style="background-color: #99004c">
      <div class="container">
        <div class="row">
          <div class="col-md-12 w-100">
            <h1 class="mb-3" style="color: white; text-align: left">
              <b>About Together Housing</b>
            </h1>
            <div class="row">
              <div class="col-md-12">
                <p class="text-justify lead w-100" style="color: white">
                  Together Housing Group are one of the largest housing
                  associations in the North of England, managing over 36,000
                  homes across Yorkshire and Lancashire. We are a non-profit
                  organisation, meaning any money we make is invested back into
                  the company for the benefit of our residents and local
                  communities. In addition to providing quality homes to rent,
                  we also build and manage homes for sale through the Shared
                  Ownership scheme. Additionally we provide sheltered
                  accommodation and extra care schemes. Not only do we provide
                  homes, but through our charity, Newground Together, we fund a
                  variety of voluntary and community projects, groups to help
                  improve life and opportunities to work for local people. You
                  can find out more about Together Housing Group by visiting our
                  website
                  <a
                    href="https://www.togetherhousing.co.uk"
                    target="_blank"
                    style="color: blue"
                    ><b>here.</b></a
                  >
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
              Email: info@devcom.land DevCom LTD is a company registered in the
              UK(10495364). Registered at: Orchard View, Hay Green, Sour Lane,
              Fishlake. Doncaster DN7 5JY. VAT registration number: 260297700
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
</template>

<script>
import "@/assets/bootstrap_views/button.css";
import "@/assets/bootstrap_views/aquamarine.css";
import "@/assets/bootstrap_views/wireframe.css";
import "@/assets/bootstrap_views/aquamarine.scss";
import "@/assets/bootstrap_views/wireframe.scss";
import Navbar from "@/components/VenueNavbar";
import VenueNavbar from "@/components/VenueNavbar.vue";

export default {
  components: {
    Navbar,
    VenueNavbar,
  },
};
</script>

<style scoped lang="scss">
@mixin btn-border-drawing(
  $color: #ccc,
  $hover: black,
  $width: 2px,
  $vertical: top,
  $horizontal: left,
  $duration: 0.25s
) {
  box-shadow: inset 0 0 0 $width $color;
  color: $color;
  transition: color $duration $duration/3;
  position: relative;

  &::before,
  &::after {
    border: 0 solid transparent;
    box-sizing: border-box;
    content: "";
    pointer-events: none;
    position: absolute;
    width: 0;
    height: 0;

    #{$vertical}: 0;
    #{$horizontal}: 0;
  }

  &::before {
    $h-side: if($horizontal == "left", "right", "left");

    border-#{$vertical}-width: $width;
    border-#{$h-side}-width: $width;
  }

  &::after {
    $v-side: if($vertical == "top", "bottom", "top");

    border-#{$v-side}-width: $width;
    border-#{$horizontal}-width: $width;
  }

  &:hover {
    color: $hover;

    &::before,
    &::after {
      border-color: $hover;
      transition: border-color 0s, width $duration, height $duration;
      width: 100%;
      height: 100%;
    }

    &::before {
      transition-delay: 0s, 0s, $duration;
    }

    &::after {
      transition-delay: 0s, $duration, 0s;
    }
  }
}

.draw-border {
  @include btn-border-drawing(black, #99004c, 4px, bottom, right);
}

//=== Button styling, semi-ignore
.btn {
  background: none;
  margin: 10px;
  margin-top: 50px;
  width: 200px;
  border: none;
  border-radius: 0px;
  cursor: pointer;
  line-height: 1.5;
  font: 700 1.2rem "Roboto Slab", sans-serif;
  padding: 1em 2em;
  letter-spacing: 0.05rem;

  &:focus {
    outline: 2px dotted #55d7dc;
  }
}

//=== Pen styling, ignore
body {
  background: #1f1a25;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
</style>