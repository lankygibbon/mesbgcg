<script lang="ts">
  import { models } from "../../stores/cardStore";
</script>

{#each $models as model}
  <div>{model.id}</div>
{/each}
<div>This is the printing page</div>
