<template>
  <div class="c-topbar">
    <div class="c-topbar__logo">Uosh</div>
    <img
      alt="Hamburger menu"
      class="c-topbar__menu-button"
      src="@/assets/navigation/hamburger-menu.svg"
    />
  </div>
</template>

<style scoped lang="scss">
.c-topbar {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 67px;
  background-color: var(--primary);

  &__logo {
    font-size: 48px;
    letter-spacing: -0.165em;
    font-weight: 400;
    line-height: 55px;
  }

  &__menu-button {
    position: absolute;
    right: 22px;
  }
}
</style>
