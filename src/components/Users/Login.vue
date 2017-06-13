<template lang="pug">
    div(class="container")
        div(class="login-box")
            h2 GEST
            h4 Ingresa con tu cuenta
            form(action="#" method="POST" autocomplete="off")
                div(class="login-form")
                    div(class="input-field")
                        i(class="material-icons prefix") email
                        input(id="icon_prefix" type="email" class="validate") 
                        label(for="icon_prefix") Correo Electrónico
                    div(class="input-field")
                        i(class="material-icons prefix") vpn_key
                        input(id="icon_prefix" type="password" class="validate") 
                        label(for="icon_prefix") Contraseña
                    button(class="btn waves-effect waves-light" type="submit" name="action") Iniciar Sesión
                        i(class="material-icons right") lock_open
                div(class="login-footer")
                    a(href="#" class="recovery-password") Recuperar contraseña
                    router-link(to="/sign-up")
                        a(href="#" class="sign-up") Registrarse
                router-view
</template>

<script>
    export default {}
</script>

<style lang="sass">
    body
        background: #1e88e5
    
        .container
            display: grid
            justify-items: center
            width: 100%
            height: 100vh
            grid-template-columns: 1fr 1fr 1fr 1fr
            grid-template-rows: 10em 10em 10em 1em
            
            .login-box
                display: grid
                grid-template-rows: 5em 4em 10em 5em
                grid-column: 2 / 4
                grid-row: 2 / 4
                border: 1px solid
                width: 70%
                height: 140%
                background: white
                
                h2
                    grid-row: 1 / 2
                    /*border: 1px solid*/
                    text-align: center
                    background: #0d47a1
                    margin: 0
                    color: white
                
                h4
                    grid-row: 2 / 3
                    text-align: center
                    font-size: 1.5em
                
                .login-form
                    padding: 0 15px
                    grid-row: 3 / 4

                    input, input:focus:not([readonly])
                        border-bottom: 1px solid #000
                        box-shadow: 0 1px 0 0 #000
                        &.valid, &.invalid
                        border-bottom: 1px solid #000
                        box-shadow: 0 1px 0 0 #000
                        + label
                            color: #0d47a1
                    .prefix.active
                        color: #0d47a1

                    button
                        margin-top: 20px
                        width: 100%
                        background: #2979ff
                
                .login-footer
                    display: grid
                    padding-top: 20px
                    grid-template-columns: 160px 80px
                    grid-row: 5 / 5
                    text-align: center
                    justify-content: space-around
</style>