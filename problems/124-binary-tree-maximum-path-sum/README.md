# 124. 二叉树中的最大路径和

## 思路

深搜，用到DP思想（思路同[53. 最大子序和](https://leetcode-cn.com/problems/maximum-subarray/)）。

通过例子可知：一条路径也是一棵树，肯定以某个结点为根（呈倒"V"型）。于是可以DFS整棵树，寻找以每个结点`node`为根的最大路径A。递归函数`f(node)`表示最后一个结点是`node`时的最大子数组和，则推导式（同53题）为：

```js
A = Math.max(f(node.left), 0) + // 如果左子树最大路径是正数，则可以连接左边
  Math.max(f(node.right), 0) + // 如果右子树最大路径是正数，则可以连接右边
  node.val
```

那么A就是一个dp候选值，最终答案就是max(A)，可以使用1个全局变量来记录。

然后考虑函数的返回值`res`。上面的路径因为以`node`为根，所以左右子树都走了；但是返回值作为对父结点的反馈，则只能走一边，于是选择更大的那边：

```js
res = Math.max(f(node.left), f(node.right), 0) + // 选择左、右子树中更大的那条路径；但如果是负数，那就不选
  node.val
```