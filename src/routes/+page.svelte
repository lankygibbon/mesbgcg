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
  import html2canvas from "html2canvas";

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
    hero: false,

    mv: 0,
    f: 0,
    fs: 0,
    s: 0,
    d: 0,
    a: 0,
    w: 0,
    c: 0,
    might: 0,
    will: 0,
    fate: 0,
    wargear: [],
    options: [],
    magic: [],
    special: [],
    herioc: {
      move: false,
      shoot: false,
      combat: false,
      resolve: false,
      march: false,
      channeling: false,
      accuracy: false,
      strike: false,
      defence: false,
      strength: false,
      challenge: false,
    },
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
  function downloadCard(): any {
    html2canvas(document.getElementById("card_template") as HTMLElement).then(
      (canvas) => {
        var link = document.createElement("a");
        link.download =
          card.name.replace(/[^0-9a-z]/gi, "_").toLowerCase() + ".png";
        link.href = canvas.toDataURL();
        link.click();
      }
    );
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
      hero: false,

      mv: 0,
      f: 0,
      fs: 0,
      s: 0,
      d: 0,
      a: 0,
      w: 0,
      c: 0,
      might: 0,
      will: 0,
      fate: 0,
      wargear: [],
      options: [],
      magic: [],
      special: [],
      herioc: {
        move: false,
        shoot: false,
        combat: false,
        resolve: false,
        march: false,
        channeling: false,
        accuracy: false,
        strike: false,
        defence: false,
        strength: false,
        challenge: false,
      },
      rules: [],
    };
    cardIndex = null;
    showCardForm = true;
  }
</script>

<div class="min-h-screen flex items center bg-slate-300">
  <div class="flex-1 max-w-5xl mx-auto p-10">
    <div class="grid grid-cols1 sm:grid-cols-2 gap-4">
      <div class="card_template" id="card_template">
        <CardTemplate bind:card />
      </div>
      {#if showCardForm}
        <div class="bg-white rounded-sm shadow-xl">
          <CardForm bind:card {downloadCard} saveCard={addCardToList} />
        </div>
      {/if}
      {#if !showCardForm}
        <div class="bg-white rounded-sm shadow-xl">
          <CardList bind:list {selectCard} {deleteCardFromList} {addACard} />
        </div>
      {/if}
    </div>
  </div>
</div>
