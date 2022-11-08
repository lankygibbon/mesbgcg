<script lang="ts">
  import { onMount } from "svelte";
  import { dataset_dev } from "svelte/internal";
  import Header from "./Header.svelte";
  import i_cardTypes from "../data/card-types.json";
  import i_factions from "../data/factions.json";
  import CardForm from "./CardForm.svelte";
  import type { Card } from "../types/card.type";
  import CardTemplate from "./CardTemplate.svelte";
  import CardList from "./CardList.svelte";
  import type { List } from "../types/list.type";

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

  function addCardToList(): any {
    if (cardIndex != null) {
      list.model[cardIndex] = { ...card };
      card = card;
    } else {
      list.model = [...list.model, { ...card }];
      card = { ...card };
    }
    showCardForm = false;
  }
  function deleteCardFromList(index: number): any {
    list.model.splice(index, 1);
    list.model = list.model;
  }
  function selectCard(index: number): any {
    card = { ...list.model[index] };
    cardIndex = index;
    showCardForm = true;
  }
  function addACard(): any {
    card = {
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
    cardIndex = null;
    showCardForm = true;
  }
</script>

<h1 class="text-3xl font-bold underline">Header</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>
<div class="flex">
  <div class="max-w-sm mx-auto">
    <CardTemplate bind:card />
  </div>
  {#if showCardForm}
    <div class="max-w-sm mx-auto">
      <CardForm bind:card saveCard={addCardToList} />
    </div>
  {/if}
  {#if !showCardForm}
    <div class="max-w-sm mx-auto">
      <CardList bind:list {selectCard} {deleteCardFromList} {addACard} />
    </div>
  {/if}
</div>
