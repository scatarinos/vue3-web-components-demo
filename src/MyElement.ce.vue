<script setup lang="ts">
import { RouterLink, RouterView, useRoute, useRouter } from "vue-router";
import { computed } from "vue";
import { useElementStore } from "./stores/state";
import { useI18n } from "vue-i18n";

const props = defineProps<{
  lang: string;
  path?: string;
}>();

const store = useElementStore();

const route = useRoute();
const router = useRouter();

const initialPath = props.path || "/";
router.push(initialPath);
const currentPath = computed(() => route.path);

const { locale } = useI18n();
const currentLocale = computed(() => locale.value);

function setLocale(loc: string) {
  locale.value = loc;
}
</script>

<template>
  <div class="m-1">
    <div class="wrapper">
      <div class="menu">
        <RouterLink to="/" :class="currentPath == '/' ? 'font-bold' : ''"
          >Home</RouterLink
        >
        |
        <RouterLink
          to="/about"
          :class="currentPath == '/about' ? 'font-bold' : ''"
          >About</RouterLink
        >
        <div class="p-8 inline"></div>
        <ul class="inline">
          <li
            class="inline p-1 cursor-pointer"
            :class="currentLocale == 'en' ? 'font-bold' : ''"
            @click="() => setLocale('en')"
          >
            en
          </li>
          <li
            class="inline p-1 cursor-pointer"
            :class="currentLocale == 'ja' ? 'font-bold' : ''"
            @click="() => setLocale('ja')"
          >
            ja
          </li>
          <li
            class="inline p-1 cursor-pointer"
            :class="currentLocale == 'pt' ? 'font-bold' : ''"
            @click="() => setLocale('pt')"
          >
            pt
          </li>
        </ul>
      </div>
      <div class="main">
        <div>
          My Custom Element
          <button
            @click="store.toggleShowMore"
            class="p-1 px-4 border border-red-500 rounded m-1"
          >
            ShowMore
          </button>
          <div v-show="store.showMore" class="bg-gray-100">
            <div class="p-8">showing more info...</div>
          </div>
          <div class="py-2">
            <p>i18n in action:</p>
            <p>{{ $t("message.hello") }}</p>
          </div>
        </div>
      </div>
    </div>
    <RouterView />
  </div>
</template>

<style lang="postcss" scoped>
/* brut force - all tailwind (should be avoided ?) */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* recommeded way ?*/
.wrapper {
  @apply bg-gray-200 border-2 container p-2 text-sm font-sans;
}
.about-page {
  @apply bg-green-200 border container p-8 text-sm font-sans;
}
.home-page {
  @apply bg-blue-400 border  container p-8 text-sm font-sans;
}
</style>
