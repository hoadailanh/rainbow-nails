<template>
    <div>
      <div class='content-wrapper'>
        <h1>Contact Us</h1>
        <div class='row'>
          <div class='address-column'>
              <div class="address-section">
                <div class='section-header'>
                  Address
                </div>
                <div class="section-content">
                  310 Guelph St #3, Georgetown, ON L7G 4B1
                </div>
              </div>

              <div class="address-section">
                <div class='section-header'>
                  Telephone
                </div>
                <div class="section-content">
                  <a href="tel:9057020301">(905) 702 0301</a>
                </div>
              </div>

              <div class="address-section">
                <div class='section-header'>
                  Business Hours
                </div>
                <div class="section-content">
                  <div>Sunday - Closed</div>
                  <div>Monday - Closed</div>
                  <div>Tuesday - 10a.m.–7p.m.</div>
                  <div>Wednesday - 10a.m.–7p.m.</div>
                  <div>Thursday - 10a.m.–7p.m.</div>
                  <div>Friday - 10a.m.–7p.m.</div>
                  <div>Saturday - 10a.m.–5p.m.</div>
                </div>
              </div>

            </div>
          <div class='map-column'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5773.873577557076!2d-79.90260995952102!3d43.64948346315047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b12cae04b7935%3A0x9d897b3529bd3744!2sRainbow%20Nail%20Spa%20%26%20Beauty!5e0!3m2!1sen!2sca!4v1668435998023!5m2!1sen!2sca" height="420" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>

        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'ContactUs'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content-wrapper {
  margin-top: 15px;
}

.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
}

.map-column {
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  text-align: left;
  margin: 15px 0 0 15px;
  width: 70%;
}

.address-column {
  display: flex;
  flex-direction: column;


  text-align: left;
  margin: 15px 15px 0 0;
  width: 30%;
}

.address-section {
  padding: 10px;
  margin-bottom: 10px;
  background-color:rgb(211, 244, 250);
  border-radius: 10px;
}
.section-header {
  font-size: large;
  font-weight: bold;
}

.section-content {
  padding-left: 10px;
}

@media only screen and (max-width: 900px) {

  .map-column {
    width: 100%;
    margin: 0;

  }
  .address-column {
    width: 100%;
    margin: 0;
  }
}

</style>
