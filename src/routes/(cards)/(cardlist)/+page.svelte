<script lang="ts">
  import { onMount } from "svelte";
  import { dataset_dev } from "svelte/internal";
  import i_cardTypes from "../../../data/card-types.json";
  import i_factions from "../../../data/factions.json";
  import CardForm from "../../CardForm.svelte";
  import type { Card } from "../../../types/card.type";
  import CardTemplate from "../../CardTemplate.svelte";
  import CardList from "../../CardList.svelte";
  import type { List } from "../../../types/list.type";
  import { card } from "../../../stores/cardStore";
  import { v4 as uuidv4 } from "uuid";

  type Type = {
    name: string;
    value: string;
  };

  let factions: Type[] = [];
  let cardTypes: Type[] = [];

  let list: List = {
    name: "Test List",
    model: [],
  };

  let showCardForm = false;
  let cardIndex: any = null;
  let cardName = "";
  let cardFaction = "";
  let cardType = "";
  let cardCost = "";
  let cardDescription = "";

  onMount(() => {
    factions = i_factions;
    cardTypes = i_cardTypes;
  });
</script>

<div class="bg-white rounded-sm shadow-xl">
  <CardList bind:list />
</div>
