# 1099. 和小于K的Two sum

## 题意

给定数组`arr`，找出和小于`upperBound`并且最接近`upperBound`的一对元素，返回它们的和。

## 思路

- 暴力：N <= 100，数据量不大，O(N^2)可以考虑。
- Hash：用不上，因为是非等值搜索，Hash只能用于精准搜索。
- 双指针法：O(NlogN)，复杂度全在排序上。之后的搜索，本质上跟“二分查找中的非等值查找”的过程十分类似（只是复杂度不同），同样只需要两条分支。