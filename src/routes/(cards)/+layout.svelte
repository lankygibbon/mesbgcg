<script lang="ts">
  import type { LayoutData } from "../$types";
  import { card } from "../../stores/cardStore";
  import CardTemplate from "../CardTemplate.svelte";

  export let data: LayoutData;
</script>

<div class="min-h-screen flex items center bg-slate-300">
  <div class="flex-1 max-w-8xl mx-auto p-10">
    <div class="grid grid-cols1 sm:grid-cols-2 gap-4">
      <div class="card_template" id="card_template">
        <CardTemplate bind:card={$card} />
      </div>
      <slot />
    </div>
  </div>
</div>
