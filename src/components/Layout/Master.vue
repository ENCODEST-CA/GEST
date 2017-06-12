<template lang="pug">
    div
        sidebar
        upnav
</template>

<script>
    import sidebar from '@/components/Layout/Sidebar.vue'
    import upnav from '@/components/Layout/UpNav.vue'
    export default {
        components: { sidebar, upnav },
        data () {
            return {}
        }
    }
</script>
<style lang="sass">
    .navbar
        padding-left: 300px
    nav
        background: #1a237e
    @media only screen and (max-width : 992px)
        padding-left: 0
</style>