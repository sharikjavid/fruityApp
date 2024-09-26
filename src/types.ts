// src/types/index.ts

export interface Nutritions {
  calories: number;
  fat: number;
  sugar: number;
  carbohydrates: number;
  protein: number;
}

export interface FruitType {
  name: string;
  id: number;
  family: string;
  order: string;
  genus: string;
  nutritions: Nutritions;
}

export interface JarItem {
  fruit: FruitType;
  count: number;
}
