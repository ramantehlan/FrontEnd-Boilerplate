<template>
<div>
  <router-view :to="routerView.to"/>
</div>
</template>

<script>
export default {
  data: () => ({
    allowMenu: false,
     routerView: {
                  name: 'Home',
                  to: '/'
                }
  })
}
</script>

<style  src='@/style/index.css' scope>
</style>
