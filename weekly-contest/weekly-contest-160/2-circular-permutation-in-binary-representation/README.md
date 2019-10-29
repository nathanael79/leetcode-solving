# 循环码排列

## 思路

与[89. 格雷编码](https://leetcode-cn.com/problems/gray-code/)几乎一致，只是多了2个条件：

- 指定起点
- 循环相邻，即头尾也是相差1位

然而思路没什么不同，有：

- 回溯法（爆栈）：一般stack深度`2^10`左右就会爆栈，然而本题`n`可能为`16`，所以不能用递归。
- 镜像反射法
- 格雷码生成法