import chai from "chai";
import { InvalidInputError, MissingInputError } from "../errors";
import { Parcel } from "../models/parcel";

const { expect } = chai;

describe("Parcel", function () {
  const VALID_INPUT = {
    height: 5,
    width: 10,
    depth: 15,
  };

  describe("Create", function () {
    it("should create a new parcel, given valid input", () => {
      const result = new Parcel(VALID_INPUT);

      expect(result.height).to.equal(VALID_INPUT.height);
      expect(result.width).to.equal(VALID_INPUT.width);
      expect(result.depth).to.equal(VALID_INPUT.depth);
    });

    it("should throw if any input is negative", () => {
      const invalidInput = { ...VALID_INPUT, height: -7 };

      const result = () => new Parcel(invalidInput);

      expect(result).to.throw(InvalidInputError);
    });

    it("should throw if any input is zero", () => {
      const invalidInput = { ...VALID_INPUT, height: 0 };

      const result = () => new Parcel(invalidInput);

      expect(result).to.throw(InvalidInputError);
    });

    it("should throw if any input is missing", () => {
      const invalidInput = { ...VALID_INPUT, height: undefined };

      const result = () => new Parcel(invalidInput as any);

      expect(result).to.throw(MissingInputError);
    });

    it("should throw if any input is not a number", () => {
      const invalidInput = { ...VALID_INPUT, height: "banana" };

      const result = () => new Parcel(invalidInput as any);

      expect(result).to.throw(InvalidInputError);
    });
  });

  describe("Calculate cost", function () {
    // TODO - Use randomised, and more realistic package inputs

    it("should calculate cost correctly, given small parcel dimensions", () => {
      const result = new Parcel({ height: 9, width: 9, depth: 9 });

      expect(result.cost).to.equal(3);
    });

    it("should calculate cost correctly, given medium parcel dimensions", () => {
      const result = new Parcel({ height: 9, width: 12, depth: 9 });

      expect(result.cost).to.equal(8);
    });

    it("should calculate cost correctly, given large parcel dimensions", () => {
      const result = new Parcel({ height: 9, width: 55, depth: 9 });

      expect(result.cost).to.equal(15);
    });

    it("should calculate cost correctly, given extra-large parcel dimensions", () => {
      const result = new Parcel({ height: 9, width: 150, depth: 9 });

      expect(result.cost).to.equal(25);
    });

    // TODO - Refine this test case
    it("should calculate cost correctly, when one dimension is over the size limit", () => {
      const result = new Parcel({ height: 9, width: 51, depth: 9 });

      expect(result.cost).to.equal(15);
    });
  });
});
