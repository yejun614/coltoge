<script setup>
import Mark from "mark.js";

const search = ref("");
let mark = undefined;

onMounted(() => {
    mark = new Mark(".search-result-item");
});

function preprocess(input) {
    let result = JSON.stringify(input)
    const regex = / |{|}|:|,|"|'|\//gi;
    result = result.replaceAll(regex, "");
    result = result.toLowerCase();
    return result;
}

function filter(keyword, articles) {
    const results = [];
    for (const article of articles) {
        if (preprocess(article).indexOf(preprocess(keyword)) >= 0) {
            results.push(article);
        }
    }
    setTimeout(() => {
        mark.unmark();
        mark.mark(keyword);
    }, 10);
    return results;
}
</script>

<template>
    <input class="search-bar" v-model="search" placeholder="Search">

    <ContentList v-if="search.length > 0" path="/blog" v-slot="{ list }">
        <ul v-for="article in filter(search, list)" :key="article._path">
            <li v-if="article._path != '/blog'" class="search-result-item">
                <MyContentDoc :path="article._path" />
                <div class="block"></div>
                <NuxtLink class="search-result-link" :to="article._path">Post Link</NuxtLink>
            </li>
        </ul>
    </ContentList>

    <div class="nav-items" v-else>
        <ContentNavigation></ContentNavigation>
    </div>
</template>

<style lang="scss" scope>
.search-bar {
    width: 300px;
    padding: 5px 20px;
    box-shadow: 0 0 10px #00000050;
    border: none;
    border-radius: 20px;
    transition: box-shadow 100ms ease;
}

.search-bar:focus {
    outline: none;
    box-shadow: 0 0 10px #000000AA;
}

.search-result-item {
    width: 100%;
    height: 300px;
    list-style: none;
    overflow-y: hidden;
    box-shadow: 0 0 60px #00000020;
    border-radius: 20px;
    padding: 0 20px;
    position: relative;

    .block {
        width: 100%;
        height: 100%;
        background: transparent;
        position: absolute;
        top: 0;
        left: 0;
    }
}

.search-result-link {
    color: black;
    background: white;
    text-decoration: blink;
    border: 1px solid black;
    padding: 10px 20px;
    position: absolute;
    top: 20px;
    right: 20px;
}

.search-result-link:hover {
    color: white;
    background: black;
}

.nav-items {
    li {
        list-style: none;
        a {
            color: black;
            text-decoration: blink;
        }
    }
}
</style>
