/**
 * @param {string} s
 * @return {boolean}
 */
export let isValid = function (s) {
    //стек для хранения открывающих скобок
    const stack = [];
    // отображение закрывающих скобок в открывающие
    const map = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (let char of s) {
        // если это закрывающая скобка достаём верхнюю скобку из стека
        if (char in map) {
            const top = stack.pop();
            //если не совпадает с текущей, скобки некорректны
            if (top !== map[char]) {
                return false;
            }

        } else {
            //если это открывающая скобка — кладём в стек
            stack.push(char);
        }
    }
    // если стек пуст — все скобки закрыты корректно
    return stack.length === 0;
};
// console.log(isValid("()"))
// console.log(isValid("()[]{}"));
// console.log(isValid("(]"));
// console.log(isValid("([])"));
// console.log(isValid("([)]"));
