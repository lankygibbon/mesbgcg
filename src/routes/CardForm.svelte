<script lang="ts">
  import type { Card } from "../types/card.type";

  export let card: Card;
  export let saveCard: any;
</script>

<div>This is the card Form</div>
<input bind:value={card.name} />
<button on:click={saveCard}>Save</button>
