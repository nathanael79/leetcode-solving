# 搜索推荐系统

## 思路

设`N`为产品数量(N<=1000)、`L`为产品平均长度(约有L<=20)、`M`为关键词长度(M<=1000)。

检测字符串（长度为`L`）是否匹配某个前缀（长度为`M`）的时间复杂度为`O(min(L, M))`，这里为了方便理解，姑且忽略不计，即算作`O(1)`。

- 排序 + 线性查找：`O(NlogN + MN) ~= O(NM)`。排序是为了使结果满足字典序。
- 排序 + 二分查找：`O(NlogN + MlogN) ~= O(M + N)`。既然排序了，就应该使用排序的优点：二分查找。字符串跟数字一样有大小关系；同时，这里虽然给定的target是字符串的“前缀”，但也能使用二分查找。
- 排序 + 递进查找：最优`O(NlogN + (M+N)) ~= O(N + N)`。利用前缀“单调递增”的特性，因为长前缀比短前缀要“大”，所以如果短前缀在`products[i]`处开始匹配，那么之后轮到长前缀时，可以从`products[i]`继续找、而不是重新从`products[0]`开始找，可以大大节省时间。
- Trie树：最坏`O(NL + M * NM)`
