# 停在原地的方案数

## 思路

典型的动态规划题。`dp[i][j]`表示走`i`步后到达位置`j`的方案数，则有状态转方程：

```js
dp[i][j] = dp[i-1][j] + // 不动
  dp[i-1][j-1] + // 往右走
  dp[i-1][j+1] // 往左走
```

初始状态为`dp[0] = [1, 0, 0, ..., 0]`，最终求的是`dp[steps][0]`。

关于题目限制：`steps <= 500, arrLen <= 2 * 10^6`，实际上后者是没用的，因为走`s`步最多能到达位置`s`，所以DP的复杂度为`O(S^2)`，不会超时。
