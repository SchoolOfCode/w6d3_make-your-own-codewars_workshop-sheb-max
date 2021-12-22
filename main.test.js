//👉 Write your tests below here:
import { calculateNotes } from "./main";

const output = [
  [100, 500],
  [70, 310],
  [65, 301],
];

describe("Calculate minimum amount of notes needed", function () {
  it.each(output)(`Should return %i as %i`, function (money, notes) {
    expect(calculateNotes(money)).toBe(notes);
  });
});
