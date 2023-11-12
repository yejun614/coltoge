<template>
    <header id="global-navigation-bar">
        <span>
            <NuxtLink to="/">
            coltoge.
            </NuxtLink>
        </span>
    </header>
</template>

<style lang="scss">
#global-navigation-bar {
    width: 100%;
    height: 40px;
    padding: 50px 0 0 0;
    margin-bottom: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: white;
    z-index: 100;

    span {
        font-size: 20px;
        font-style: italic;
        border-bottom: 1px solid transparent;

        a {
            color: black;
            text-decoration: blink;
            cursor: pointer;
        }
    }

    span:hover {
        border-bottom: 1px solid black;
    }
}
</style>
