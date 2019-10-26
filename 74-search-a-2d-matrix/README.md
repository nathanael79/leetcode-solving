# 74. 搜索二维矩阵

## 题意

给定矩阵`matrix`和目标值`target`，问`target`是否存在于`matrix`中。

## 思路

根据矩阵的特点，它可以按照从上到下、从左到右的顺序，直接扁平化成一个一维的有序数组，然后进行二分查找。

为了避免建立数组（因为需要O(NM)时间），可以建立一维、二维坐标的互相映射：

- 二分计算时，转化为一维
- 取值时，转化为二维