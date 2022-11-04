// 你这个学期必须选修 numCourses 门课程，记为 0 到 numCourses - 1 。

// 在选修某些课程之前需要一些先修课程。 先修课程按数组 prerequisites 给出，
// 其中 prerequisites[i] = [ai, bi] ，表示如果要学习课程 ai 则 必须 先学习课程  bi 。

// 例如，先修课程对 [0, 1] 表示：想要学习课程 0 ，你需要先完成课程 1 。
// 请你判断是否可能完成所有课程的学习？如果可以，返回 true ；否则，返回 false 。


var canFinish = function (numCourses, prerequisites) {
    const indegree = new Array(numCourses).fill(0);
    let map = new Map();
    let queue = [];
    for (let i = 0; i < prerequisites.length; ++i) {
        indegree[prerequisites[i][0]]++;
        if (map.has(prerequisites[i][1])) {
            map.get(prerequisites[i][1]).push(prerequisites[i][0]);
        } else {
            map.set(prerequisites[i][1], [prerequisites[i][0]]);
        }
    }
    for (let i = 0; i < numCourses; ++i) {
        if (indegree[i] === 0) {
            queue.push(i);
        }
    }
    let count = 0;
    while (queue.length) {
        let idx = queue.shift();
        count++;
        let toQueue = map.get(idx);
        if (toQueue && toQueue.length) {
            for (let i = 0; i < toQueue.length; ++i) {
                indegree[toQueue[i]]--;
                if (indegree[toQueue[i]] === 0) {
                    queue.push(toQueue[i]);
                }
            }
        }
    }
    return count === numCourses;
};