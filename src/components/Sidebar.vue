<template lang="pug">
    div(class="sidebar")
        div(class="logo")
            i(class="fa fa-binoculars fa-2x icon" aria-hidden="true")
            h1 GEST
                |  Admin
        div(class="menu-group")
            h3 TAREAS
            ul(class="menu-option-primary")
                li
                    i(class="fa fa-tasks icon-small" aria-hidden="true")  
                    | Nueva tarea
                li
                    i(class="fa fa-tasks icon-small" aria-hidden="true") 
                    | Mis tareas
                li
                    i(class="fa fa-tasks icon-small" aria-hidden="true")
                    | Item 2
                li
                    i(class="fa fa-tasks icon-small" aria-hidden="true") 
                    | Item 2
        div(class="menu-group")
            h3 COMPONENTS
            ul(class="menu-option-primary")
                li
                    i(class="fa fa-tasks icon-small" aria-hidden="true") 
                    | Item 2
                li
                    i(class="fa fa-tasks icon-small" aria-hidden="true") 
                    | Item 2
                li
                    i(class="fa fa-tasks icon-small" aria-hidden="true") 
                    | Item 2
                li
                    i(class="fa fa-tasks icon-small" aria-hidden="true") 
                    | Item 2
        div(class="menu-group")
            h3 APPLICATION
            ul(class="menu-option-primary")
                li
                    i(class="fa fa-tasks icon-small" aria-hidden="true") 
                    | Item 2
        div(class="menu-icons")
            i(class="fa fa-tasks fa-2x icon-large" aria-hidden="true")  
            i(class="fa fa-tasks fa-2x icon-large" aria-hidden="true") 
            i(class="fa fa-tasks fa-2x icon-large" aria-hidden="true")
            i(class="fa fa-tasks fa-2x icon-large" aria-hidden="true")
            i(class="fa fa-tasks fa-2x icon-large" aria-hidden="true")
</template>

<script>
    export default {
        methods: {
        }
    }
</script>

<style lang="sass" scoped>
    $main-blue: #0049B0
    $main-hover: #023e94 

    .sidebar
        display: flex
        flex-basis: 18%
        height: 100%
        background: $main-blue 
        color: white
        flex-wrap: wrap
        align-items: flex-end

    .menu-icons
        display: none

    .logo
        display: flex
        flex-basis: 100%
        justify-content: flex-start
        padding: 20px

    .menu-group
        display: flex
        flex-basis: 100%
        flex-direction: column
        justify-content: flex-start
        padding-left: 20px
        h3
            color: #7aa7e6

    .menu-option-primary
        display: flex
        flex-direction: column
        align-items: flex-start
        margin: 0px
        list-style: none
        padding: 10px
        li
            display: flex
            justify-content: flex-start
            padding: 10px 0px 10px 0px
            width: 100%
            cursor: pointer
        li:hover
            background: #023e94
    h1
        margin: 0px
        font-size: 24px
        height: 1px

    .material-icons
        padding-right: 20px
        font-size: 30px

    .icon
        padding-right: 15px
        font-size: 30px

    .icon-small
        padding: 0px 15px 0px 15px
        font-size: 20px
    h3
        color: #565656
        font-size: 14px
        font-weight: normal
        margin: 0px

    @media (max-width: 1250px)
        .sidebar
            flex-basis: 1%
            align-items: flex-start
        .logo, .menu-group
            display: none
        .menu-icons
            display: flex
            flex-basis: 100%
            flex-direction: column
            justify-content: flex-start
            align-items: flex-end
        .icon-large
            padding: 8px 8px 8px 8px
            cursor: pointer
            &:hover
                background: #023e94
                border-radius: 20px 20px 20px 20px
</style>