<template lang="pug">
    div(class="container")
        v-card
            form(@submit.prevent="signUp")
                v-card-row(class="blue darken-4")
                    v-card-title
                        span(class="white--text center-box") GEST ADMIN
                        v-spacer
                v-card-text(class="white-bg")
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
                v-divider(style="background: #eee")
                v-card-row(actions class="white-bg login-buttons")
                    v-btn(
                        light
                        info
                        :loading="loading_animation"
                        @click.native="loader = 'loading_animation'"
                        :disabled="loading_animation"
                        type="submit") Comienza en GEST
                            span(slot="loader" class="custom-loader")
                                v-icon(light) cached
                    v-btn(light info flat class="blue--text") Ya tengo cuenta
                    v-snackbar(:class="snackbar.context" top right v-model="snackbar.show") {{ snackbar.message }}
        <!--pre {{ $data }} -->
</template>

<script>
    import {auth} from './firebase'
    export default {
        data () {
            return {
                form: {
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
                },
            }
        },
        methods: {
            signUp() {
                this.loading_animation = true

                const email = this.form.email
                const password = this.form.password
                const create_user = auth.createUserWithEmailAndPassword(email, password)

                create_user.catch((error) => {
                    this.snackbar.show = true
                    this.loader = null
                    this.loading_animation = false
                    this.snackbar.context = 'error'
                    
                    switch (error.code) {
                        case 'auth/email-already-in-use':
                            this.snackbar.message = 'El email ingresado ya se encuentra en uso'
                            break
                        case 'auth/invalid-email':
                            this.snackbar.message = 'El email ingresado no es válido'
                            break
                        case 'auth/network-request-failed':
                            this.snackbar.context = 'warning'
                            this.snackbar.message = 'Hemos detectado problemas en su conexión de Internet. Intente de nuevo'
                            break
                    }
                })

                create_user.then(() => {
                    this.snackbar.context = 'success'
                    this.snackbar.show = true
                    this.loader = null
                    this.loading_animation = false

                    const user = auth.currentUser
                    this.snackbar.message = `Bienvenido a GEST: ${user.email}`
                    this.$router.push({ name: 'dashboard' })
                })
            },
        }
    }
</script>

<style lang="sass">
    body
        background: url('/static/img/background.png') no-repeat fixed
        background-size: 100% 100%
        display: grid
        align-items: center
    
    .container
        width: 500px
    
    .center-box
        padding-left: 130px
    
    .white-bg
        background: white

    .login-buttons
        display: grid
        grid-template-columns: 1fr 1fr

    .input-group--text-field .input-group__counter--error
        padding-right: 40px
    
    .input-group--text-field.input-group--dark .input-group__counter
        padding-right: 40px

    .custom-loader
        animation: loader 1s infinite
        display: flex

    @keyframes loader
        from
            transform: rotate(0)
        to
            transform: rotate(360deg)
</style>