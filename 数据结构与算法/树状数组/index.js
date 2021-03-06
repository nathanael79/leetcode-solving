class BinaryIndexedTree {

  // 构造Fenwick树
  // O(N)
  constructor (list) {
    const n = list.length
    this.arr = Array.from({ length: n + 1 }, (_, i) => {
      return i === 0 ? 0 : list[i - 1]
    })
    for (let i = 1; i < n + 1; ++i) {
      const j = i + this._lowBit(i)
      if (j < n + 1) {
        this.arr[j] += this.arr[i]
      }
    }
  }

  // 单点更新（增加delta）
  // O(logN)
  update (index, delta) {
    ++index
    while (index < this.arr.length) {
      this.arr[index] += delta
      index += this._lowBit(index) // 向右（变大）
    }
  }

  // 区间查询
  // O(logN)
  rangeSum (from, to) {
    return this._prefixSum(to) - this._prefixSum(from - 1)
  }

  // 计算前缀和
  _prefixSum (index) {
    ++index
    let res = 0
    while (index) {
      res += this.arr[index]
      index -= this._lowBit(index) // 向上到父结点（变小）
    }
    return res
  }

  // 获取二进制中最低位的1所表示的数字
  _lowBit (i) {
    return i & -i
  }
}

module.exports = BinaryIndexedTree