/**
 * @param {string} s
 * @return {number}
 */

const firstUniqueChar = s => {
    const hash = {};
    for (let i = 0 ; i < s.length;i++) {
        if (!hash[s[i]]) hash[s[i]] = 1;
        else hash[s[i]] +=1;
    }

    for (let i = 0; i < s.length; i++) {
        if (hash[s[i]] === 1) return i;
    }

    return -1;
}