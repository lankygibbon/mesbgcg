<script lang="ts">
  import type { Card } from "../types/card.type";
  export let card: Card;
</script>

<form class="p-2">
  <div class="grid gap-2 mb-6">
    <div>
      <label
        for="name"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >Name</label
      >
      <input
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        type="text"
        id="name"
        bind:value={card.name}
      />
    </div>
    <div>
      <label
        for="keywords"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >Keywords</label
      >
      <input
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        type="text"
        id="keywords"
        bind:value={card.keywords}
      />
    </div>
  </div>
  <div
    class="grid gap-2 mb-6 lg:grid-cols-8 md:grid-cols-4 sm:grid-cols-2 grid-cols-2 text-center"
  >
    <div>
      <label
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        for="mv">Mv</label
      >
      <input
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        id="mv"
        bind:value={card.mv}
      />
    </div>
    <div>
      <label
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        for="f">F</label
      >
      <input
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        id="f"
        bind:value={card.f}
      />
    </div>
    <div>
      <label
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        for="fs">Sh</label
      >
      <input
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        id="fs"
        bind:value={card.fs}
      />
    </div>
    <div>
      <label
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        for="s">S</label
      >
      <input
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        id="s"
        bind:value={card.s}
      />
    </div>
    <div>
      <label
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        for="d">D</label
      >
      <input
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        id="d"
        bind:value={card.d}
      />
    </div>
    <div>
      <label
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        for="a">A</label
      >
      <input
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        id="a"
        bind:value={card.a}
      />
    </div>
    <div>
      <label
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        for="w">W</label
      >
      <input
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        id="w"
        bind:value={card.w}
      />
    </div>
    <div>
      <label
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        for="c">C</label
      >
      <input
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        id="c"
        bind:value={card.c}
      />
    </div>
    <div>
      <label
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        for="c">Mi</label
      >
      <input
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        id="c"
        bind:value={card.might}
      />
    </div>
    <div>
      <label
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        for="c">Wi</label
      >
      <input
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        id="c"
        bind:value={card.will}
      />
    </div>
    <div>
      <label
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        for="c">Ft</label
      >
      <input
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        id="c"
        bind:value={card.fate}
      />
    </div>
  </div>
  <div class="flex items-center mb-4">
    <input
      id="hero"
      type="checkbox"
      bind:checked={card.hero}
      class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    />
    <label
      for="hero"
      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >Hero</label
    >
  </div>
</form>

<div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
  <a href="/"
    ><button
      type="submit"
      class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >Close</button
    ></a
  >
</div>
