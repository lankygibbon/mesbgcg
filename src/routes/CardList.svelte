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

<ul>
  {#each list.model as item, index}
    <li>
      <span on:click={() => selectCard(index)} on:keydown={() => null}
        >{item.name}</span
      ><button on:click={() => deleteCardFromList(index)}>❌</button>
    </li>
  {/each}
</ul>

<button on:click={() => addACard()}>Add a Card</button>
<button on:click={() => exportList()}>Export List</button>
<input
  class="hidden"
  id="file-to-upload"
  type="file"
  accept=".json"
  bind:files
  bind:this={fileInput}
  on:change={() => loadList(files[0])}
/>
<button on:click={() => fileInput.click()} on:change={() => loadList(files[0])}
  >Import List</button
>
