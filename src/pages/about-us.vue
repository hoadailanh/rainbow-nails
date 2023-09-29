<template>
  <div class="about">
    <h1>Welcome to Rainbow Nails!</h1>
    <div class="row">
      <div class="image-column"><img src="@/assets/welcome.png" ></div>
      <div class="description-column">
        <strong>Welcome to Rainbow Nails - Where Elegance Meets Excellence!</strong>
        <p>At Rainbow Nails, we're more than just a nail salon; we're a sanctuary of beauty, relaxation, and self-care.
          Step into our world of indulgence and pampering, where your comfort and satisfaction are our top priorities.</p>
        <p><strong>Why Choose Us?</strong></p>
        <p>✨ <strong>Experienced Nail Artisans:</strong> Our talented team of nail artisans are masters in their craft,
          creating stunning nail designs and providing impeccable nail care. Your hands and feet are in expert hands!</p>
        <p>💅 <strong>A Wide Range of Services:</strong> From classic manicures and pedicures to trendy nail art, nail
          extensions, and soothing spa treatments, we offer a comprehensive menu of services to suit your every nail need.
        </p>
        <p>🌟 <strong>Top-Quality Products:</strong> We use only the finest nail products and polishes to ensure
          long-lasting, vibrant, and healthy nails. Your nails deserve the best, and that's exactly what we provide.</p>
        <p>🌸 <strong>Relaxing Atmosphere:</strong> Our salon is designed to be a haven of relaxation. Enjoy a serene
          ambiance, soothing music, and a friendly team dedicated to making your visit a memorable experience.</p>
        <p>💎 <strong>Hygiene and Safety:</strong> Your health and safety are of utmost importance to us. We maintain
          rigorous hygiene standards and follow best practices to ensure a safe and clean environment.</p>
        <p>🌞 <strong>Unwind and Rejuvenate:</strong> Let go of the stresses of everyday life and treat yourself to a
          moment of pure indulgence. You'll leave our salon feeling refreshed, confident, and ready to conquer the world.
        </p>
        <p><strong>Discover Your Perfect Nail Experience Today!</strong></p>
        <p>Explore our website to learn more about our <a href="/our-services">services</a> and <a href="tel:9057020301"
            class="phone">call us</a> today to book an appointment. We can't wait to welcome you to Rainbow Nails and help
          you discover the beauty and relaxation you deserve.</p>
        <p>Thank you for choosing us as your nail salon destination. Your journey to fabulous nails and a rejuvenated
          spirit begins here.</p>
        <p><strong>Rainbow Nails - Where Beauty Blossoms and Confidence Shines!</strong></p>
      </div>
    </div>
    <div class="row">
      <div class="image-column">
        <Awards />
      </div>
      <div class="description-column">
        <Review />
      </div>
    </div>
  </div>
</template>

<script>
import Review from '../components/Reviews.vue'
import Awards from '../components/Awards.vue'

export default {
  name: 'AboutUs',
  components: {
    Review,
    Awards
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.about {
  height: 100%;
}

img {
  object-fit: cover;

}

p {
  margin-top: 8px;
}

.row {
  margin: 20px 0;
}

.image-column {
  display: flex;
  flex-direction: column;
  text-align: justify;
  gap: 10px;

}

.description-column {

  flex: 1;
  text-align: justify;
}

@media only screen and (min-width: 1500px) {
  .row {
    display: flex;
    gap: 20px;
  }
  img {
    width: 100%;
    height: 520px;
  }
  .image-column {
    width: 400px;
  }
  .description-column {
    width: 70%;
  }

}

@media only screen and (max-width: 1500px) {
  .row {
    display: flex;
    gap: 20px;
  }
  img {
    width: 100%;
    height: 600px;
  }

  .image-column {
    width: 300px;
  }
  .description-column {
    width: 60%;
  }

}

@media only screen and (max-width: 900px) {
  .row {
    display: flex;
    flex-direction: column;
    gap: 20px;

  }

  .image-column, .description-column {
    width: 100%;
  }

  img {
    width: 100%;
     height: 520px;
  }
}
</style>
