# 1039. 多边形三角剖分的最低得分

## 思路

不同的切割方式会影响之后的选择，导致最终的结果不同，问最小和，这是一个DP问题。

`dp[i][j]`表示从第`i`个点到第`j`个点组成的多边形切割后能达到的最小和。接着枚举`(i, j)`区间的点`k`，选定某一点时，可以切出来一个三角形`(i, k, j)`，然后分成两个子问题：`dp[i][k]`与`dp[k][j]`。能想出这个思路，难度倒是不小。

时间复杂度：`O(N^3)`。