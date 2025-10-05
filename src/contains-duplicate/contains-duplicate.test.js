import {containsDuplicate, containsDuplicate2} from "./contains-duplicate.js";

test("contains-duplicate ,содержит-дубликат", () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
    expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
    expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);

    expect(containsDuplicate2([1, 2, 3, 1])).toBe(true);
    expect(containsDuplicate2([1, 2, 3, 4])).toBe(false);
    expect(containsDuplicate2([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
})