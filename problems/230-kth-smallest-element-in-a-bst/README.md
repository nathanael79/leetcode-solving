# 230. 二叉搜索树中第K小的元素

## 题意

给定一个二叉搜索树，求第K小的元素。

## 思路

- 堆：这个就不说了，没用上有利条件。
  - 时间：O(N)
- 中序遍历 + 化为数组
  - 时间：O(N)，是个好方法，但是化为数组需要O(N)时间和空间
- 中序遍历 + 计数：计数到K则返回当前结点。
  - 递归：O(K)
  - 迭代：O(H + K)
- 二分搜索：当前结点（相当于二分查找中的middle）是第C小（C = 左子树的结点数量 + 1）。如果C > K，往左走；如果C < K，往右走，但注意此时要找第(K - C)小。
  - 时间：O(NH)

## 进阶

如果二叉搜索树经常被修改（插入/删除操作）并且你需要频繁地查找第 k 小的值，你将如何优化 kthSmallest 函数？

可以参考[这里](https://leetcode.com/problems/kth-smallest-element-in-a-bst/solution/)，但是个人感觉时间复杂度的分析不是太准确。
