//👉 Write your tests below here:
import { calculateNotes } from "./main";

const output = [
  [105, "You cannot do that to me. Do you think I am made of money?"],
  [5, 1],
  [10, 10],
  [15, 11],
  [20, 100],
  [25, 101],
  [30, 110],
  [35, 111],
  [40, 200],
  [45, 201],
  [50, 210],
  [55, 211],
  [60, 300],
  [65, 301],
  [70, 310],
  [75, 311],
  [80, 400],
  [85, 401],
  [90, 410],
  [95, 411],
  [100, 500],
];

describe("Calculate minimum amount of notes needed", function () {
  it.each(output)(`Should return %i as %i`, function (money, notes) {
    expect(calculateNotes(money)).toBe(notes);
  });
});
