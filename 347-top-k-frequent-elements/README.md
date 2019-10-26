# 347. 前K个最频元素

## 题意

给定数组，求前K个出现次数最多的元素。

## 思路

出现次数问题，首先要用`HashMap`求次数。然后就是挑选出频次为前K大的元素，有几种思路：

- 排序：O(NlogN)，但不能满足题意
- 堆：维护一个大小为K的小顶堆，时间为O(NlogK)，可以。小细节：这里为什么是小而不是大顶堆？因为堆满时要删除的元素为最小值，所以只能是由最小堆来实现。
- 索引排序：非常创新的O(N)解法。当建立了`HashMap`后，我们想，如果它能够根据“值（频次）的大小”来对所有项进行排序的话就好了，然而如果把频次看作是数组的下标，同时数组的值是字符列表，那么这自然而然就排好序了。取前K个字符的时候，就是对这个数组进行逆序遍历即可，花费的时间就是O(N)。

## 反思总结

索引排序（姑且这么命名，有人称为bucket sort）的特点：

- 优点：时间为O(N)，比常规的O(NlogN)还要快
- 缺点：适用范围有限，因为是利用数组下标进行自然的排序，所以受限于下标的特点：
  - 非负整数（或映射为正整数）
  - 不能太大，毕竟数组长度有限

例子：对一个班的分数进行排序（因为分数的范围是`[0, 100]`）