/*
    0/1 napsack dynamic and brute force solution
*/
const weight = [6, 5, 3, 8]
const profit = [3, 1, 4, 2]
const target = 10

// quite more efficent way
function maxProfitDynamic(){
    let maxProfit = 0

    weight.forEach((el, index)=>{
        maxProfit = Math.max(maxProfit, Math.floor(target/el)*profit[index])
    })

    return maxProfit
}

// driver
console.log("Max profit with dynamic programming:",maxProfitDynamic())

// brute force
function maxProfitBruteForce(){
    let maxProfit = {value:0, itemIndex:0}

    for (let i = 0; i < weight.length; i++) {
        let count = 0
        let iteration = 0
        while(true){
            if (count+weight[i]>target) break;

            count+=weight[i]
            iteration++
        }
        const currentProfit = iteration*profit[i]

        if (currentProfit>maxProfit.value) {
            maxProfit.value = currentProfit
            maxProfit.itemIndex = i
        }
    }
    return maxProfit
}
// driver
console.log("Max profit with brute force:",maxProfitBruteForce())
