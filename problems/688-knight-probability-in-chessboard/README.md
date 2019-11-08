# 688. “马”在棋盘上的概率

## 思路

> 马还在棋盘上的概率 = 有效路径数 / 8^K

这里“有效”是指最终落在棋盘上。同一个位置`B`可能有多个来源`A`（上一个位置），所以`B`的值是累加上一次所有的`A`，这种递推关系就是动态规划中的状态转移。

状态：`dp[i][x][y]`表示走`i`步后到达`(x,y)`的路径数，状态转移：`dp[i][x][y] = dp[i-1][8个方向]`。由此也可以看出，我们只需要一个滚动数组，就能将空间压缩到二维：`dp[x][y]`。

最终将所有`(x,y)`上的数字相加，就得到有效路径数。

## 相似题型

属于二维/坐标型DP。

- [576. 出界的路径数](https://leetcode-cn.com/problems/out-of-boundary-paths/)