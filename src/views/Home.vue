<template>
  <div class="home">
    <div class="swiper-container hero-slider">
      <div class="swiper-wrapper">
        <div class="swiper-slide hero-content-wrap">
          <img src="@/images/SmartBuilding.jpg" alt />

          <div class="hero-content-overlay position-absolute w-100 h-100">
            <div class="container h-100">
              <div class="row h-100">
                <div
                  class="col-12 col-lg-8 d-flex flex-column justify-content-center align-items-start"
                >
                  <header class="entry-header">
                    <h1>Virtual Public Consultations</h1>
                  </header>
                  <!-- .entry-header -->

                  <div class="entry-content mt-4">
                    <p style="color: white">
                      Public Consultations are expensive, time consuming and
                      inefficient. Virtual Public Consultations change that! We
                      offer a high quality of service at 1/4 the price.
                    </p>
                  </div>
                  <!-- .entry-content -->

                  <footer
                    class="entry-footer d-flex flex-wrap align-items-center mt-5"
                  >
                    <router-link to="/purchase" class="btn gradient-bg mr-2"
                      >Book now</router-link
                    >
                  </footer>
                  <!-- .entry-footer -->
                </div>
                <!-- .col -->
              </div>
              <!-- .row -->
            </div>
            <!-- .container -->
          </div>
          <!-- .hero-content-overlay -->
        </div>
        <!-- .hero-content-wrap -->
      </div>
      <!-- .swiper-wrapper -->

      <div class="pagination-wrap position-absolute w-100">
        <div class="container"></div>
        <!-- .container -->
      </div>
      <!-- .pagination-wrap -->
    </div>
    <!-- .hero-slider -->

    <div class="home-page-icon-boxes">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 col-lg-4 mt-4 mt-lg-0">
            <a href="#howitworks">
              <div class="icon-box">
                <figure class="d-flex justify-content-center">
                  <img src="@/images/hands-gray.png" alt />
                  <img src="@/images/hands-white.png" alt />
                </figure>

                <header class="entry-header">
                  <h3 class="entry-title">Why choose us?</h3>
                </header>

                <div class="entry-content">
                  <p>
                    We have worked with clients on designing the perfect Public
                    Consultation experience, for both clients and the public.
                  </p>
                </div>
              </div>
            </a>
          </div>

          <div class="col-12 col-md-6 col-lg-4 mt-4 mt-lg-0">
            <a href="#pricing">
              <div class="icon-box">
                <figure class="d-flex justify-content-center">
                  <img src="@/images/donation-gray.png" alt />
                  <img src="@/images/donation-white.png" alt />
                </figure>

                <header class="entry-header">
                  <h3 class="entry-title">Pricing</h3>
                </header>

                <div class="entry-content">
                  <p>
                    We have circumvented the need for a venue to host the
                    consultation, allowing us to offer the *best* prices.
                  </p>
                </div>
              </div>
            </a>
          </div>

          <div class="col-12 col-md-6 col-lg-4 mt-4 mt-lg-0">
            <a href="#howitworks">
              <div class="icon-box">
                <figure class="d-flex justify-content-center">
                  <img src="@/images/charity-gray.png" alt />
                  <img src="@/images/charity-white.png" alt />
                </figure>

                <header class="entry-header">
                  <h3 class="entry-title">Complete Package</h3>
                </header>

                <div class="entry-content">
                  <p>
                    We offer a start to finish consultation package, from
                    hosting the consultation to local letter drops.
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <!-- .row -->
      </div>
      <!-- .container -->
    </div>
    <!-- .home-page-icon-boxes -->

    <div class="home-page-welcome" style='background: url("@/images/1.jpg") no-repeat-center;'>
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-6 order-2 order-lg-1">
            <div class="welcome-content">
              <header class="entry-header">
                <h2 class="entry-title" id="howitworks">How does it work?</h2>
              </header>
              <!-- .entry-header -->

              <div class="entry-content mt-5">
                <p style="text-align: left; color: white">
                  We take your drawings, images and writings and convert it into
                  a elegant page which tells the public everything they need to
                  know about your project. Then, we host the page on our server
                  with your own personal URL, allowing the public to access the
                  site easily. The URL can be converted to a QR code for letter
                  drops. All of this fulfills your legal obligations, while
                  doing so at less than a quarter of the average price!
                </p>
                <p style="color: white">
                  We allow you to start a dialog with the community, responding
                  to feedback and even asking questions of your own. All
                  conversations are stored on our server and returned to you at
                  the end of the consultation for presentation in proposals.
                </p>
                <ul style="text-align: left">
                  <li>
                    <p style="color: white">
                      Less than a quarter of the usual price
                    </p>
                  </li>
                  <li>
                    <p style="color: white">
                      The public look favourably on the project due to the
                      excellent presentation
                    </p>
                  </li>
                  <li>
                    <p style="color: white">Legal obligations fulfilled</p>
                  </li>
                </ul>
                <p style="text-align: left; color: white">
                  After the consultation has concluded, we will send you a
                  custom report including all the metrics from your venue such
                  as how many are in favour/against your project. Again, the
                  metrics we put in the report are completely up to you. This
                  allows you to present an airtight case as to why your project
                  should get the green light.
                </p>
              </div>
              <!-- .entry-content -->
              <!-- .entry-footer -->
            </div>
            <!-- .welcome-content -->
          </div>
          <!-- .col -->

          <div class="col-12 col-lg-6 mt-4 order-1 order-lg-2">
            <img src="@/images/architecture.jpg" alt="welcome" />
          </div>
          <!-- .col -->
        </div>
        <!-- .row -->
      </div>
      <!-- .container -->
    </div>
    <!-- .home-page-icon-boxes -->

    <div class="home-page-welcome">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-6 order-2 order-lg-1">
            <div class="welcome-content">
              <header class="entry-header">
                <h2 class="entry-title" id="howitworks">After-event Report</h2>
              </header>
              <!-- .entry-header -->

              <div class="entry-content mt-5">
                <p style="text-align: left; color: white">
                  Throughout the event we gather comments, poll results,
                  feedback and more from the public. When the event has
                  concluded we compile the data into a beautiful report that
                  tells you everything you need to know about the community's
                  feelings towards your project.
                </p>
                <p style="text-align: left; color: white">
                  The excellent thing about the report is that the data is
                  returned pre-visualised, meaning you can skip all the boring
                  conversion of data into graphs and get straight into working
                  on the proposal.
                </p>
              </div>
              <!-- .entry-content -->

              <div class="entry-footer mt-5">
                <router-link to="/report" class="btn gradient-bg mr-2"
                  >Read More</router-link
                >
              </div>
              <!-- .entry-footer -->
            </div>
            <!-- .welcome-content -->
          </div>
          <!-- .col -->

          <div class="col-12 col-lg-6 mt-4 order-1 order-lg-2">
            <img src="@/images/graph.png" alt="welcome" />
          </div>
          <!-- .col -->
        </div>
        <!-- .row -->
      </div>
      <!-- .container -->
    </div>
    <!-- .home-page-icon-boxes -->

    <div class="home-page-events">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-6">
            <div class="upcoming-events">
              <div class="section-heading">
                <h2 class="entry-title" id="pricing">Pricing</h2>
              </div>
              <!-- .section-heading -->

              <div class="event-wrap d-flex flex-wrap justify-content-between">
                <div class="event-content-wrap">
                  <header
                    class="entry-header d-flex flex-wrap align-items-center"
                  >
                    <h3 class="entry-title w-100 m-0">
                      <a href="#">Standard package</a>
                      <br />
                      <a href="#">£350</a>
                    </h3>
                  </header>
                  <!-- .entry-header -->

                  <div class="entry-content" style="text-align: left">
                    <p class="m-0">The Standard Package includes:</p>
                    <ul>
                      <li>Virtual consultation venue for 2 weeks</li>
                      <li>Custom made project showcase</li>
                      <li>Comments section for public input</li>
                    </ul>
                  </div>
                  <!-- .entry-content -->

                  <div class="entry-footer">
                    <router-link to="/purchase">Purchase</router-link>
                  </div>
                  <!-- .entry-footer -->
                </div>
                <!-- .event-content-wrap -->
              </div>
              <!-- .event-wrap -->

              <div class="event-wrap d-flex flex-wrap justify-content-between">
                <div class="event-content-wrap">
                  <header
                    class="entry-header d-flex flex-wrap align-items-center"
                  >
                    <h3 class="entry-title w-100 m-0">
                      <a href="#">Gold Package</a>
                      <br />
                      <a href="#">£425</a>
                    </h3>
                    <!-- .cats-links -->
                  </header>
                  <!-- .entry-header -->

                  <div class="entry-content" style="text-align: left">
                    <p class="m-0">The Gold Package includes:</p>
                    <ul>
                      <li>Everything in the Standard Package.</li>
                      <li>Local letter drop</li>
                    </ul>
                  </div>
                  <!-- .entry-content -->

                  <div class="entry-footer">
                    <router-link to="/purchase">Purchase</router-link>
                  </div>
                  <!-- .entry-footer -->
                </div>
                <!-- .event-content-wrap -->
              </div>
              <!-- .event-wrap -->

              <!-- .event-wrap -->
            </div>
            <!-- .upcoming-events -->
          </div>
          <!-- .col -->

          <div class="col-12 col-lg-6">
            <div class="featured-cause">
              <!-- .section-heading -->

              <div class="cause-wrap d-flex flex-wrap justify-content-center">
                <div class="cause-content-wrap">
                  <header
                    class="entry-header d-flex flex-wrap align-items-center"
                  >
                    <h3 class="entry-title w-100 m-0">
                      <a href="#">Cost of an offline Public Consultation</a>
                    </h3>
                  </header>
                  <div class="entry-content" style="color: black">
                    <h1 class="m-0">£2000+</h1>
                    <br />
                    <ul style="text-align: left">
                      <li>Venue ~£500</li>
                      <li>Salaries ~£1000</li>
                      <li>Travel expenses ~£100</li>
                      <li>Hotel rooms ~£400</li>
                      <li>Catering ~£200</li>
                    </ul>
                  </div>
                  <!-- .entry-content -->

                  <div class="entry-footer mt-5">
                    <a href="#" class="btn gradient-bg mr-2">Book Now</a>
                  </div>
                  <!-- .entry-footer -->
                </div>
                <!-- .cause-content-wrap -->
              </div>
              <!-- .cause-wrap -->
            </div>
            <!-- .featured-cause -->
          </div>
          <!-- .col -->
        </div>
        <!-- .row -->
      </div>
      <!-- .container -->
    </div>
    <!-- .home-page-events -->

    <footer class="site-footer">
      <div class="footer-widgets">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-6 col-lg-3 mt-5 mt-md-0">
              <h2>Useful Links</h2>

              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Book</a>
                </li>
              </ul>
            </div>
            <!-- .col -->

            <div class="col-12 col-md-6 col-lg-3 mt-5 mt-md-0">
              <div class="foot-contact">
                <h2>Contact</h2>

                <!-- <ul>
                  <li>
                    <i class="fa fa-phone"></i>
                    <span>+44 07593 423440</span>
                  </li>
                  <li>
                    <i class="fa fa-envelope"></i>
                    <span>williamknott00@gmail.com</span>
                  </li>
                </ul> -->
              </div>
              <!-- .search-widget -->
            </div>
            <!-- .col -->
          </div>
          <!-- .row -->
        </div>
        <!-- .container -->
      </div>
      <!-- .footer-widgets -->

      <div class="footer-bar">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <p class="m-0">
                <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                Copyright &copy;
                <i class="fa fa-heart-o" aria-hidden="true"></i> by
                <a href="https://colorlib.com" target="_blank">Colorlib</a>
                <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
              </p>
            </div>
            <!-- .col-12 -->
          </div>
          <!-- .row -->
        </div>
        <!-- .container -->
      </div>
      <!-- .footer-bar -->
    </footer>
    <!-- .site-footer -->
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
