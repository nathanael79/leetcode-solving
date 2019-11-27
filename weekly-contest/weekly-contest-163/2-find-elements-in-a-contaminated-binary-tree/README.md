# 在受污染的二叉树中查找元素

## 思路

只需要2个操作：

- 恢复：搜索（DFS/BFS），需要`O(N)`时间
- 询问：询问是否存在，如果用搜索则需要`O(N)`，但其实可以提前用一个哈希表(`HashSet`)记录有哪些值存在，那么询问的时候只需要`O(1)`就知道了