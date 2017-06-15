<template lang="pug">
    div(class="container")
        div(class="login-box")
            h2 GEST
            h4 Crea tu cuenta
            form(id="formLogin" action="#" method="POST")
                div(class="login-form")
                    div(class="input-field")
                        i(class="material-icons prefix") account_circle
                        input(id="txtName" type="text" class="validate") 
                        label(for="txtName") Nombre
                    
                    div(class="input-field")
                        i(class="material-icons prefix") email
                        input(id="txtEmail" name="email" type="email" v-model="email" v-validate="'required|email'" :class="{'input': true, 'invalid': errors.has('email') }")
                        label(for="txtEmail") Correo Electrónico
                        span(v-show="errors.has('email')" class="help is-danger") {{ errors.first('email') }}
                    
                    div(class="input-field")
                        i(class="material-icons prefix") vpn_key
                        input(id="txtPassword" name="password" type="password" v-model="password" v-validate="'required|password'" :class="{'input': true, 'invalid': errors.has('password') }") 
                        label(for="txtPassword") Contraseña
                    
                    button(id="btnSignUp" type="submit" class="btn waves-effect waves-light" @click.prevent="validateForm") Comienza en GEST
                        i(class="material-icons right") done
                
                div(class="login-footer")
                    router-link(to="/login")
                        a(class="login") Ya tengo cuenta
                <pre> {{ $data || json }} </pre>        
</template>

<script>
    import {auth} from './firebase'
    import Vue from 'vue'
    import VeeValidate from 'vee-validate'
    import { Validator } from 'vee-validate';
    const dictionary = {
        en: {
            custom: {
                email: {
                    email: () => 'El email ingresado no es válido',
                    required: () => 'Debe ingresar el email'
                },
                password: {
                    password: () => 'La contraseña no es válida',
                    required: () => 'Debe ingresar una contraseña'
                },                
            },
        }
    };

    Validator.updateDictionary(dictionary);
    const validator = new Validator({ first_name: 'alpha' });
    validator.setLocale('en');
    Vue.use(VeeValidate)
    export default {
        data () {
            return {
                email: '',
                password: ''
            }
        },
        mounted () {
            $('.tooltipped').tooltip({delay: 50})
        },
        methods: {
            signUp() {
                // OBTENER LOS VALORES DEL FORMULARIO //
                let email = $('#txtEmail').val()
                let password = $('#txtPassword').val()
                
                // REGISTRAR EL USUARIO //
                let promise = auth.createUserWithEmailAndPassword(email, password)
                promise.catch((error) => {
                    // CAPTURAR LOS ERRORES
                    switch (error.code) {
                        case "auth/email-already-in-use":
                            Materialize.toast('El email ingresado ya se encuentra en uso', 2000)
                            break
                        case "auth/invalid-email":
                            Materialize.toast('El email ingresado no es válido', 2000)
                            break
                    }
                })
                promise.then( () => {
                    const user = auth.currentUser
                    Materialize.toast(`Bienvenido a GEST: ${user.email}`, 4000)
                    this.$router.push({ name: 'dashboard' })
                })
            },
            validateForm() {
                this.$validator.validateAll().then(() => {
                    alert('From Submitted!');
                }).catch(() => {
                    alert('Correct them errors!');
                });
            }
            //     let email = this.form.elements.email
            //     let password = this.form.elements.password
                
            //     if (email) {
            //         this.form.validated = !this.form.validated
            //     }
            //     for (let i in form) {
            //         console.log(form)
            //     }
                // for (let i in form) {
                //     console.log(form)
                // }
                // const form = document.getElementById('formLogin')
                // for (let i = 0; i < form.elements.length - 1; i++) {
                //     let name = form.elements[i].name
                //     let value = form.elements[i].value.length
                //     if (value == 0) {
                //         Materialize.toast(`El campo de ${name} es obligatorio`, 4000)
                //         return
                //     }
        }
    }
</script>

<style lang="sass" scoped>
    body
        background: #1e88e5
    
        .container
            display: grid
            justify-items: center
            width: 100%
            height: 100vh
            grid-template-columns: 1fr 1fr 1fr 1fr
            grid-template-rows: 5em 12em 12em
            
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

                    input
                        border-bottom: 1px solid #000
                        box-shadow: 0 1px 0 0 #000
                        + label
                            color: #0d47a1
                        .invalid
                            border-bottom: 1px solid red
                            box-shadow: 0 1px 0 0 red
                    .prefix.active
                        color: #0d47a1

                    button
                        margin-top: 20px
                        width: 100%
                        background: #2979ff
                
                .login-footer
                    display: grid
                    padding-top: 20px
                    grid-template-columns: 160px
                    grid-row: 5 / 5
                    text-align: center
                    justify-content: space-around
</style>