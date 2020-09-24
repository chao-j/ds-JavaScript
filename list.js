/** 单向链表 */

// 节点类
class Node {
    constructor(e){
        this.elem=e
        this.next=null
    }
}

class List {
    constructor(){
        this.head=new Node('HEAD')
        this.length=0
    }

    //append 往链表尾插入
    append=(e)=>{
        const node=new Node(e)
        let cur=this.head
        while(cur.next!=null){
            cur=cur.next
        }
        cur.next=node
        this.length++
    }
    //insertBefore 往指定元素前插入
    insertBefore=(posElem,e)=>{
        const node = new Node(e)
        //找到指定元素的前驱
        let pre=this.findPrevious(posElem)
        if(pre==null) return false
        node.next=pre.next //pre.next 就是指定元素
        pre.next=node
        this.length++
        return true
    }
    // insertAfter 往指定元素后插入元素
    insertAfter=(posElem,e)=>{
        const pre=this.find(posElem)
        let node=new Node(e)
        if(pre==null) return false
        node.next=pre.next
        pre.next=node
        this.length++
        return true
    }

    // delete 删除指定元素
    delete=(e)=>{
        //找到其前驱
        const pre=this.findPrevious(e)
        if(!pre) return false
        pre.next=pre.next.next
        this.length--
        return true
    }

    // find 找到指定元素
    find=(e)=>{
        let cur=this.head
        // 注意不能使用cur.next!=null 查找最后一个时会出错
        while(cur!=null){
            if(cur.elem==e){
                return cur
            }
            cur=cur.next
        }
        return null
    }
    // findPrevious 找到指定元素的前驱
    findPrevious=(e)=>{
        let cur=this.head
        while(cur.next!=null){
            if(cur.next.elem==e){
                return cur
            }
            cur=cur.next
        }
        return null
    }
    // toString
    toString=()=>{
        let cur=this.head
        let str=""
        while(cur.next!=null){
            str+=cur.next.elem+'->'
            cur=cur.next
        }
        str+='null'
        return str
    }

    get len(){
        return this.length
    }
}