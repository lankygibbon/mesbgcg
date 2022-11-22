export type Card = {
  name: string;
  keywords: string;
  faction: string;
  type: string;
  customType: string;
  color: string;
  textColor: string;
  cost: string;
  description: string;
  hero: boolean;

  mv: number;
  f: number;
  fs: number;
  s: number;
  d: number;
  a: number;
  w: number;
  c: number;
  might: number;
  will: number;
  fate: number;
  wargear: string[];
  options: string[];
  magic: string[];
  special: string[];
  herioc: {
    move: boolean,
    shoot: boolean,
    combat: boolean,
    resolve: boolean,
    march: boolean,
    channeling: boolean,
    accuracy: boolean,
    strike: boolean,
    defence: boolean,
    strength: boolean,
    challenge: boolean,
  };
  rules: string[];
};