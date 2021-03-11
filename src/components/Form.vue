<template>
  <div>
    <div class="row">
      <div class="col-md-4 border border-light">
        <h4 class="font-weight-bold text-center mt-3">General feelings about the project</h4>
        <hr />
        <p class="text-center">Your rating:</p>
        <div class="form-check mb-4">
          <input
            class="form-check-input"
            name="group1"
            type="radio"
            id="radio-179"
            value="option1"
            checked
          />
          <label class="form-check-label" for="radio-179">Very good</label>
        </div>

        <div class="form-check mb-4">
          <input class="form-check-input" name="group1" type="radio" id="radio-279" value="option2" />
          <label class="form-check-label" for="radio-279">Good</label>
        </div>

        <div class="form-check mb-4">
          <input class="form-check-input" name="group1" type="radio" id="radio-379" value="option3" />
          <label class="form-check-label" for="radio-379">Mediocre</label>
        </div>
        <div class="form-check mb-4">
          <input class="form-check-input" name="group1" type="radio" id="radio-479" value="option4" />
          <label class="form-check-label" for="radio-479">Bad</label>
        </div>
        <div class="form-check mb-4">
          <input class="form-check-input" name="group1" type="radio" id="radio-579" value="option5" />
          <label class="form-check-label" for="radio-579">Very bad</label>
        </div>
        <!-- Radio -->

        <hr />
        <div class="survey-footer clearfix">
          <a type="button" class="btn btn-primary waves-effect waves-light" style="background-color: white;">
            Send
            <i class="fa fa-paper-plane ml-1"></i>
          </a>
          <a
            type="button"
            class="btn btn-outline-primary waves-effect float-right"
            data-dismiss="modal"
          >Cancel</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.form-check {
    text-align: left;
}
</style>