function arraySubset(source, subset) {
    if(subset.length > source.length) {
        return false;
    }

    for(let i = 0; i < subset.length; i++) {
        if(source.includes(subset[i])) {
            source = getTheSameArrayExceptValue(source, subset[i]);
        }else {
            return false;
        }
    }

    return true;
}
function getTheSameArrayExceptValue(source, valueToDelete) {
    source.splice(source.indexOf(valueToDelete), 1);
    return source;
}

console.log(arraySubset([2, 1, 3], [1, 2])) // -> true
console.log(arraySubset([2, 1, 1, 3], [1, 2, 3])) // -> true
console.log(arraySubset([1, 1, 1, 3], [1, 3, 3])) // -> false
console.log(arraySubset([1, 2], [1, 2, 3])) // -> false

