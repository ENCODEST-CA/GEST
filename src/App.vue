<template lang="pug">
    div
        router-view
</template>

<script>
    import layout from '@/components/Layout/Master.vue';
    export default {
        components: { layout },
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