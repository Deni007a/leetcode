import {lengthOfLongestSubstring} from "./longest-substring-without-repeating-characters";
describe('lengthOfLongestSubstring', () => {
    test('basic case', () => {
        expect(lengthOfLongestSubstring("abcabcbb")).toBe(3); // "abc"
    });

    test('all identical characters', () => {
        expect(lengthOfLongestSubstring("bbbbb")).toBe(1); // "b"
    });

    test('mixed repeats', () => {
        expect(lengthOfLongestSubstring("pwwkew")).toBe(3); // "wke"
    });

    test('repeats with gaps', () => {
        expect(lengthOfLongestSubstring("dvdf")).toBe(3); // "vdf"
    });

    test('short repeat', () => {
        expect(lengthOfLongestSubstring("aab")).toBe(2); // "ab"
    });

    test('all unique characters', () => {
        expect(lengthOfLongestSubstring("abcdefg")).toBe(7); // "abcdefg"
    });

    test('empty string', () => {
        expect(lengthOfLongestSubstring("")).toBe(0);
    });

    test('single space', () => {
        expect(lengthOfLongestSubstring(" ")).toBe(1);
    });

    test('single character', () => {
        expect(lengthOfLongestSubstring("a")).toBe(1);
    });

    test('two characters', () => {
        expect(lengthOfLongestSubstring("ab")).toBe(2);
        expect(lengthOfLongestSubstring("aa")).toBe(1);
    });

    test('long string with embedded repeats', () => {
        expect(lengthOfLongestSubstring("abcdeafghij")).toBe(10); // "bcdeafghij"
    });
});

