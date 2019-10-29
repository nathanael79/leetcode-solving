# 718. 重复子数组的最大长度

## 题意

给定两个整数数组A、B，求它们的公共子数组的最大长度。

## 思路

求“最长公共子串”。`dp[i][j]`表示`A[i:]`与`B[j:]`的公共前缀的长度，则有：

> dp[i][j] = A[i] === B[j] ? (dp[i-1][j-1] + 1) : 0

## 总结

总结一下LCS和LCS（皮一下）：

### 最长公共子序列问题

`dp[i][j]`表示`A[:i]`和`B[:j]`的公共子序列的最大长度，则有：

> dp[i][j] = (A[i] === B[j]) ? (dp[i-1][j-1] + 1) : Math.max(dp[i-1][j] + dp[i][j-1])

因为是递增的，所以最终答案就是`dp[A.length][B.length]`。

### 最长公共子串问题

`dp[i][j]`有两种含义，都可以理解：

- 以`A[:i]`和`B[:j]`结尾的公共子串的长度
- 以`A[i:]`和`B[j:]`开头的公共前缀的长度

则递推式为：

> dp[i][j] = A[i] === B[j] ? (dp[i-1][j-1] + 1) : 0

因为不是递增的，所以需要用变量来记录最大值。