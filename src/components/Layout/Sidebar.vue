<template lang="pug">
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
</template>

<script>
    export default {
    }
</script>

<style lang="sass" scoped>
    .collapsible-options
        li
            padding: (0 50px !important)
            cursor: pointer
            &:hover
                background: rgba(0, 0, 0, 0.05)
                width: 100%
            i
                padding-right: 10px
                position: relative
                top: 5px
    .icon-right
        float: right
</style>