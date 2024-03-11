function mergeSort(arr){
    if (arr.length == 1){
        return arr
    } else {
        let half = Math.floor(arr.length / 2);

        let left = mergeSort(arr.slice(0, half));
        let right = mergeSort(arr.slice(half));

        return merge(left, right)
    }
}

function merge(first, second){
    let res = []
    while (first.length && second.length){
        if (first[0] < second[0]) {
            res.push(first.shift())
        } else {
            res.push(second.shift())
        }
    }

    return [...res,...first,...second];
}

const arrrr = [5,6,3,2,6,8,9,1]

console.log(mergeSort(arrrr))

