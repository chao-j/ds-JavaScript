class Dictionary {
  constructor() {
    this.data = new Array()
  }

  // 内置使用数组存储 字符串也可以作为数组索引
  set = (key, val) => {
    this.data[key] = val
    return this
  }

  get = (key) => {
    return this.data[key]
  }

  // 计算大小（数组用字符串做索引时，length属性无效）
  count = () => {
    let n = 0
    for (let p in Object.keys(this.data)) {
      n++
    }
    return n
  }

  // toString
  toString = () => {
    let str = "["
    let ct = 0
    // 对键名进行排序
    // 因为当key是字符串时 this.data.sort() 无效
    for (let p of Object.keys(this.data).sort()) {
      str += `{${p},${this.data[p]}}${ct == this.count() - 1 ? '' : ','}`
      ct++
    }
    return str += ']'
  }
}