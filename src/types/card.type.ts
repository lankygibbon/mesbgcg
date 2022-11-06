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