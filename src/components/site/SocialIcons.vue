<template>
    <div class="social-icons-container position-absolute d-flex flex-column">
        <a class="d-block" href="https://www.facebook.com/" target="_blank">
            <CircleBtn 
                iconName="Facebook"
                width="67"
                height="68"
            />
        </a>

        <a href="https://www.instagram.com/" target="_blank">
            <CircleBtn 
                iconName="Instagram"
                width="67"
                height="68"
            />
        </a>
    </div>
</template>


<script>
  import CircleBtn from './CircleBtn.vue'

  export default {
    name: 'SocialIcons',
    components: {
        CircleBtn
    }
  }
</script>


<style scoped lang="scss">
    .social-icons-container {
        right: 31px;
        bottom: 39px;

        a:first-child {
            margin: 0 0 20px 0;
        }
    }
</style>