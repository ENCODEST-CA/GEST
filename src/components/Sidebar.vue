<template lang="pug">
    div(class="sidebar")
        div(class="logo")
            i(class="fa fa-binoculars fa-2x" aria-hidden="true")
            h1 GEST Admin
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
                li
                    i(class="fa fa-tasks icon-small" aria-hidden="true") 
                    | Item 2
                li
                    i(class="fa fa-tasks icon-small" aria-hidden="true") 
                    | Item 2
                li
                    i(class="fa fa-tasks icon-small" aria-hidden="true") 
                    | Item 2
</template>

<script>
    export default {
        methods: {
        }
    }
</script>

<style lang="sass" scoped>
    $color-main-blue: #0049B0
    $color-main-hover: #023e94
    $color-secondary: #20B6C2

    $padding-normal-height: 15px 0px 15px 0px
    $padding-normal-width: 0px 15px 0px 15px

    .sidebar
        display: grid
        grid-template-rows: [sidebar-logo-start] .3fr [sidebar-logo-end] 1fr [sidebar-menu-start] 1fr [sidebar-menu-start] 1fr
        grid-template-columns: 1fr
        justify-content: end
        background: $color-main-blue 
        color: white

    .logo
        display: grid
        grid-template-columns: [logo-start] .1fr [logo-medium] 1fr [logo-end]
        grid-row: sidebar-logo-start / sidebar-logo-end
        align-items: center
        justify-items: center
        padding-left: 10px
    
    .menu-icons
        display: none
    
    .menu-group
        padding-left: 20px
        h3
            color: $color-secondary
            font-weight: bold
    
    .menu-option-primary
        margin: 0px
        list-style: none
        padding: 10px
        li
            padding: $padding-normal-height
            cursor: pointer
        li:hover
            background: $color-main-hover

    .icon-small
        padding: $padding-normal-width
        font-size: 20px
    h3
        font-size: 14px
        font-weight: normal
        margin: 0px

    @media (max-width: 1240px)
        .sidebar
            grid-template-rows: 1fr
            grid-template-columns: [header-start] 1fr [header-logo-start] 2fr [header-logo-end] 1fr [header-end]
        
        .menu-group
            display: none

        .logo
            grid-column: header-logo-start / header-logo-end
            justify-self: center
            i
                padding-right: 15px
</style>