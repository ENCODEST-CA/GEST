<template lang="pug">
    v-app
        v-navigation-drawer(persistent light :mini-variant.sync="sidebar_slim" v-model="sidebar")
            v-list(class="pa-0")
                v-list-item
                    v-list-tile(avatar tag="div")
                        v-list-tile-avatar 
                            img(src="static/img/logo.png")
                        v-list-tile-content
                            v-list-tile-title GEST ADMIN
                        v-list-tile-action
                            v-btn(icon @click.native.stop="sidebar_slim = !sidebar_slim")
                                v-icon chevron_left
                template(v-for="(item, i) in sidebar_items" raised)
                    v-list-group(v-if="item.children" v-model="item.model" no-action)
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
            v-toolbar-side-icon(light @click.native.stop="sidebar = !sidebar")
                v-toolbar-title Toolbar
            v-toolbar-title(class="hidden-sm-and-down") DASHBOARD
            v-toolbar-items
                v-toolbar-item Alejandro Uray
                    v-list-tile-avatar(class="padding-normal")
                        v-menu(offset-y)
                            v-list
                                v-list-item(v-for="item in sidebar_items" :key="item")
                                    v-list-tile
                                        v-list-tile-title {{ item.text }}
                            img(src="https://randomuser.me/api/portraits/men/85.jpg" primary light slot="activator" class="deep-blue")
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
        sidebar: true,
        sidebar_slim: true,
        sidebar_items: [
            { icon: 'domain', text: 'SERVICIOS ENCODEST' },
            { icon: 'grid_on', text: 'Gerencia de Sistemas' },
            { icon: 'group', text: 'Equipos de trabajo' },
            { 
                icon: 'assignment',
                'icon-up': 'keyboard_arrow_up',
                'icon-down': 'keyboard_arrow_down',
                text: 'Tareas',
                model: false,
                children: [
                    { icon: 'add_box', text: 'Crear tarea' },
                    { icon: 'search', text: 'Mis tareas' },
                ]
            },
            { icon: 'help', text: 'Ayuda' },
        ],
      }
    }
  }
</script>
<style lang="sass" scoped>
    #navigation-1 a
        text-decoration: none
    
    .text-normal
        font-size: 14px

    .padding-normal
        padding-left: 10px
</style>