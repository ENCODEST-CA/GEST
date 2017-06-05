<template lang="pug">
  md-layout(md-gutter class="sidebar")
    md-layout(style="background: black" md-flex="25")
      div(class="phone-viewport")
        md-list
          md-list-item
            md-icon whatshot
            span News

            md-list-expand
              md-list
                md-list-item(class="md-inset") World
                md-list-item(class="md-inset") Americas
                md-list-item(class="md-inset") Europe
</template>

<script>
export default {
  name: 'headerNav',
  data () {
    return {
    }
  },
  methods: {
    deploySidebar() {
      this.$refs.leftSidenav.toggle();
    },
  }
}
</script>

<style lang="sass">
  .sidebar
    position: relative
    top: 0px
    height: 100%
  .phone-viewport
    height: 5%
    background: black
</style>
