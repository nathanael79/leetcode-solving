# 582. 杀死进程

## 题意

给定一堆进程ID及其父进程ID，当杀死一个进程时，求出所有连带的进程。

## 思路

问题翻译一下就是：给定一堆结点及其父节点，返回以某个结点为子树的所有结点。

思路很简单：

- 建树：这里用Map来记录映射“结点 => 所有子结点”，相当于每个结点都有了对其子结点的所有引用，而建树是为了让结点可以通过left、right访问其子结点，所以这里建树是不必要的了。
- 遍历某个子树：DFS或者BFS都行。
