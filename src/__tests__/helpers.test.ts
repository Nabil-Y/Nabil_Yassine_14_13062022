import { describe, expect, it } from "vitest";
import { capitalizeString } from "../utils/helpers";

describe("Capitalize String function should", () => {
  it("return Jean-Pierre with input of jean-pierre", () => {
    expect(capitalizeString("jean-pierre")).toBe("Jean-Pierre");
  });

  it("return O'Bryan Jacques with input of o'bryan jacques", () => {
    expect(capitalizeString("o'bryan jacques")).toBe("O'Bryan Jacques");
  });

  it("return emptystring with input of empty string", () => {
    expect(capitalizeString("")).toBe("");
  });
});
