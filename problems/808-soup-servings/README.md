# 808. 分汤

## 思路

概率题。使用动态规划：

- 状态：A、B的初识容量（二维）
- 转移：4种分法对应每个状态的4种策略
- 边界：在本题中是重点，需要理解好
  - `f[0][0] = 0.5`：A、B同时分完，因为想要的结果需要除以2，所以它就是0.5
  - `f[0][x] = 1`：A先分完
  - `f[x][0] = 0`：B先分完，这不是我们想要的，所以为0
- 目标：`f[N][N]`

另外需要注意，题目的N非常大，但是结果在一定范围内就算对。可以发现当N在5000以上时，概率可以直接返回1了，所以`O(N^2)`的时间复杂度不会导致超时。