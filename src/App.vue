<template>
  <router-view :to="routerView.to"/>
</template>

<script>
export default {
  data: () => ({
     routerView: {
                  name: 'Home',
                  to: '/'
                }
  })
}
</script>

<style  src='@/style/index.scss' scope>
</style>
