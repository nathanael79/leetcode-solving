# 1. 两数相加

## 题意

给定一个数组`nums`以及目标`target`，找出一对和为`target`的数字，返回其下标。

## 思路

### 角度一：二值

这种“二值搜索”问题的思路，都是：

- 暴力：O(N^2)：二重循环
- Hash：O(N)：在这里值才是有用的，为了避免重复搜索，可以将值作为Map的key记录下来；同时，因为题目需要我们求下标，所以将其Map的value。

### 角度二：二值的和

求两个值的和是否等于某个值，就是典型的“Two Sum”乃至“N Sum”问题。这类问题基于有序数组，有通用的解法：

1. 排序（如果有需要）
2. 递归：
    1. 确定端点
    2. 双指针法（递归的叶子结点）