<template lang="pug">
    div(class="center-content")
        div(class="carousel carousel-slider center" data-indicators="true")
            div(class="carousel-fixed-item center") 
                a(class="btn waves-effect white grey-text darken-text-2") button
            div(class="carousel-item red white-text" href="#one!")
                h2 Primer Panel
                    p(class="white-text") This is your first panel
            div(class="carousel-item amber white-text" href="#two!")
                h2 Ultimas tareas
                    p(class="white-text") This is your second panel
            div(class="carousel-item green white-text" href="#three!")
                h2 Nuevos Empleados
                    p(class="white-text">This is your third panel)
            div(class="carousel-item blue white-text" href="#four!")
                h2 Ultimos Eventos
                    p(class="white-text") This is your fourth panel

</template>
<script>
    export default {
        mounted() {
            $('.carousel.carousel-slider').carousel({fullWidth: true});
        }
    }
</script>
<style lang="sass" scoped>
    .center-content
        width: 95%;
        display: flex
        padding-left: 300px
        margin: 2em
    
    .carousel.carousel-slider .carousel-item 
        width: 100%;
        height: 100%;
        min-height: 300px;
        position: absolute;

</style>