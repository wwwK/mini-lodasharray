module.exports.concat = (...args) => {
    let concatinated = [];
    for (let i = 0; i < args.length; i++) {
        if (Array.isArray(args[i])) {
            for (let y = 0; y < args[i].length; y++) {
                concatinated.push(args[i][y]);
            }
        } else {
            concatinated.push(args[i]);
        }
    }
    return concatinated;
}

/**
 * TODO: 
 * uniq
 * range
 * shuffle
 * remove
 */