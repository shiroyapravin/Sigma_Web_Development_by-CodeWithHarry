async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45);
        }, 1000);
    })
}

function sum(i, j, k) {
    return i + j + k
}

(async function main() {
    let a = await sleep()
    console.log(a)
    let b = await sleep()
    console.log(b)

    let [x, y, ...rest] = [1, 5, 54, 85, 10, 2]
    console.log(x, y, ...rest)
    console.log(x, y, rest)

    let obj = {
        x1: 1,
        y1: 3,
        z1: 6
    }
    let { x1, y1 } = obj
    console.log(x1, y1)

    let arr = [1, 7, 3]
    // console.log(arr[0] + arr[1] + arr[2])
    // console.log(sum(arr[0], arr[1], arr[2]))
    console.log(sum(...arr))
})();