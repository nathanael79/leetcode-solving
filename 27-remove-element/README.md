# 27. 删除元素

## 题意

删除数组`nums`中所有等于`val`的元素，题目要求原地修改（modify in place），并返回新数组的长度。

## 思路

因为题目要求O(1)空间复杂度，所以像`filter`这种做法就不讨论了（虽然达到O(N）。

- 暴力：原始的数组删除操作，被删除元素后面的所有元素都要往前移动一位，导致最终复杂度为O(N^2)。这道题测试量不大，还能过，但是效率很低。
- 双指针：因为新数组的长度小于等于原数组，少了的尾部，其实我们不需要关注，这部分的值可以随意更改，于是我们可以将目标值都扔在这部分。具体做法有两种，本质大同小异：
  - 相向/头尾指针：L用以遍历，遇到目标元素，就跟R交换。会改变相对次序。
  - 同向/快慢指针：L用以写（L表示新数组的尾位置），R用以遍历，遇到目标元素就写到L中。这种做法更好，不会改变相对次序。

## 反思总结

暴力法是最直接的，一般在业务中，数组常规的“删除元素”的操作也是需要O(N^2)操作的。

而双指针法比起暴力法，有更好的时间效益，两种实现其实对应于快排算法中的操作（赶紧复习啦！），即快排细分的话也有这两种实现。快排是将数组分为不大于、大于pivot的两部分，而这里也一样，实际上是将数组分为不等于val、等于val的两部分，所以本质上是相同的思想。