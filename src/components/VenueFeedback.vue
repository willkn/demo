<template>
  <div>
    <div class="text-center py-0">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-md-12">
            <a
              href="https://www.togetherhousing.co.uk"
              target="_blank"
            >
              <img
                class="d-block rounded-0 img-fluid py-0 pt-0 float-left"
                src="@/assets/assets/styleguide/together-housing.png"
                alt="Card image cap"
                width="250"
                style="margin-top: 50px"
              />
            </a>
            <VenueNavbar></VenueNavbar>
          </div>
        </div>
      </div>
    </div>
    <div class="py-0" style="margin-top: 50px">
      <div class="container">
        <div class="row">
          <div class="text-center mx-auto col-md-12">
            <h2
              style="text-align: left; color: rgb(44, 62, 80)"
              class="m-0 pt-3"
            >
              <b class="w-75">Feedback&nbsp;</b><br />
              <br />
            </h2>
          </div>
        </div>
      </div>
    </div>
    <div class="py-0" style="">
      <div class="container">
        <div class="row">
          <div class="col-md-12 border-top-0" style="text-align: left">
            <p class="lead text-body" style="text-align: center;">
              <i>
                <b
                  >Communication with the community helps us improve our
                  project. Let us know how you feel about the project below.</b
                >
                <br />
              </i>
            </p>
            <!-- <h6 style="color: black; text-align: center;">
              <b>
                <i
                  >Email <a style="color: blue" href="mailto:campsall@devcom.land?subject=Campsall Public Consultation">campsall@devcom.land</a> if you require any information or
                  want to have a detailed talk with one of our
                  representatives</i
                >
              </b>
            </h6> -->
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSds6UjhgPaYAPQPr-pyJ2vgUMuDHHAQjU1CXxdg7pSHGUnU_w/viewform?usp=sf_link" 
              width="1040"
              height="1600"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
              >Loading…</iframe
            >
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
import Navbar from "@/components/VenueNavbar";
import VenueNavbar from '@/components/VenueNavbar.vue'


export default {
  components: {
    Navbar,
    VenueNavbar
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