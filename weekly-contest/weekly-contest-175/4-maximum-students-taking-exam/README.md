# 参加考试的最大学生数

## 思路

- 回溯【TLE】：对于每个空位，尝试坐/不坐两种策略。
  - 时间：`O(2^(MN))`？超时
- 状压DP：逐行检测，将每一行的座位情况表示为二进制。
  - 时间：`O(MN * 2^N * 2^N)`
- 网络流
