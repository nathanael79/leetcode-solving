# 1277. 统计全为 1 的正方形子矩阵

## 思路

思路有：前缀和、DP。其实前缀和也算是DP。

### 前缀和：O(N^3)

#### 思路1：一维（边）前缀和

朴素算法：对于每一个位置`(i,j)`，把它当作正方形的右下角。从`(i,j)`开始往左上方向扩展边长`k`，如果补充的两条互相垂直的边都是1，那么扩展成功，结果加1。这样的时间复杂度为`O(N^4)`。

朴素算法中，“判断两条新边是否全为1”是重复工作，并且需要花`O(N)`时间。我们可以提前花费`O(N^2)`时间求出每一行、每一列的前缀和，那么在DP时就能通过`O(1)`来判断。设：

- `row[i][j]`：第`i`行中，前`j`个位置的总和（1的总个数）
- `col[j][i]`：第`j`列中，前`i`个位置的总和（1的总个数）

#### 思路2：二维（矩阵）前缀和

朴素算法：对于每一个位置`(i,j)`，把它当作正方形的右下角。从`(i,j)`开始往左上方向扩展边长`k`，如果正方形内的1的个数为`k*k`，那么这就是一个合法的正方形，结果加1。如此时间为`O(N^5)`。

朴素算法中，“数正方形内1的个数”需要花`O(N^2)`时间并且重复。这里我们可以用`O(N^2)`时间提前求出每一个左上方为`(0,0)`的矩阵的前缀和，那么在DP时我们就能在`O(1)`时间内求出任意子矩阵中的1的个数。这里用到了【容斥原理】。

### DP：能达到O(N^2)

- 思路1
  - 状态表示：`dp[x][y][k]`表示以`(x,y)`为右下角、边长为`k`的正方形是否全为1
  - 状态转移：`dp[x][y][k] = matrix[x][y] === 1 && dp[x-1][y][k-1] && dp[x][y-1][k-1] && dp[x-1][y-1][k-1]`
  - 时间：`O(N^3)`
  - 空间：`O(N^3)`
- 思路2：更快的版本
  - 状态表示：`dp[x][y]`表示以`(x,y)`为右下角的全1正方形的最大边长
  - 状态转移：`dp[x][y] = 1 + min( dp[x-1][y], dp[x][y-1], dp[x-1][y-1] )`，如果`matrix[x][y] === 1`
  - 时间：`O(N^2)`
  - 空间：`O(N^2)`

不同的状态定义对应不同的状态转移，时间复杂度也不尽相同。

## 相似题目

好题！感觉可以跟以下题目一起、做一个专题了：

- [1277. 统计全为 1 的正方形子矩阵](https://leetcode-cn.com/problems/count-square-submatrices-with-all-ones/)
- [1139. 最大的以 1 为边界的正方形](https://leetcode-cn.com/problems/largest-1-bordered-square/)
- [221. 最大正方形](https://leetcode-cn.com/problems/maximal-square/)
