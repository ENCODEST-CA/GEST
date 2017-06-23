<template lang="pug">
    v-app
        v-navigation-drawer(persistent light :mini-variant.sync="mini" v-model="drawer")
            v-list(class="pa-0")
                v-list-item
                    v-list-tile(avatar tag="div")
                        v-list-tile-avatar 
                            img(src="static/img/logo.png" slot="activator")
                        v-list-tile-content
                            v-list-tile-title GEST ADMIN
                        v-list-tile-action
                            v-btn(icon @click.native.stop="mini = !mini")
                                v-icon chevron_left
                template(v-for="(item, i) in items" raised)
                    v-layout(row v-if="item.heading" align-center :key="i")
                        v-flex(xs6)
                            v-subheader(v-if="item.heading") {{ item.heading }}
                        v-flex(xs6 class="text-xs-center")
                            a(href="#!" class="body-2 black--text") EDIT
                    v-list-group(v-else-if="item.children" v-model="item.model" no-action)
                        v-list-item(slot="item")
                            v-list-tile
                                v-list-tile-action
                                    v-icon {{ item.icon }}
                                v-list-tile-content
                                    v-list-tile-title(class="text-normal") {{ item.text }}
                                v-list-tile-action
                                    v-icon {{ item.model ? item['icon-up'] : item['icon-down'] }}
                        v-list-item(v-for="(child, i) in item.children" :key="i")
                            v-list-tile(ripple)
                                v-list-tile-action(v-if="child.icon")
                                    v-icon {{ child.icon }}
                                v-list-tile-content
                                    v-list-tile-title(class="text-normal") {{ child.text }}
                    v-list-item(v-else)
                        v-list-tile(ripple)
                            v-list-tile-action
                                v-icon {{ item.icon }}
                            v-list-tile-content
                                v-list-tile-title(class="text-normal") {{ item.text }}
        v-toolbar(fixed class="blue" light)
            v-toolbar-side-icon(light @click.native.stop="drawer = !drawer")
                v-toolbar-title Toolbar
            v-toolbar-title(class="hidden-sm-and-down") DASHBOARD
            v-toolbar-items
                v-toolbar-item Alejandro Uray
                    v-list-tile-avatar(class="padding-normal")
                        v-menu(offset-y)
                            v-list
                                v-list-item(v-for="item in items" :key="item")
                                    v-list-tile
                                        v-list-tile-title {{ item.text }}
                            img(src="https://randomuser.me/api/portraits/men/85.jpg" primary light slot="activator" class="deep-orange")
            v-btn(icon light)
                v-icon grade
            v-btn(icon light)
                v-icon email
            v-btn(icon light)
                v-icon notifications
            v-btn(icon light)
                v-icon exit_to_app
</template>

<script>
import Vue from 'vue'
import Vuetify from 'vuetify'
 
Vue.use(Vuetify)
  export default {
    data () {
      return {
        drawer: true,
        items: [
            { icon: 'domain', text: 'SERVICIOS ENCODEST' },
            { icon: 'grid_on', text: 'Gerencia de Sistemas' },
            { icon: 'group', text: 'Equipos de trabajo' },
            { 
                icon: 'assignment',
                'icon-up': 'keyboard_arrow_up',
                'icon-down': 'keyboard_arrow_down',
                text: 'Tareas',
                model: true,
                children: [
                    { icon: 'add_box', text: 'Crear tarea' },
                    { icon: 'search', text: 'Mis tareas' },
                ]
            },
            { icon: 'help', text: 'Ayuda' },
        ],
        mini: false,
        right: null
      }
    }
  }
</script>
<style lang="sass">
    body
        display: block
    #navigation-1 a
        text-decoration: none
    
    .text-normal
        font-size: 14px

    .padding-normal
        padding-left: 10px
</style>