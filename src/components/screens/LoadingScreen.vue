<template>
    <div id="loading-container" class="d-flex justify-content-center align-items-center min-vw-100 min-vh-100">
        <div id="spinner" class="spinner-grow" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
</template>


<script>
    export default {
        name: "LoadingScreen"
    };
</script>


<style scoped lang="scss">
    @import "../../assets/styles/variables.scss";

    #loading-container {
        background: $primary-color;

        #spinner {
            background: $secondary-color;
            width: 50px;
            height: 50px;
        }
    }
</style>