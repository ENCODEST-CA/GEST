<template lang="pug">
    div(class="navbar")
        nav
            div(class="nav-wrapper")
                a(href="#!" class="brand-logo") Gest Admin
                    i(class="material-icons" @click.prevent="hideSidebar") chevron_left
                ul(class="right hide-on-med-and-down")
                    li
                        router-link(to="/login")
                            | Alejandro Uray
                            i(class="material-icons right") person
                    li
                        a(href="sass.html")
                            i(class="material-icons") notifications
                    li
                        a(href="sass.html")
                            i(class="material-icons") email
                    li
                        a(href="sass.html")
                            i(class="material-icons") assignment
                    li
                        a(href="sass.html") Sign out
        nav(class="prueba")                                  
            a(href="#!" class="breadcrumb") Login
            a(href="#!" class="breadcrumb") Home
 

</template>
<script>
    export default {
        mounted() {
            $(".button-collapse").sideNav();
        },
        data() {
            return {
                display: true
            }
        },
        methods: {
            hideSidebar() {
                $('.button-collapse').sideNav('hide');
                this.display = !this.display
            }
        },
    }
</script>

<style lang="sass" scoped>
    .prueba
        border: 15px solid #bdbdbd
        background: white
        display: flex
        a
            align-self: center
            border-radius: 100px
            font-size: 14
            padding: 0.5em .5em

    .breadcrumb 
        color: black 
        
    .breadcrumb:before
            color: black


</style>