import {longestCommonPrefix, longestCommonPrefix2} from "./longest-common-prefix";
test("ищем самый длинный префикс слова",()=>{
    expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
    expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("");

    expect(longestCommonPrefix2(["flower", "flow", "flight"])).toBe("fl");
    expect(longestCommonPrefix2(["dog", "racecar", "car"])).toBe("");

})