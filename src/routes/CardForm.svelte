<script lang="ts">
  import type { Card } from "../types/card.type";

  export let card: Card;
  export let saveCard: any;
</script>
<div>
  <div>
    Name: <input bind:value={card.name} />
  </div>

  <div>Keywords: <input bind:value={card.keywords} /></div>
  <div>Move: <input bind:value={card.mv} /></div>
  <div>Fight: <input bind:value={card.f} /></div>
  <div>Shoot: <input bind:value={card.fs} /></div> 
  <div>Strength: <input bind:value={card.s} /></div> 
  <div>Defence: <input bind:value={card.d} /></div>
  <div>Attacks: <input bind:value={card.a} /></div>
  <div>Wounds: <input bind:value={card.w} /></div> 
  <div>Courage: <input bind:value={card.c} /></div>
</div>
<div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
<button type="submit" class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" on:click={saveCard}>Save</button>
</div>