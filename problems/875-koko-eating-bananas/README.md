# 875. 爱吃香蕉的珂珂

## 思路

> 珂珂喜欢慢慢吃，但仍然想在警卫回来前吃掉所有的香蕉。

这句话暗示了题型：使最大值最小化。并且，题目明确告诉“K为整数”，所以解法就是在整数范围内二分枚举吃速。

最大值最小化，即在满足条件时探索更左边的值，相当于`Python`中的`bisect.bisectLeft`函数，所以二分细节也要跟`bisectLeft`一致。初始值可以选：`[1, max + 1)`。

时间复杂度：O(NlogX)
