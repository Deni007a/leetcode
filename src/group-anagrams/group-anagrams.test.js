import  {groupAnagrams} from './group-anagrams.js';

test('группирует анаграммы', () => {
    const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
    const output = groupAnagrams(input);

    // Проверка: общее количество групп
    expect(output.length).toBe(3);

    // Проверка: каждая группа содержит ожидаемые слова
    expect(output).toEqual(
        expect.arrayContaining([
            expect.arrayContaining(["eat", "tea", "ate"]),
            expect.arrayContaining(["tan", "nat"]),
            expect.arrayContaining(["bat"])
        ])
    );
});