// In a town, there are n people labeled from 1 to n. There is a rumor that one of these people is secretly the town judge.
//
//     If the town judge exists, then:
//
// The town judge trusts nobody.
// Everybody (except for the town judge) trusts the town judge.
//     There is exactly one person that satisfies properties 1 and 2.
// You are given an array trust where trust[i] = [ai, bi] representing that the person labeled ai trusts the person labeled bi.
//
//     Return the label of the town judge if the town judge exists and can be identified, or return -1 otherwise.
//
//
//
//     Example 1:
//
// Input: n = 2, trust = [[1,2]]
// Output: 2
// Example 2:
//
// Input: n = 3, trust = [[1,3],[2,3]]
// Output: 3
// Example 3:
//
// Input: n = 3, trust = [[1,3],[2,3],[3,1]]
// Output: -1

/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    if (trust.length < 1 && n ===1) return n;
    // if (trust.length < 1 && n !==1) return n;
    let hashTable = {};
    let hashTableJudges = {};
    for (let i = 0; i < trust.length; i++) {
        if (!hashTable[trust[i][1]]) {
            hashTable[trust[i][1]] = [trust[i][0]]
            if (!hashTableJudges[trust[i][0]]) {
                hashTableJudges[trust[i][0]] = 1;
            }
        } else {
            hashTable[trust[i][1]].push(trust[i][0])
            if (!hashTableJudges[trust[i][0]]) {
                hashTableJudges[trust[i][0]] = 1;
            }
        }

    }
    for (let item in hashTable) {
        if (hashTable[item].length === n-1) {
            if (hashTableJudges[item]) {
                return -1;
            }
            console.log(hashTable)
            console.log(hashTableJudges)
            return item
            // console.log(item)
        }
    }
    console.log(hashTable)
    return -1


};



var findJudge1 = function(n, trust) {

    let answer = -1;
    let labelPeople = Array(n+1).fill(0);

    for(let [i,j] of trust){
        labelPeople[i]-=1;
        labelPeople[j]+=1;
    }


    for(let i = 1; i < labelPeople.length; i++){
        if(n-1 === labelPeople[i]) return i;
    }

    return answer;
};

