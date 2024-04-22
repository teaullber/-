//用于调试
function knapSack(weight, values, w) {
    let n = weight.length - 1
    let f = [[]]
    //这里的w是背包的容量
    //这里用一个for循环来填充第一行 为了解决i-1=-1的情况
    for (let j = 0; j <= w; j++) {
        if (weight[0] <= j) {
            f[0][j] = values[0]
        } else {
            f[0][j] = 0
        }
    }
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j <= w; j++) {
            //这里i从1开始取值，因为上面的for循环已经解决了i=0的时候的问题
            if (!f[i]) {
                f[i] = []
            }
            //当放入物品重量大于背包容量时
            if (weight[i] > j) {
                f[i][j] = f[i - 1][j]
            } else {
                //当背包剩余容量足够放下第i个物品的时候
                f[i][j] = Math.max(f[i - 1][j], f[i - 1][j - weight[i]] + values[i])
            }
        }
    }
    return f[n][w]
}

knapSack([2, 2, 6, 5, 4], [6, 3, 5, 4, 6], 10)