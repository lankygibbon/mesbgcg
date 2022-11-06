<script lang="ts">
  import { onMount } from "svelte";
  import { dataset_dev } from "svelte/internal";
  import Header from "./Header.svelte";
  import i_cardTypes from "../data/card-types.json";
  import i_factions from "../data/factions.json";

  type Type = {
    name: string;
    value: string;
  };
  type Card = {
    name: string;
    keywords: string;
    faction: string;
    type: string;
    customType: string;
    color: "#ff4f02";
    textColor: "#303030";
    cost: "";
    description: "";

    mv: number;
    f: number;
    fs: number;
    s: number;
    d: number;
    a: number;
    w: number;
    c: number;
    wargear: string[];
    options: string[];
    magic: string[];
    special: string[];
    herioc: string[];
    rules: string[];
  };

  let factions: Type[] = [];
  let cardTypes: Type[] = [];

  let list = {
    name: "",
    model: [],
  };
  let card: Card = {
    name: "",
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

  function addCardToList(list, card: Card) {
    if (this.cardIndex != null) {
      this.list[list][this.cardIndex] = card;
    } else {
      this.list[list].push(card);
    }

    this.card = card;
    this.showCardForm = false;
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
</ul>
