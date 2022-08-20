<template>
  <div :style="btnStyles" class="circle-btn fade-in-up">
    <img :src="require(`@/assets/media/img/icons/${iconName}.svg`)" alt="Circle button icon" />
  </div>
</template>


<script>
    export default {
        name: 'CircleBtn',
        props: {
            iconName: String,
            width: String,
            height: String
        },
        data() {
            return {
                btnStyles:  `width: ${this.width}px; height: ${this.height}px`
            }
        }
    }
</script>


<style scoped lang="scss">
    .circle-btn {
        border-radius: 50%;   
        
        img {
            width: 100%;
        }
    }

    @media screen and (max-width: 796px) {
        .circle-btn {
            width: 50px!important;
            height: 50px!important;    
        }
    }
</style>