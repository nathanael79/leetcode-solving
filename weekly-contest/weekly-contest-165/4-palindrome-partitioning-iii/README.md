# 5278. 分割回文串 III

## 思路

主要用动态规划。

DP前，预处理字符串`S`，用类似于最长回文子串的思路，求出每个子串的需要改变的代价`costs`（花费`O(N^2)`时间）。呃，其实这个也是DP。

- Top-down
  - 状态表示：`f(i, k)`表示当前从下标`i`开始、已经切成`k`块、最终能达到的最小代价
  - 状态转移：枚举分割点`j`（`i < j <= n`），有`f(i, k) => min( f(j, k + 1) + costs[i][j-1] )`
  - 边界：当`k===K`时，剩余代价为`costs[i][n-1]`
  - 目标：`f(0, 1)`，因为一开始就是从下标0开始、已被切成1块
- Bottom-up：
  - 状态表示：`dp[i][k]`表示`S[:i]`被切成`k`个子串的最小代价
  - 状态转移：枚举分割点`j`（`0 <= j < i`），有`dp[i][k] = min( dp[j][k-1] + costs[j][i-1] )`。由此可知，`i`与`k`递增，其中对`k`的遍历可以放在`i``j`前、也可以在它们后面，结果都一样。
  - 边界：所有值为`Infinity`，只有`dp[0][0] = 0`。因为空串本来就是0份，无需变换，所以代价为0；其它情况不合法，设为无穷大
  - 目标：`dp[n][K]`
