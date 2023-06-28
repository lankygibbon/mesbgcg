import { writable } from "svelte/store";
import { v4 as uuidv4 } from "uuid";
import type { Card } from "../types/card.type";

let modelsInit: Card[] = [];
export const models = writable(modelsInit);

export const addModel = () => {
  models.update((cur: Card[]) => {
    const newModels = [
      ...cur,
      {
        id: uuidv4(),
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
      },
    ];

    console.log(newModels);
    return newModels;
  });
};

export const deleteModel = (id: string) => {
  models.update((models: Card[]) => {
    card.set(cardInit);
    return models.filter((model) => model.id !== id);
  });
};

export const selectModel = (id: string) => {
  models.update((models: Card[]) => {
    const selectedModel = models.find((model) => model.id === id);
    if (selectedModel) {
      card.set(selectedModel);
    }
    console.log(selectedModel);
    return models;
  });
};


let cardInit: Card = {
  id: "0",
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

export const card = writable(cardInit);
