<script lang="ts">
  import type { List } from "../types/list.type";
  export let list: List;
  export let selectCard: any;
  export let deleteCardFromList: any;
  export let addACard: any;

  function exportList() {
    var a = document.createElement("a");
    a.href =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(list, null, 2));
    a.download = `${list.name.replace(/[^0-9a-z]/gi, "_").toLowerCase()}.json`;
    a.click();
  }

  let fileInput: HTMLElement;
  let files: FileList;

  function loadList(file: File) {
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = (e) => {
      list = JSON.parse(e.target?.result as string);
    };
  }
</script>

<div class="p-2">
<button class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" on:click={() => exportList()}>Export List</button>
<button class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" on:click={() => fileInput.click()} on:change={() => loadList(files[0])}>Import List</button>
<form class="p-2"><label>List Name:<input bind:value={list.name}/></label></form>

<h2>Models</h2>
<div class="rounded bg-gray-100">
<ul>
  {#each list.model as item, index}
    <li class="justify-between flex rounded my-1 hover:bg-slate-200">
      <span class="align-middle px-2 py-1 my-auto w-full" on:click={() => selectCard(index)} on:keydown={() => null}>{item.name}</span>
      <button class=" justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" on:click={() => deleteCardFromList(index)}>DELETE</button>
    </li>
  {/each}
</ul>
</div>

<button class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 my-2 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" on:click={() => addACard()}>Add a Card</button>
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
