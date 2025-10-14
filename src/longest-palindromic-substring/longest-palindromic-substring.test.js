import { longestPalindrome, longestPalindrome2 } from "./longest-palindromic-substring.js";

describe("longestPalindrome all, длина полидрома", () => {
    test("longestPalindrome", () => {
        expect(longestPalindrome("babad")).toBe("aba");
        expect(longestPalindrome("cbbd")).toBe("bb");
    })
    test("longestPalindrome2", () => {
        expect(longestPalindrome2("babad")).toBe("aba");
        expect(longestPalindrome2("cbbd")).toBe("bb");
    })
})