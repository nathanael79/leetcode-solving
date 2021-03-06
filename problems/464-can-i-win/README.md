# 464. 我能赢吗

## 思路

状压DP。

一个状态包含：

- 当前使用过的数字`cover`
- 当前达到的和`sum`

`sum`好办，就是一个整数；`cover`似乎需要用哈希表（集合）来记录哪些使用过、哪些还没被使用，然而条件“你可以假设 maxChoosableInteger 不会大于 20”是一个提示，即可以把集合压缩成一个二进制整数，最多也就`2 ^ 20 ~= 100W`数量级。所以这就是一个状压DP。
