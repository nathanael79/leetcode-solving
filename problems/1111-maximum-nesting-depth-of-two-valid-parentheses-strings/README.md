# 1111. 有效括号的嵌套深度

## 题意

将合法括号串`seq`分成两个合法括号子序列，保证它们的最大深度最小。

## 思路

因为`seq`的总深度是一定的，所以要使它们的最大深度最小，就要让它们的深度尽可能接近。所以，我们可以根据深度的【奇偶性】来平均分配（贪心）。一次遍历，记录当前深度，当遇到：

- 左括号：深度+1，然后分配
- 右括号：因为总是需要与左括号一起，所以先分配；然后深度-1
