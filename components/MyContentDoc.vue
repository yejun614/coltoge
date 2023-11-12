<script lang="ts" setup>
const props = defineProps(["path", ""])
</script>

<template>
    <ContentDoc
        :path="props.path"
    >
      <template #not-found>
        <p>Document not found</p>
      </template>

      <template #empty>
        <p>There is nothing here</p>
      </template>

      <template #default="{ doc }">
        <article>
          <h1>{{ doc.title }}</h1>
          <span v-if="doc.createdAt != undefined" class="created-at">
          {{ doc.createdAt }}
          </span>
          <ContentRenderer :value="doc" />
        </article>
      </template>
    </ContentDoc>
</template>

<style lang="scss">
main {
  width: 100%;
  max-width: 800px;
  min-height: 100vh;

  .created-at {
    color: #00000050;
  }

  h2, h3, h4, h5, h6 {
    :hover::before {
      content: "#";
      font-weight: bold;
      color: #00000050;
      margin-right: 5px;
    }

    a {
      color: black;
      text-decoration: blink;
    }
  }

  img {
    max-width: 100%;
    border-radius: 20px;
    transition: border-radius 100ms ease;
  }

  img:hover {
    border-radius: 0;
  }

  pre.shiki {
    padding: 20px;
    border: 1px solid #00000020;
    overflow: auto;
  }

  blockquote {
    font-style: italic;
    padding: 10px 20px;
    background: #00000010;
  }

  table, tr, td {
    padding: 10px 20px;
    border: 1px solid #00000020;
    border-collapse: collapse;
  }
}
</style>