


var findDuplicate = function (paths) {
    const map = {};
    const res = [];
    for (const path of paths) {
        const [root, ...files] = path.split(' ');
        for (const file of files) {
            const [filename, content] = file.split('(');
            if (map[content]) {
                map[content].push(`${root}/${filename}`);
            } else {
                map[content] = [`${root}/${filename}`];
            }
        }
    }
    Reflect.ownKeys(map).forEach(i => {
        if (map[i].length > 1) {
            res.push(map[i]);
        }
    })
    return res;
};