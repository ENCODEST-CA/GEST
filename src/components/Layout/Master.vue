<template lang="pug">
    div
        sidebar
        upnav
        //carousel
        router-view

</template>

<script>
    import sidebar from '@/components/Layout/Sidebar.vue'
    import upnav from '@/components/Layout/UpNav.vue'
    import carousel from '@/components/Layout/Carousel.vue'
    export default {
        components: { sidebar, upnav, carousel },
        data () {
            return {}
        }
    }
</script>
<style lang="sass">
    .navbar
        padding-left: 300px
    nav
        background-color: #1a237e
    @media only screen and (max-width : 992px)
        padding-left: 0
</style>