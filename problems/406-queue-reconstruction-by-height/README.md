# 406. 根据身高重建队列

## 思路

队伍是没有秩序的，可以通过排序，然后再处理。

- 思路1：按照身高升序排序，然后依次将每个人【放置】在“正确”的位置上。对于每一个人A，空位表示之后将要放比A高的人，已占位的表示比A矮（或等高）。从头累计K的数量（空位或者等高者，就加1）。如果在某个空位上，A的K够了，就把A放置在该位置上。
  - 时间：O(N^2)，因为对于每个人，都要线性寻找属于他的位置。
- 思路2：按照身高降序、K升序排序，然后依次将每个人【插入】到队列中。对于每一个人A，已经在队列中的人的身高大于等于A的身高，恰好就是K的含义，所以直接插入位置`K`即可。
  - 时间：O(N^2)，数组（在任意位置）插入元素，需要花费O(N)时间。

排序后从最矮/高的人开始处理，体现了贪心思想。
