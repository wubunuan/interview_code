json = {
    id: 1,
    children: [
        { id: 2, children: [{ id: 3, children: [] }] },
        {
            id: 4,
            children: [
                { id: 5, children: [] },
                { id: 6, children: [] },
            ],
        },
        { id: 7, children: [] },
    ],
};
let result = []
// 独立完成
function findNode(obj) {
    const res = []
    function dfs(obj, currPath, target) {
        if (!obj) return;
        if (obj.id === target) {
            currPath += obj.id
            res.push(currPath)
            return
        }
        currPath += obj.id + '->'
        obj.children && obj.children.forEach(ele => {
            dfs(ele, currPath, target)
        });
    }
    dfs(obj, '', 5)
    return res;
}
console.log(findNode(json));
