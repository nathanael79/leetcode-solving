# 922. 按奇偶排序数组 II

## 题意

给定数组A，有一半元素是奇数。返回一个新数组，其中奇数在奇数位置上、偶数在偶数位置上。

## 思路

- 2次扫描（新数组）：将数字分类到奇数数组A、偶数数组B，然后B、A轮流串联即可。
  - 时间：O(N)
  - 空间：O(N)
- 双指针（原地修改）：
  - 算法思路
    - i作为偶数指针，j作为奇数指针，步进都为2（相当于遍历两个数组）。
    - 目标：只需要保证i上面全都是偶数即可（那剩下的位置就全都是奇数），并让i同时负责探索。如果i遇到奇数，则需要跟j交换，这时候有两种子思路：
      -（1）先让j也到达一个不合法位置（遇到偶数），再交换，之后i上就是偶数了，i
      -（2）直接交换，之后因为i上的不一定是偶数，所以这时候暂时不能进行i+=2，要继续检测i这个位置
  - 时间：O(N)
  - 空间：O(1)
- 三指针（原地修改）：
  - 算法思路
    - 使用3个指针：（1）`odd`表示上一次奇数出现的位置；（2）`even`表示上一个偶数出现的位置；（3）`i`用以遍历/探索。
    - 两种非法情况：当i为偶数但A[i]为奇数时，需要将A[i]与A[odd]交换，并且odd前进2步；另一种情况同理，就是把odd换成even。
    - 合法情况：不用交换，i继续前进就行。
  - 时间：O(N)
  - 空间：O(1)
