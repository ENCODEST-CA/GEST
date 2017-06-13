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
        nav(style="background-color:#64b5f6")
            div(class="nav-wrapper")
                div(class="col s12")
                    a(href="#!" class="breadcrumb") First
                    a(href="#!" class="breadcrumb") segundo
                    a(href="#!" class="breadcrumb") tercero  
 

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
</style>