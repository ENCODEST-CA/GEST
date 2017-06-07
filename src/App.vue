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
<style>
    *, *:before, *:after {
        box-sizing: inherit;
    }

    html {
        box-sizing: border-box;
    }

    html,body {
        height: 100%;
        width: 100%;
        padding: 0;
        margin: 0;
    }
    
    body {
        font-family: 'Roboto', sans-serif;
        display: flex;
        background: #E9EDF2;
    }
</style>
