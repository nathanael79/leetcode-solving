# 698. 划分为k个相等的子集

## 题意

给定数组`nums`和整数`K`，问该数组是否能够分为K个和相等的集合。

## 思路

将`N`个正整数均分为`K`个和相等的子集，用回溯，而回溯又有两种不同的思路：

- 基于桶：一桶一桶地装，装完一桶后，到下一桶，直到所有桶都装满。每次检查一个数字，有两种选择：取/不取，所以需要标记。
- 基于数字：因为一个数字肯定要装到某个桶中。对于一个数字，可以尝试分别放到`K`个桶中，不需要标记。
  - 优化点：对于某个数字来说，如果有连续剩余容量相同的桶，那么只需要放一次（避免重复，剪枝）

共同的优化：

- 回溯前，将和桶大小一样的数字直接放一个桶，之后回溯就不用考虑。这样可以减小回溯的复杂度规模。
- 优先检查大数字（提前将数组排序）。这样可以更快地排除错误答案。

由于`N <= 16`，如果使用位压缩，那么回溯还可以进化为Top-down DP，这样可以进一步降低时间复杂度。

## 反思总结

同样是回溯，“以数字为标准”和“以桶为标准”的做法的时间复杂度却不同（@todo），我们需要仔细分析、考虑最佳方案。

相似题目为[416. 分割等和子集](https://leetcode-cn.com/problems/partition-equal-subset-sum/)，它的`K=2`，使用DP。
