# 安排电影院座位

## 思路

哈希 + 贪心。

将`researvedSeats`按行哈希。由于n很大、可达10亿，但行数最多为1W，所以我们只需要检查哈希表中的每一行（即每个非空行），空行总是能够坐下2个家庭。检查每一行时按照贪心思路，先看能否坐下2个家庭、再看能否坐下1个。这一步又能细分为2种思路：

- 哈希（集合）
- 位压缩：因为座位的状态只有2种：有人（1）/没人（0），并且固定为10个座位，所以可以用1个二进制数（最大为`2^10`）表示。

时间复杂度为`O(N)`。