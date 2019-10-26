# 1210. Minimum Moves to Reach Target with Rotations

## 题意

给定一条长度为2的蛇以及一些行进的规则，问从起点到终点的最少步数。

## 思路

典型的BFS问题。问题不难，主要在于细节的处理：

- 一个结点包含2个坐标，分别为头、尾
- 根据给定的4个规则，来扩展4个新结点
- 用HashSet标记已遍历、待遍历的位置，避免重复（否则会TLE）