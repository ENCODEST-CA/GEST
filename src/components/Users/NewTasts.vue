<template lang="pug">
    div(class="container-full")
        div(class="container")
            div(class="col s12 m7")
                div(class="card-panel teal")   
                    h4(class="header") Nueva tarea
                div(class="card horizontal")
                    div(class="info-help")
                        h4(class="header") Información
                            transition(name="aparaceInformacion")
                                div(class="info-input")
                                    p(v-if="mostrar" v-text="mensajes.campoTitulo")             
                    //div(class="card-image")
                        img( src="http://lorempixel.com/100/190/nature/6")
                    div(class="card-stacked")
                        div(class="card-content")    
                            form(action="#" method="POST" autocomplete="off")
                                div(class="col s12")
                                    div(class="row")
                                        div(class="input-field col s6")
                                            i(class="small material-icons prefix") subtitles
                                            input(id="icon_prefix" @click="mostrar = !mostrar" type="text" class="validate") 
                                            label(for="icon_prefix") Titulo
                                        div(class="input-field col s6")
                                            i(class="material-icons prefix") assignment_ind
                                            input(id="icon_prefix" type="text" class="validate") 
                                            label(for="icon_prefix") Responsable
                                div(class="col s12")
                                    div(class="row")
                                        div(class="input-field col s12")
                                            i(class="tiny material-icons prefix") mode_edit
                                            textarea(id="icon_prefix" type="text" class="materialize-textarea") 
                                            label(for="icon_prefix") Descripción

                                    div(class="file-field input-field")
                                        div(class="btn")
                                            span File
                                            input(type="file")
                                        div(class="file-path-wrapper") 
                                            input(class="file-path validate" type="text")
                        div(class="card-action")
                            button(class="btn waves-effect waves-center" type="submit" name="action") Guardar
                                i(class="material-icons right") done

        pre {{$data}}
</template>

<script>
    export default {
        data() {
            return {
                mostrar: false,
                mensajes: {
                   campoTitulo: "Aca deberas especificar el titulo de tu tarea, recuerda que debe ser muy especifico y no tan largo!",
                }
            }
        }
    }
</script>

<style lang="sass" scoped>
    .container-full
        padding-left: 300px
    .header 
        color: #fff
    .info-help
        background-color: #009688 
        display: block
        position: relative
    .info-input
        position: absolute
        font-size: 14px
    .aparaceInformacion-enter
        opacity: 0
    .aparaceInformacion-enter-active
        transition: opacity 1s
    .aparaceInformacion-leave-to
        opacity: 0
    .aparaceInformacion-leave-active
        transition: opacity 1s    


</style>