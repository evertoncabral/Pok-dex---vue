<template>
  <div class="panel bg--red-01"><LeftPannelContent /></div>
</template>

<script>
import LeftPannelContent from "./LeftPannelContent.vue";
export default {
  name: "LeftPannel",
  content: {
    LeftPannelContent,
  },
};
</script>
<style lang="scss" scoped>
.panel {
  display: flex;
  width: 100%;
  padding: 85px 20px 20px;

  @media (min-width: $viewport-medium) {
    width: calc(50% + 20px);
    padding-right: 60px;
  }
}
</style>