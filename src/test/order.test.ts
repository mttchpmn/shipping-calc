import chai from "chai";
import { InvalidInputError } from "../errors";
import { Order } from "../order";

const { expect } = chai;

describe("Order", function () {
  const VALID_PARCEL_INPUTS = [
    {
      height: 50,
      width: 100,
      depth: 150,
    },
    {
      height: 5,
      width: 10,
      depth: 15,
    },
  ];

  describe("Create", function () {
    it("should create a new order, given valid input", () => {
      const result = () => new Order(VALID_PARCEL_INPUTS);

      expect(result).to.not.throw;
    });

    it("should throw if any parcel input is invalid", () => {
      const invalidInput = [...VALID_PARCEL_INPUTS, { height: "foo" }];

      const result = () => new Order(invalidInput as any);

      expect(result).to.throw(InvalidInputError);
    });
  });

  describe("Calculate cost", function () {
    it("should calculate total order cost correctly", () => {
      const result = new Order(VALID_PARCEL_INPUTS);

      expect(result.totalCost).to.equal(33);
    });
  });

  describe("Generate summary", function () {
    it("should calculate order summary correctly", () => {
      const result = new Order(VALID_PARCEL_INPUTS);

      const expectedResult = {
        totalCost: 33,
        parcels: [
          {
            height: 50,
            width: 100,
            depth: 150,
            cost: 25,
          },
          {
            height: 5,
            width: 10,
            depth: 15,
            cost: 8,
          },
        ],
      };

      expect(result.summary).to.deep.equal(expectedResult);
    });
  });
});
