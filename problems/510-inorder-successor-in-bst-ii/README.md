# 510. 二叉搜索树中的中序后继 II

## 题意

给定某个二叉树上的一个结点`node`，寻找它的后继结点（比它大的最小结点）。注意只能访问`node`，无法访问所在树的根结点。

## 思路

Node结构存在对父节点的引用，可以参考TreeMap中的`getHigherKey`函数的实现。

思路很简单：

1. 先找右子树中的最左结点A
2. 如果A不存在，再找“第一个左结点”的父结点
