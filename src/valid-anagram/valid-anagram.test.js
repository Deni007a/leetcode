import {isAnagram, isAnagram2} from "./valid-anagram.js";

test("анограммы", () => {
    expect(isAnagram("anagram", "nagaram")).toBe(true);
    expect(isAnagram("rat", "car")).toBe(false);

    expect(isAnagram2("anagram", "nagaram")).toBe(true);
    expect(isAnagram2("rat", "car")).toBe(false);
})
