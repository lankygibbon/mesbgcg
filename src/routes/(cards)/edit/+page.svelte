<script lang="ts">
  import type { PageData } from "./$types";
  import CardForm from "../../CardForm.svelte";
  import { card } from "../../../stores/cardStore";

  export let data: PageData;
</script>

<div class="bg-white rounded-sm shadow-xl">
  <CardForm bind:card={$card} />
</div>
