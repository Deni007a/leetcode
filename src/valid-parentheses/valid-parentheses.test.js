import {isValid} from "./valid-parentheses";

test("проверяем на валидность скобки",()=>{
    expect(isValid("()")).toBe(true);
    expect(isValid("()[]{}")).toBe(true);
    expect(isValid("(]")).toBe(false);
    expect(isValid("([])")).toBe(true);
    expect(isValid("([)]")).toBe(false);
})