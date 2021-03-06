# 102 二叉树的逐层遍历

## 题意

打印出BFS的路径，但是需要分层显示（二维数组）。

## 思路

BFS的基本框架（使用queue）是不变的，问题在于怎么分层显示。

### 1. BFS

#### 1.1 增加level变量

遍历方式不变，还是最基础那种。需要在TreeNode类的基础上增加变量，以记住当前结点的level/depth。

#### 1.2 分批遍历

稍稍改变遍历方式：分批遍历，每一批仅遍历一层中的所有结点，并将该层路径 subPath 推进总路径 path 中。该方法显得更“聪明”一点。

### 2. DFS

最终目的是得出一个二维数组形式的路径，用DFS也可以，前/中/后序都无所谓，具体见同目录下的：dfs.js。
