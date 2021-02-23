<template>
  <form action="" class="search">
    <label for="search" class="search_label text--white bg-black">
      <h3 class="search_label--text">E.g. : Charizard</h3>
      <input id="search" type="text" class="search_input" />
    </label>

    <button class="search_button bg-gray text--yellow" @click.prevent>
      Search Fake
    </button>
  </form>
</template>

<script>
export default {
  name: "RightPanelContent",
};
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  flex-direction: colum;
  justify-content: space-between;
  flex: 1;
  transform: rotateX(-180deg);

  @media (min-width: $viewport-medium) {
    transform: rotateY(-180deg);

    padding-top: 50px;
  }

  &_label {
    display: flex;
    flex-direction: colum;
    justify-content: space-between;
    width: 100%;
    height: 50%;
    padding: 6px 12px 12px;

    @media (min-width: $viewport-medium) {
      height: 36%;
      padding: 12px 24px 24px;
    }
  }

  &_input {
    color: inherit;
    background: transparent;
    border: none;
    border-bottom: 2px solid color(white);
    padding: 4px 8px;

    @media (min-width: $viewport-medium) {
      padding: 8px;
    }
  }
  &_button {
    align-self: flex-end;
    width: 120px;
    height: 50px;
    border: 4px solid color(black);
    border-radius: 8px;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;

    @media (min-width: $viewport-medium) {
      width: 160px;
      height: 60px;
    }
  }
}
</style>