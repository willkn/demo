<template>
  <div class="row" style="width: 100%; color: black">
    <div class="col-md-12 shadow-none" style>
      <router-link to="/">
        <button class="btn draw-border">Home</button></router-link
      >
      <router-link to="/proposals"
        ><button class="btn draw-border">Proposals</button></router-link
      >
      <router-link to="/feedback"
        ><button class="btn draw-border">Feedback</button></router-link
      >
      <a href="campsall.pdf" download>
        <button class="btn draw-border">Download</button>
      </a>
    </div>
  </div>
</template>

<script>
import "@/assets/bootstrap_views/aquamarine.css";
import "@/assets/bootstrap_views/wireframe.css";
import "@/assets/bootstrap_views/aquamarine.scss";
import "@/assets/bootstrap_views/wireframe.scss";
import "../../public/cover_1.jpg";

export default {};
</script>

<style scoped lang="scss">
@mixin btn-border-drawing(
  $color: black,
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
  width: 200px;
  margin: 10px;
  margin-top: 50px;
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