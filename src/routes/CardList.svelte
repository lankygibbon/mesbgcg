<script lang="ts">
  import type { List } from "../types/list.type";
  import { addModel, deleteModel, selectModel } from "../stores/cardStore";
  import { models } from "../stores/cardStore";
  import { card } from "../stores/cardStore";
  import { identity } from "svelte/internal";
  import type { fromJSON } from "postcss";
  export let list: List;

  // @ts-ignore
  import domtoimage from "dom-to-image";

  function downloadCard(): any {
    domtoimage
      .toPng(document.getElementById("card_template") as HTMLElement, {
        quality: 0.95,
      })
      .then(function (dataUrl: string) {
        var link = document.createElement("a");
        link.download =
          $card.name.replace(/[^0-9a-z]/gi, "_").toLowerCase() + ".png";
        link.href = dataUrl;
        link.click();
      });
  }

  function exportList() {
    var a = document.createElement("a");
    a.href =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify($models, null, 2));
    a.download = `${list.name.replace(/[^0-9a-z]/gi, "_").toLowerCase()}.json`;
    a.click();
  }

  let fileInput: HTMLElement;
  let files: FileList;

  function loadList(file: File) {
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = (e) => {
      $models = JSON.parse(e.target?.result as string);
    };
  }
</script>

<div class="p-2">
  <button
    class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    on:click={() => exportList()}>Export List</button
  >
  <button
    class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    on:click={() => fileInput.click()}
    on:change={() => loadList(files[0])}>Import List</button
  >
  <form class="p-2">
    <label>List Name:<input bind:value={list.name} /></label>
  </form>

  <div class="rounded bg-gray-100 p-1">
    <h2>Models</h2>
    <ul>
      {#each $models as item}
        <li
          class="justify-between flex rounded my-1 {item.id === $card.id
            ? 'bg-purple-200'
            : 'bg-slate-200'}"
        >
          <span class="align-middle px-2 py-1 my-auto w-full">{item.name}</span>

          <button
            class="mx-1 justify-center rounded-md border border-transparent bg-indigo-600 py-1 px-2 text-2xl font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            on:click={() => selectModel(item.id)}
            ><iconify-icon icon="mdi:eye" /></button
          >
          <button
            class="mx-1 justify-center rounded-md border border-transparent bg-indigo-600 py-1 px-2 text-2xl font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            on:click={() => {
              selectModel(item.id);
              downloadCard();
            }}><iconify-icon icon="mdi:download" /></button
          >
          <a href="/edit"
            ><button
              class="mx-1 justify-center rounded-md border border-transparent bg-indigo-600 py-1 px-2 text-2xl font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              on:click={() => selectModel(item.id)}
              ><iconify-icon icon="mdi:edit" /></button
            ></a
          >
          <button
            class="mx-1 justify-center rounded-md border border-transparent bg-indigo-600 py-1 px-2 text-2xl font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            on:click={() => deleteModel(item.id)}
            ><iconify-icon icon="mdi:delete-forever" /></button
          >
        </li>
      {/each}
    </ul>
  </div>

  <button
    class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 my-2 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    on:click={() => addModel()}>Add a Card</button
  >
  <input
    class="hidden"
    id="file-to-upload"
    type="file"
    accept=".json"
    bind:files
    bind:this={fileInput}
    on:change={() => loadList(files[0])}
  />
</div>
