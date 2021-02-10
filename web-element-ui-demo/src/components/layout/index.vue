<template>
    <div class="wrapper">
        <app-head></app-head>
        <router-view></router-view>
        <app-foot></app-foot>
    </div>
</template>

<script>
// @ is an alias to /src
import AppFoot from '@/components/layout/app-foot'
import AppHead from '@/components/layout/app-head'

export default {
  name: "Home",
  components: {
      AppHead,
      AppFoot
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
