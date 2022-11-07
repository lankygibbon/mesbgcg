<script lang='ts'>
    import type {List} from "../types/list.type"
    export let list:List;
    export let selectCard:any;
    export let deleteCardFromList:any;
    export let addACard:any;
</script>

<ul>
{#each list.model as item, index}
    <li>
      <span on:click={() => selectCard(index)}>{item.name}</span><button on:click={() => deleteCardFromList(index)}>❌</button>
    </li>
    {/each}
</ul>

<button on:click={() => addACard()}>Add a Card</button>