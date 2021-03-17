import { InvalidInputError, MissingInputError, ConfigError } from "../errors";
import { ParcelConfig, parcelConfig } from "../parcel-config";

export interface IParcel {
  width: number;
  height: number;
  depth: number;
  cost: number;
  weight: number;
}

// TODO - Remove type duplication
export type ParcelInput = {
  height: number;
  width: number;
  depth: number;
  weight: number;
};

export class Parcel implements IParcel {
  static CONFIG: ParcelConfig = parcelConfig;

  private _height: number;
  private _width: number;
  private _depth: number;
  private _weight: number;

  constructor({ height, width, depth, weight }: ParcelInput) {
    this.validate([height, width, depth, weight]);
    this._height = height;
    this._width = width;
    this._depth = depth;
    this._weight = weight;
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

  public get weight(): number {
    return this._weight;
  }

  public get cost(): number {
    const max = this.getLargestDimension();

    const type = Parcel.CONFIG.filter((c) => max >= c.min && max <= c.max);
    if (type.length !== 1)
      throw new ConfigError(
        "Invalid config. Multiple parcel type matches found."
      );

    const { weight: weightLimit, cost } = type[0];

    return (
      cost + (this.weight > weightLimit ? this.weight - weightLimit * 2 : 0)
    );
  }

  private getLargestDimension(): number {
    return [this.width, this.height, this.depth].reduce((acc, cur) =>
      cur > acc ? cur : acc
    );
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
