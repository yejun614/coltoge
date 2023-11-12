<script setup>
import { LaTeXJSComponent } from "latex.js";

onMounted(() => {
    customElements.define("latex-js", LaTeXJSComponent);
});
</script>

<template>
    <latex-js>
        <ContentSlot :use="$slots.default" unwrap="p" />
    </latex-js>
</template>