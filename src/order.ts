import { IParcel, Parcel, ParcelInput } from "./parcel";
import { IParcelConfig, ParcelConfig } from "./parcel-config";

interface IOrder {
  parcels: IParcel[];
  totalCost: number;
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
}
