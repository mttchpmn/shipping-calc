import { InvalidInputError, MissingInputError } from "./errors";

export interface IParcel {
  width: number;
  height: number;
  depth: number;
  cost: number;
  // TODO - Weight will be relevant in future
}

export type ParcelInput = {
  height: number;
  width: number;
  depth: number;
};

export class Parcel implements IParcel {
  private _height: number;
  private _width: number;
  private _depth: number;

  constructor({ height, width, depth }: ParcelInput) {
    this.validate([height, width, depth]);
    this._height = height;
    this._width = width;
    this._depth = depth;
  }

  public get height(): number {
    return this._height;
  }

  public get width(): number {
    return this._width;
  }

  public get depth(): number {
    return this._depth;
  }

  public get cost(): number {
    // TODO - Implement cost calculation
    return 10;
  }

  private validate(input: number[]): void {
    input.forEach((i: number) => {
      if (i === undefined)
        throw new MissingInputError("Missing required input.");

      if (typeof i !== "number")
        throw new InvalidInputError("Input must be a number.");

      if (Math.sign(i) < 1)
        throw new InvalidInputError("Input must be positive.");
    });
  }
}
