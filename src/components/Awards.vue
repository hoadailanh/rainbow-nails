<template>
    <div class="awars-wrapper">
        <h3>Our Awards</h3>
        <div class="award-column ">
          <img src="@/assets/awards/2.jpg">
          <img src="@/assets/awards/1.jpg">
        </div>
        <div class="award-column ">
          <img src="@/assets/awards/3.jpg">
          <img src="@/assets/awards/4.jpg">
        </div>
    </div>
</template>

<script>

export default {
    name: 'Awards',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.award-column {
  display: flex;
  gap: 5px;
  margin-top: 10px;
}

img {
  /*height = "220" width = "170"*/
  max-width: 50%;
  height: auto;
}

</style>
