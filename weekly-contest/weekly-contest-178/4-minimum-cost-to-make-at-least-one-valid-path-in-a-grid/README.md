# 1368. 使网格图至少有一条有效路径的最小代价

## 题意

给定迷宫`grid`，每个格子中有方向，如果沿着该方向走则代价为0、否则代价为1。问从左上角走到右下角所需的最小代价。

## 思路

用DP不好做（因为拓扑序为4个方向，会陷入死循环），可以考虑用BFS。对于这个图来说，路线的代价为0/1，为了求最短路，方案有：

- BFS + 优先队列
- BFS + 双端队列
