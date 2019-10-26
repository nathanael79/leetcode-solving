# 替换子串得到平衡字符串

## 思路

看到子串就要想到【滑动窗口】。

题意转换一下：当前字符串的字符个数可能不满足要求，于是要找一个最小窗口W，使得W之外的字符个数满足条件。其中，【满足条件】是指个数不超过`n / 4`。

算法：扩展直到频次都不超过`n / 4`，此时要找最小窗口就要缩减，如果频次都不超过`n / 4`则更新答案。这里无法通过一个简单变量快速检测合法与否，所以要检查所有字符的频次，但由于字符数只有4个，所以每次检查也是常数时间。