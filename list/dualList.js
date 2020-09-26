class DualNode {
  constructor(elem) {
    this.elem = elem
    this.pre = null
    this.next = null
  }
}

/** 双向链表 */
class DualList {
  constructor() {
    this.head = new DualNode('head')
    this.tail = new DualNode('tail')
    this.head.next = this.tail
    this.tail.pre = this.head
    this.length = 0
  }

  // appendTail 添加一个元素在链表尾
  appendTail = (elem) => {
    const node = new Node(elem)
    let tail = this.tail
    //前驱后继都要改动
    node.pre = tail.pre
    tail.pre.next = node
    node.next = tail
    tail.pre = node
    this.length++
    return this
  }
  // appendHead 添加一个元素在链表头
  appendHead = (elem) => {
    const node = new Node(elem)
    let head = this.head
    node.next = head.next
    head.next = node
    node.next.pre = node
    node.pre = head
    this.length++
    return this
  }


  // insert 在一个元素的位置上添加（原本元素后移）
  insert = (posElem, e) => {
    let cur = this.head
    while (cur != null) {
      if (cur.elem == posElem) break
      cur = cur.next
    }
    if (cur == null) return false
    const node = new Node(e)
    node.next = cur.next
    node.next.pre = node
    cur.next = node
    node.pre = cur
    this.length++
    return true
  }

  // delete 删除一个节点
  delete = (elem) => {
    let cur = this.head
    while (cur != null) {
      if (cur.elem == elem) break
      cur = cur.next
    }
    if (cur == null) return false
    cur.pre.next = cur.next
    cur.next.pre = cur.pre
    this.length++
    return true
  }

  // TODO: advance、back 方法
  // toString 正序打印
  toString = () => {
    let cur = this.head
    let str = "null->"
    while (cur.next.next != null) {
      str += cur.next.elem + '->'
      cur = cur.next
    }
    str += 'null'
    return str
  }
}