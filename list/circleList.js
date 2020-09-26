/**
 * 和单链表类似，只是尾节点指向头节点
 * 初始化时 this.head.next = this.head
 * 循环时, 需要设置跳出条件
 *
 * 循环链表解决点名自杀问题
 *  n个人围成一个圈，第m个人会被杀掉，求最后剩下的k人
 */

class Node {
  constructor(e) {
    this.elem = e
    this.next = null
  }
}

class CircleList {
  constructor() {
    this.head = new Node('head')
    this.head.next = this.head
    this.length = 0
  }

  append = (e) => {
    const node = new Node(e)
    let cur = this.head
    while (cur.next != this.head) {
      cur = cur.next
    }
    cur.next = node
    node.next = this.head
    this.length++
    return this
  }

  removeNext = (preNode) => {
    preNode.next = PreNode.next.next
    this.length--
    return this
  }

  solution = (m, k) => {
    let counter = 1
    let cur = this.head
    let pre = cur
    while (this.length > k) {
      // 跳过head
      if (cur = this.head) {
        cur = cur.next
      } else {
        if (counter == m - 1) {
          this.removeNext(cur)
          counter = 1
        } else {
          cur = cur.next
          counter++
        }
      }
    }
  }

  toString = () => {
    let cur = this.head.next
    let str = ""
    while (cur != this.head) {
      str += cur.elem + ","
      cur = cur.next
    }
    console.log(str)
  }
}