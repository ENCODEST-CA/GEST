<template>
    <sidebar></sidebar>
</template>

<script>
    import sidebar from './components/Sidebar.vue';
    export default {
        components: { sidebar },
        data () {
            return {}
        }
    }
</script>
<style lang="sass">
    *, *:before, *:after
        box-sizing: inherit

    html
        box-sizing: border-box

    html,body
        height: 100%
        width: 100%
        padding: 0
        margin: 0
    
    body
        font-family: 'Roboto', sans-serif
        display: grid
        grid-template-columns: .7fr 3fr
        background: #E9EDF2
    @media (max-width: 1240px)
        body
            grid-template-rows: .3fr 3fr
            grid-template-columns: 1fr
</style>
