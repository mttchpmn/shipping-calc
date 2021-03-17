import { IParcel, Parcel, ParcelInput } from "./parcel";

// TODO - Is it worth turning this into a class?
type OrderSummary = {
  totalCost: number;
  fastShipping: {
    selected: boolean;
    cost: number;
  };
  parcels: IParcel[];
};

export interface IOrder {
  parcels: IParcel[];
  totalCost: number;
  summary: OrderSummary;
}

export class Order implements IOrder {
  private _parcels: IParcel[];
  private _fastShipping: boolean;

  // TODO - Use an object for fastShipping flag for better semantics
  constructor(parcelInput: ParcelInput[], fastShipping = false) {
    this._parcels = parcelInput.map((p) => new Parcel(p));
    this._fastShipping = fastShipping;
  }

  public get parcels(): IParcel[] {
    return this._parcels;
  }

  public get fastShipping(): boolean {
    return this._fastShipping;
  }

  public get totalCost(): number {
    const result = this._parcels.reduce((acc, cur) => {
      return acc + cur.cost;
    }, 0);

    return this.fastShipping ? result * 2 : result;
  }

  public get summary() {
    return {
      totalCost: this.totalCost,
      fastShipping: {
        selected: this.fastShipping,
        cost: this._fastShipping ? this.totalCost / 2 : 0,
      },
      parcels: this.parcels.map((p) => ({
        // Explicitly map fields to avoid revealing private implementation details
        height: p.height,
        width: p.width,
        depth: p.depth,
        weight: p.weight,
        cost: p.cost,
      })),
    };
  }
}
