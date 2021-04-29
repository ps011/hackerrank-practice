/**
 * @param {string[][]} paths
 * @return {string}
 */
 var destCity = function(paths) {
    const starts = [];  
    paths.forEach(path => starts.push(path[0]));
    for (let i = 0; i < paths.length; i++) {
        if (!starts.includes(paths[i][1])) {
            return paths[i][1]
        }
    }
  };

  
  console.log(destCity([["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]))