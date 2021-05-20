/*
 * Complete the 'matchingStrings' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY strings
 *  2. STRING_ARRAY queries
 */

function matchingStrings(strings, queries) {
    const map = new Map();
    const result = [];
    strings.forEach(string => {
        map.set(string, (map.get(string) || 0) + 1);
    });
    queries.forEach(query => {
        if (map.has(query)) {
            result.push(map.get(query));
        } else {
            result.push(0);
        }
    });
    return result;
}