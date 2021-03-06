# 740. 删除与获得点数

## 思路

动态规划。

### 直接上DP

首先将数组排序，让相同的数字放在一起。

设`f(left, right)`为区间`[left, right]`能获得的最大点数。则推导式为：

```js
f(left, right) = f(left, l) + 删除全部某个数字所得点数 + f(r, right)
```

虽然数组涉及到“删除”这种操作，但是删除后剩下的两部分在之后的过程中不会再有交集，即两个独立的子问题。所以一个可缓存的状态，用`left`跟`right`两个参数来表示就可以了。

时间复杂度：O(N^2)，而因为`N <= 20000`，必定TLE。

### 转化

通过分析可知，删除一个数字时，如果它有多个，可以一下子全部删除，而不用一个个去删除。于是可以将`nums`转化为其频次数组`counts`（数字为index，频次为value），会发现这个问题等同于[198. 打家劫舍](https://leetcode-cn.com/problems/house-robber/)。获取分数`n`时需要删除`n-1`以及`n+1`，转化为下标，就变成：访问`arr[i]`时，无法访问相邻的`arr[i-1]`和`arr[i+1]`，就是“打家劫舍”的题干，可以用bottom-up DP来解。

时间复杂度：O(N)，可AC。
