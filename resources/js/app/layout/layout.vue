<template>

    <div class="bg-[#1e2024]">
        <Header/>
        <router-view/>
        <Footer/>
    </div>

</template>

<script>
import Header from "./includes/header.vue";
import Footer from "./includes/footer.vue";

export default {
    components: { Header, Footer },
    data(){ return {  } },
    mounted() {  },
    methods: {  }
}

</script>
