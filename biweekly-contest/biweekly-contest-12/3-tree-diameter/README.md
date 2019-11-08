# 树的直径

## 思路

两次搜索：

1. 从任意结点`A`出发，找到最远的一个结点`B`
1. 然后从`B`出发，找到最远的一个结点`C`，则`B`、`C`之间的距离就是树的直径

这里的两次搜索可以用`DFS`/`BFS`，甚至交叉用（无聊）。

## 反思总结

两次搜索——求【树的直径】的套路。