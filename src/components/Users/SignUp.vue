<template lang="pug">
    div(class="container")
        v-card
            form(@submit.prevent="signUp")
                v-card-row(class="blue darken-4")
                    v-card-title(class="center")
                        span(class="white--text display-2") GEST ADMIN
                        v-spacer
                v-card-text(class="white-bg")
                    v-text-field(
                        v-model="form.name"
                        single-line
                        label="Nombre"
                        hint="Debe escribir su nombre real"
                        prepend-icon="account_box"
                        required)
                    v-text-field(
                        v-model="form.email"
                        single-line
                        label="Dirección de correo electrónico"
                        hint="Esta dirección de correo se utilizará para iniciar sesión en GEST"
                        prepend-icon="email"
                        type="email"
                        required)
                    v-text-field(
                        v-model="form.password"
                        single-line
                        label="Contraseña"
                        hint="La contraseña debe contener un mínimo de ocho (8) caracteres"
                        prepend-icon="vpn_key"
                        required
                        maxlength="25"
                        counter
                        :append-icon="show_password ? 'visibility' : 'visibility_off'"
                        :type="show_password ? 'text' : 'password'"
                        :append-icon-cb="() => (show_password = !show_password)")
                    v-text-field(
                        v-model="form.password_confirm"
                        single-line
                        label="Confirmar contraseña"
                        hint="Escriba nuevamente su contraseña"
                        prepend-icon="vpn_key"
                        required
                        maxlength="25"
                        counter
                        :append-icon="show_password_confirm ? 'visibility' : 'visibility_off'"
                        :type="show_password_confirm ? 'text' : 'password'"
                        :append-icon-cb="() => (show_password_confirm = !show_password_confirm)")
                    div(class="action-secondary")
                        router-link(to="/sign-in")
                            v-btn(light info flat class="blue--text btn-action-secondary") Ya tengo cuenta
                                v-icon(right dark) beenhere
                v-divider
                v-card-row(actions class="white-bg action-primary")
                    v-btn(
                        light
                        info
                        :loading="loading_animation"
                        @click.native="loader = 'loading_animation'"
                        :disabled="loading_animation"
                        type="submit") Comienza en GEST
                            span(slot="loader" class="custom-loader")
                                v-icon(light) cached
                    v-snackbar(:class="snackbar.context" top right v-model="snackbar.show") 
                        v-icon(light class="snackbar-icon") {{ snackbar.icon }}
                        | {{ snackbar.message }}                    
        <!--pre {{ $data }} -->
</template>

<script>
    import {auth} from './firebase'
    export default {
        data () {
            return {
                form: {
                    name: null,
                    email: null,
                    password: null,
                    password_confirm: null
                },
                show_password: false,
                show_password_confirm: false,
                loading_animation: false,
                loader: null,
                snackbar: {
                    show: false,
                    context: null,
                    message: null,
                    icon: null
                },
            }
        },
        methods: {
            signUp() {
                this.loading_animation = true

                const name = this.form.name
                const email = this.form.email
                const password = this.form.password
                const create_user = auth.createUserWithEmailAndPassword(email, password)

                create_user.catch((error) => {
                    console.log(error)
                    error.code = 'auth/email-already-in-use' ? this.snackbarShow('error') : this.snackbarShow('warning')
                })

                create_user.then(() => {
                    let user = auth.currentUser
                    this.snackbarShow('success')
                    this.$router.push({ name: 'dashboard' })

                    user.updateProfile({
                        displayName: name,
                        photoURL: 'static/img/avatar.png'
                    }).then(() => { 
                        console.log('Sin errores') 
                        this.$store.state.user.email = email
                        this.$store.state.user.name = name
                        console.log(this.$store.state.user)
                    },(error) => {
                        console.log('Ha ocurrido un error')
                    })
                })
            },
            snackbarShow(context) {
                    this.snackbar.show = true
                    this.loader = null
                    this.loading_animation = false
                    this.snackbar.context = context
                    switch (context) {
                        case 'error':
                            this.snackbar.icon = 'cancel'
                            this.snackbar.message = 'El email ingresado ya se encuentra en uso'
                            break
                        case 'success':
                            this.snackbar.icon = 'check_circle'
                            this.snackbar.message = `Bienvenido a GEST`
                            break
                        case 'warning':
                            this.snackbar.icon = 'info'
                            this.snackbar.message = 'Hemos detectado problemas en su conexión de Internet. Intente de nuevo'
                            break
                    }
            }
        }
    }
</script>

<style lang="sass" scoped>
    .container
        display: grid
        align-items: center
        justify-content: center
        max-width: 100%
        height: 100vh
        background: url('/static/img/background.jpg') no-repeat fixed
        background-size: 100% 100%

    .card
        display: grid
        width: 450px
    
    .white-bg
        background: white

    .input-group__counter
        padding-right: 40px

    .action-secondary
        display: grid
        justify-content: center
        flex-wrap: nowrap

    .divider
        background: #eee

    .action-primary
        display: grid
        grid-template-columns: 1fr
    
    .custom-loader
        animation: loader 1s infinite
        display: flex

    @keyframes loader
        from
            transform: rotate(0)
        to
            transform: rotate(360deg)

    .snackbar-icon
        padding-right: 5px
</style>

<style lang="sass">
    .center
        display: grid
        align-items: center
        justify-content: center

    .input-group__details
        padding-right: 40px

    a
        text-decoration: none

    .snackbar-icon
        padding-right: 5px
</style>