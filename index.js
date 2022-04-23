const check = (array) => {
    let flag = true
    array.forEach((x, i) => {
        if (x !== i + 1) {
            flag = false
        }
    })
    if (flag) {
        return true
    }
    else {
        return false
    }
}

let arr,
    n = 5,
    k = 0,
    bool = true,
    a=1

while (bool) {
    arr = Array(n).fill(0)
    for (let i = 1; i <= n; i++) {
        let r = Math.ceil(Math.random() * (n + 1 - i))
        
    }
    if (check(arr)) {
        bool = false
    }
    k++
    console.log('xxxxxxxx')
}

console.log(arr)
console.log(k)





// let sum=0, k = 0

// for (let j = 0; j < 100; j++) {
//     let arr = [], n = 5, rands = [], bool = true

//     while (bool) {
//         for (let i = 1; i <= n; i++) {
//             let r = Math.floor(Math.random() * n)
//             while (rands.includes(r)) {
//                 r = Math.floor(Math.random() * n)
//             }
//             rands.push(r)
//             arr[r] = i
//         }

//         if (check(arr)) {
//             bool = false
//             console.log(k)
//         }
//         else {
//             rands = []
//         }
//         k++
//     }
// }

// console.log(k/100)