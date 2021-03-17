export type Config = {
  type: string; // TODO - This should be an enum
  min: number;
  max: number;
  weight: number;
  cost: number;
};

export type ParcelConfig = Config[];

// TODO - Make this it's own class rather than config file?
export const parcelConfig = [
  {
    type: "small",
    min: 0,
    max: 9,
    weight: 1,
    cost: 3,
  },
  {
    type: "medium",
    min: 10,
    max: 49,
    weight: 3,
    cost: 8,
  },
  {
    type: "large",
    min: 50,
    max: 99,
    weight: 6,
    cost: 15,
  },
  {
    type: "extra-large",
    min: 100,
    max: Number.POSITIVE_INFINITY, // TODO - Handle this more elegantly
    weight: 10,
    cost: 25,
  },
];
