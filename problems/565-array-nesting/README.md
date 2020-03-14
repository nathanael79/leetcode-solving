# 565. 数组嵌套

## 思路

本质上要找出环的最大长度。

思路很简单：从所有未遍历的数字开始DFS即可，因为是线性结构，所以递归函数可以简化成while循环（尾递归优化）。因为遍历过的结点不需要再遍历，并且不会出现在下一次遍历（下一个环）中，所以需要标记以避免重复遍历。这样总时间为`O(N)`。