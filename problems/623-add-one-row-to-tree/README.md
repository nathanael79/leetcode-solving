# 623. 在二叉树中增加一行

## 思路

DFS/BFS都可以。这里讲讲DFS两种实现的不同细节：

- 无返回值
  - 算法：处理`d-1`层，即将`d-1`层的每个结点作为父结点，新增左右子结点，然后将旧子结点作为新子结点的子结点
  - 边界：遇`NULL`结点返回，不处理
  - 特殊处理：`d === 1`
- 带返回值：
  - 算法：处理`d`层，即将`d`层的每个结点作为子结点，创建新的子结点，链接旧子结点后返回。
  - 边界：遇`NULL`结点可能需要处理
  - 特殊处理：无。已将`d === 1`统一处理了

本题可以作为探索DFS有无返回值的区别的入门题。
