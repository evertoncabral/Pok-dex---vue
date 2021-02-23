<template>
  <div class="Pokedex">
    <TopPannel />
    <LeftPanel class="pokedex--left" />
    <Divider />
    <RightPanel class="pokedex--right" />
  </div>
</template>

<script>
import TopPannel from "@/components/TopPannel/TopPannel.vue";
import LeftPanel from "@/components/LeftPanel/LeftPanel.vue";
import RightPanel from "@/components/RightPanel/RightPanel.vue";
import Divider from "@/components/Divider/Divider.vue";

export default {
  name: "Pokedex",
  components: {
    TopPannel,
    LeftPanel,
    RightPanel,
    Divider,
  },
};
</script>

<style lang="scss" scoped>
.pokedex {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 960px;
  height: 100%;

  @media (min-width: $viewport-medium) {
    max-height: 700px;
    flex-direction: row;
  }

  &--left,
  &--right {
    position: relative;
    display: flex;
    height: 50%;
    perspective: 1700px;
    transform: preserve- 3d;

    @media (min-width: $viewport-medium) {
      height: 100%;
    }
  }
}
</style>