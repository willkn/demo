<template>
  <div>
    <!-- Header Section -->
    <carousel class="carousel">
      <slide>
        <div class="blog__slider__item">
          <img src="@/images/eco.png" alt />
        </div>
      </slide>
      <slide>
        <div class="blog_slider_item">
          <img src="@/images/bi-buildings.png" />
        </div>
      </slide>
      <slide>
        <div>
          <img src="@/images/miami.png" />
        </div>
      </slide>
      <slide>
        <div>
          <img src="@/images/chicago.png" />
        </div>
      </slide>
    </carousel>
    <!-- Header Section end -->

    <!-- Blog Page -->
    <div class="blog__single__page">
      <article class="blog__article">
        <div class="blog__container">
          <div class="blog__header">
            <div class="blog__cata">Public Consultation</div>
            <h2 class="blog__single__title">Rooley Heights</h2>
            <div class="blog__metas">
              <div class="blog__meta">January 4th, 2019 - January 29th, 2019</div>
              <h3 style="margin-top: 100px;">
                <b>PROPOSAL</b>
              </h3>
            </div>
          </div>
          <p>As am hastily invited settled at limited civilly fortune me. Really spring in extent an by. Judge but built gay party world. Of so am he remember although required. Bachelor unpacked be advanced at. Confined in declared marianne is vicinity.</p>
          <p>Sussex result matter any end see. It speedily me addition weddings vicinity in pleasure. Happiness commanded an conveying breakfast in. Regard her say warmly elinor. Him these are visit front end for seven walls. Money eat scale now ask law learn. Side its they just any upon see last. He prepared no shutters perceive do greatest. Ye at unpleasant solicitude in companions interested.</p>
        </div>
        <div class="imageContainer">
          <img src="@/images/drawing_Collage.jpg" style="width: 50%;" />
          <img src="@/images/floorplan.png" style="width: 50%" />
        </div>
        <div class="blog__container">
          <h3 style="margin-top: 100px;">
            <b>DRAWINGS</b>
          </h3>
          <p>As am hastily invited settled at limited civilly fortune me. Really spring in extent an by. Judge but built gay party world. Of so am he remember although required. Bachelor unpacked be advanced at. Confined in declared marianne is vicinity.</p>
          <p>Sussex result matter any end see. It speedily me addition weddings vicinity in pleasure. Happiness commanded an conveying breakfast in. Regard her say warmly elinor. Him these are visit front end for seven walls. Money eat scale now ask law learn. Side its they just any upon see last. He prepared no shutters perceive do greatest. Ye at unpleasant solicitude in companions interested.</p>
        </div>

        <div class="row">
          <div class="col-sm-6 imageContainer">
            <img
              src="@/images/mit.png"
              style="width: 100%; margin-right: -30px; margin-bottom: -10px;"
            />
          </div>
          <div class="col-sm-6">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfj-ciHaRekjnO8GEHTWnmTLfs1oya0_RaVAR2I9gmLGmCaSg/viewform?embedded=true"
              width="640"
              height="620"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
            >Loading…</iframe>
          </div>
        </div>
        <div class="blog__banner pt-4 pb-5">
          <img src="img/blog-single/banner.jpg" alt />
        </div>
        <div class="blog__container">
          <h4>LANDSCAPING</h4>
          <p>As am hastily invited settled at limited civilly fortune me. Really spring in extent an by. Judge but built gay party world. Of so am he remember although required. Bachelor unpacked be advanced at. Confined in declared marianne is vicinity.</p>
          <p>Sussex result matter any end see. It speedily me addition weddings vicinity in pleasure. Happiness commanded an conveying breakfast in. Regard her say warmly elinor. Him these are visit front end for seven walls. Money eat scale now ask law learn. Side its they just any upon see last. He prepared no shutters perceive do greatest. Ye at unpleasant solicitude in companions interested.</p>
        </div>
        <div class="blog__container post__footer">
          <div class="row">
            <div class="col-md-6">
              <div class="post__tags">
                <a href="#">Camera</a>
                <a href="#">Photography</a>
                <a href="#">Tips</a>
              </div>
            </div>
            <div class="col-md-6">
              <div class="post__share">
                <span>Share:</span>
                <a href="#">
                  <i class="fa fa-facebook"></i>
                </a>
                <a href="#">
                  <i class="fa fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fa fa-linkedin"></i>
                </a>
                <a href="#">
                  <i class="fa fa-instagram"></i>
                </a>
                <a href="#">
                  <i class="fa fa-youtube-play"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="blog__container comment__area">
          <h2>Leave some feedback</h2>
          <p>Give some feedback on the project - whether that be good, bad or simply a suggestion!</p>
          <form class="comment__form">
            <div class="row">
              <div class="col-lg-6">
                <input type="text" placeholder="Name" />
              </div>
              <div class="col-lg-6">
                <input type="text" placeholder="Email" />
              </div>
              <div class="col-lg-12">
                <textarea placeholder="Message"></textarea>
                <button class="site-btn">Send Message</button>
              </div>
            </div>
          </form>
        </div>
        <div class="container recent__post">
          <div class="text-center">
            <a href=":mailto williamknott00@gmail.com">
              <h4>Request a hard copy</h4>
            </a>
          </div>
        </div>
      </article>
    </div>
    <!-- Blog Page end -->

    <!-- Footer Section -->
    <footer class="footer__section">
      <div class="container">
        <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
        <div class="footer__copyright__text">
          <p>
            Copyright &copy;All rights reserved | This template is made with
            <i
              class="fa fa-heart"
              aria-hidden="true"
            ></i> by
            <a href="https://colorlib.com" target="_blank">Colorlib</a>
          </p>
        </div>
        <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
      </div>
    </footer>
    <!-- Footer Section end -->
  </div>
</template>

<script>
import Comment from "@/components/Comment";
import Form from "@/components/Form";
import Poll from "@/components/Poll";
import "../assets/boto/css/style.css";

export default {
  components: {
    Comment,
    Form,
    Poll,
  },
  data() {
    return {
      question: "Why do you feel so down?",
      answers: [
        { value: 1, text: "one", votes: 53 },
        { value: 2, text: "two", votes: 35 },
        { value: 3, text: "three", votes: 30 },
        { value: 4, text: "four", votes: 10 },
      ],
    };
  },
};
</script>

<style scoped>
h2 {
  color: black;
}

img {
  height: 700px;
  width: 800px;
}

.carousel {
  margin-top: 100px;
}

.imageContainer {
  border: 5px solid black;
}
</style>