<template lang="pug">
    ul(id="slide-out" class="side-nav fixed")
        li
            div(class="userView")
                div(class="background")
                    img(src="static/img/header-test.jpg")
                a(href="#!user")
                    img(class="circle" src="static/img/avatar-test.jpg")
                a(href="#!name")
                    span(class="white-text name") Alejandro Uray
                a(href="#!email")
                    span(class="white-text email") yohanysturiz@gmail.com
        li
            div(class="collapsible-header waves-effect waves-blue")
                i(class="material-icons") assignment
                | Resumen
        ul(class="collapsible" data-collapsible="accordion")
            li
                div(class="collapsible-header waves-effect waves-blue")
                    i(class="material-icons") assignment
                    | Tareas
                    i(class="material-icons icon-right") keyboard_arrow_down
                div(class="collapsible-body")
                    div(class="collapsible-options")
                        li
                            router-link(to="/NewTasts")
                                i(class="material-icons") add
                                | Agregar Tarea
                        li
                            i(class="material-icons") dvr
                            | Mis Tareas
            li
                div(class="collapsible-header waves-effect waves-blue")
                    i(class="material-icons") assignment
                    | Estadísticas
                    i(class="material-icons icon-right") keyboard_arrow_down
                div(class="collapsible-body")
                    div(class="collapsible-options")
                        li
                            i(class="material-icons") add
                            | Nueva Tarea
                        li
                            i(class="material-icons") dvr
                            | Mis Tareas
        li
            div(class="collapsible-header waves-effect waves-blue")
                i(class="material-icons") settings
                | Configuración
</template>

<script>
    export default {
        mounted() {
            $(".button-collapse").sideNav();
            $('.collapsible').collapsible();
        },
        methods: {
        }
    }
</script>

<style lang="sass" scoped>
    .collapsible-options
        li
            padding: (0 50px !important)
            cursor: pointer
            &:hover
                background: rgba(0, 0, 0, 0.05)
                width: 100%
            i
                padding-right: 10px
                position: relative
                top: 5px
    .icon-right
        float: right
</style>