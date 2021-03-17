import { IParcel, Parcel, ParcelInput } from "./parcel";

// TODO - Is it worth turning this into a class?
type OrderSummary = {
  totalCost: number;
  parcels: IParcel[];
};

interface IOrder {
  parcels: IParcel[];
  totalCost: number;
  orderSummary: OrderSummary;
}

export class Order implements IOrder {
  private _parcels: IParcel[];

  constructor(parcelInput: ParcelInput[]) {
    this._parcels = parcelInput.map((p) => new Parcel(p));
  }

  public get parcels(): IParcel[] {
    return this._parcels;
  }

  public get totalCost(): number {
    const result = this._parcels.reduce((acc, cur) => {
      return acc + cur.cost;
    }, 0);

    return result;
  }

  public get orderSummary() {
    return {
      totalCost: this.totalCost,
      parcels: this._parcels.map((p) => ({
        // Explicitly map fields to avoid revealing private implementation details
        height: p.height,
        width: p.width,
        depth: p.depth,
        cost: p.cost,
      })),
    };
  }
}
