/*
 * Complete the 'acmTeam' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts STRING_ARRAY topic as parameter.
 */

function acmTeam(topics) {
    let totalTeams = 0, max = -1;
    for (let i = 0; i < topics.length; i++) {
        for(let j = i+1; j < topics.length; j++) {
            let count = getTotalKnownTopics(topics[i], topics[j])
            // console.log(count)
            if (count > max) {
                totalTeams = 0;
                max = count;
                totalTeams++;
            } else if (count === max) {
                totalTeams++
            }
        }
    }
    return [max, totalTeams];
}

function getTotalKnownTopics(topic1, topic2) {
    let total = 0;
    for(let i = 0; i < topic1.length; i++) {
        if (topic1[i] === '1' || topic2[i] === '1') {
            total++
        }
    }
    return total
}


console.log(acmTeam(['10101', '11110', '00010'])) // OP -> [5, 1]