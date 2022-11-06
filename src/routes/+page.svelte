<script lang="ts">
  import { onMount } from "svelte";
  import { dataset_dev } from "svelte/internal";
  import Header from "./Header.svelte";
  import i_cardTypes from "../data/card-types.json";
  import i_factions from "../data/factions.json";
  import CardForm from "./CardForm.svelte";
  import type { Card } from "../types/card.type";

  type Type = {
    name: string;
    value: string;
  };

  type List = {
    name: string;
    model: Card[];
  };

  let factions: Type[] = [];
  let cardTypes: Type[] = [];

  let list: List = {
    name: "Test List",
    model: [],
  };

  let card: Card = {
    name: "Default",
    keywords: "",
    faction: "",
    type: "type",
    customType: "",
    color: "#ff4f02",
    textColor: "#303030",
    cost: "",
    description: "",

    mv: 0,
    f: 0,
    fs: 0,
    s: 0,
    d: 0,
    a: 0,
    w: 0,
    c: 0,
    wargear: [],
    options: [],
    magic: [],
    special: [],
    herioc: [],
    rules: [],
  };

  let showCardForm = false;
  let cardIndex = null;
  let cardName = "";
  let cardFaction = "";
  let cardType = "";
  let cardCost = "";
  let cardDescription = "";

  onMount(() => {
    factions = i_factions;
    cardTypes = i_cardTypes;
  });

  function addCardToList(): any {
    list.model = [...list.model, { ...card }];

    card.name = "";
  }
  function deleteCardFromList(index: number): any {
    list.model.splice(index, 1);
    list.model = list.model;
  }
</script>

<h1>Header</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>
<ul>
  {#each factions as faction}
    <li>{faction.name}</li>
  {/each}
  {#each cardTypes as type}
    <li>{type.name}</li>
  {/each}
  {#each list.model as item, index}
    <li>
      {item.name}<button on:click={() => deleteCardFromList(index)}>❌</button>
    </li>
  {/each}
</ul>
<CardForm {card} saveCard={addCardToList} />
