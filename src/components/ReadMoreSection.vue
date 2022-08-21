<template>
  <section class="read-more w-100 min-vh-100 m-0 m-auto p-0 position-relative">
    <div class="side-panel min-vh-100 w-25"></div>

    <div 
      class="section-text position-absolute" 
      :class="{
        'btm-expand': toggleCard, 
        'fade-in-up': !toggleCard
    }">
      <h1 :class="{'d-none': toggleCard}">{{headerText}}</h1>


      <TextCard 
        @update:parent="toggleCard = $event"
        :title="headerText"
        ctaBtnText="More Details"
        cardCtaText="Read More"
        text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? "
      />
    </div>

    <SocialIcons />
  </section>
</template>


<script>
  import TextCard from './site/TextCard.vue'
  import SocialIcons from './site/SocialIcons.vue';

  export default {
    name: 'ReadMoreSection',
    components: {
      TextCard,
      SocialIcons
    },
    props: {
      headerText: String,
      ctaText: String
    },
    data() {
      return {
        toggleCard: false
      }
    }
  }
</script>


<style scoped lang="scss">
  @import "../assets/styles/variables.scss";

  section.read-more {
    background: url('../assets/media/img/bg/Coding-Challenge-Image-Optimized.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .side-panel {
    background: $primary-color;
    max-width: 413px;
  }

  .section-text {
    left: 187px;
    bottom: 234px;

    &.btm-expand {
      bottom: 50px;
    }

    h1 {
      font-family: $font-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 224px;
      line-height: 289px;
      color: $secondary-color;
    }
  }

  @media screen and (max-width: 995px) {
    .section-text {
      left: 12%;
      top: 25%;

      h1 {
        font-size: 180px;
        line-height: 200px;
      }
    }

    .section-text.btm-expand {
      bottom: auto;
      top: 10%;
    }
  }

  @media screen and (max-width: 796px) {
    .section-text {
      left: auto;
      padding: 0 50px;
      top: 25%;

      &.btm-expand {
        bottom: auto;
        top: 10%;
      }

      h1 {
        font-size: 75px;
        line-height: 100px;
      }
    }
  }

  @media screen and (max-width: 595px) {
    .section-text {
      left: auto;
      padding: 25px 15px;
      top: 25%;
      height: 100vh;

      &.btm-expand {
        top: 0;
      }
    }
  }
</style>
