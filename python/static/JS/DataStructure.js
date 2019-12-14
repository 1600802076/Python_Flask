//单链表结构
function List() {
    var Node = function (element) { //节点结构
        this.data = element;
        this.next = null;
    }
    this.length = 0;
    this.head = null;//头指针
    this.tail = null;//尾指针
    //链表判空
    this.isNull = function () {
        if(this.head == null) {
            return true;
        } else {
            return false;
        }
    }
    //头插法
    this.headAppend = function (element) {   //头插法
        var node = new Node(element);
        var current;
        if(this.head == null) //头指针为空指向新节点
        {
            this.head = node;
        } else {              //头指针不为空
            current = this.head;
            this.head = node;
            node.next = current;
        }
        this.length++;
    };
    //链表遍历
    this.toString = function () {
        var current = this.head;
        var string = "";
        while(current){
            string += current.data+" ";
            current = current.next;
        }
        return string;
    };
    //尾插法
    this.tailAppend = function (element) {
        var node = new Node(element);
        var concurrent;
        if(this.head == null){
            this.head = node;
            this.tail = node;
        } else {
            concurrent = this.tail;
            concurrent.next = node;
           this.tail = node;
        }
        this.length++;
    }
    //获取第num个节点
    this.getELem = function (num) {   //获取第Num个节点
       var item = this.head;
       var j = 1;
       if(num == 0)
           return item;
       if(num < 0 || num >= this.length) {
           return null;
       }
       while(item&&j<=num){
           item = item.next;
           j++;
       }
       return item;
    }
    //在特定位置插入节点
    this.insertElem = function (num,data) {
        var node = new Node(data);
        var item = this.getELem(num);
        try{
            if(item == null) throw "插入位置不合法";
            else {
                if(item.next){
                    var p = item.next;
                    item.next = node;
                    node.next = p;
                } else {
                    item.next = node;
                }
            }
        } catch (err) {
            alert(err);
        }


    }
    //删除节点操作
    this.deleteElem = function (num) {
        try{
            if(this.getELem(num) == null) throw "位置不合法";
            else {
                if(num == 0) {
                    this.head == null;
                }
                if(num == 1) {
                    this.head = this.getELem(num+1);
                    this.getELem(num) == null;
                }
                if(num > 1 && num <this.length){
                    this.getELem(num-1).next = this.getELem(num+1);
                    this.getELem(num) == null;
                }
            }
        } catch (err) {
            alert(err);
        }
    }
    //链表反序
    this.reverseList = function () {
           var prve = null;
           var icon = null;
            while(this.head) {
                icon = this.head;
                var items = this.head.next;
               this.head.next = prve;
               prve = this.head;
               this.head = items;
            }
            this.head = icon;
        }
};

//链式栈结构
function Stack() {
    var Node = function (element) {
        this.data = element;
        this.next = null;
    }
    this.top = null;   //栈顶指针
    this.length = 0;
    //判断栈空
    this.stackEmpty = function () {
        if(this.top == null){
            return true;
        } else {
            return false;
        }
    }
    //入栈
    this.Push = function (element) {
        var node = new Node(element);
        if(this.top == null){
            this.top = node;
        } else {
            node.next = this.top;
            this.top = node;
        }
        this.length++;
    }
    //出栈
    this.Pop = function () {
        try{
            if(this.stackEmpty()) throw "栈空";
            else{
                var p = this.top;
                this.top = p.next;
                this.length--;
                return p;
            }
        } catch (e) {
            alert(e);
        }
    }
    //获取栈顶节点
    this.getTop = function () {
        try{
            if(this.stackEmpty()) throw "栈空";
            else{
                return this.top;
            }
        } catch (e) {
            alert(e);
        }
    }
    //遍历栈
    this.toString = function () {
        var item = this.top;
        var string = "";
        while(item){
            string += item.data+" ";
            item = item.next;
        }
        return string;
    }
};

//队列结构
function Queue() {
    var Node = function (element) {
        var data = element;
        var next = null;
    }
    this.length = 0;
    this.front = null;
    this.rear = null;
    this.queueEmpty = function () {
        if(this.front == null&&this.rear == null){
            return true;
        } else {
            return false;
        }
    }
    this.enqueue = function (element) {
        var node = new Node(element);
        if(this.queueEmpty()){
            this.front = node;
            this.rear = node;
        } else {
            this.rear.next = node;
            this.rear = node;
        }
    }
    this.deQueue = function () {
        if(this.queueEmpty()){
            return false;
        } else {
            var p = this.front;
            this.front = p.next;
            p = null;
            if(this.rear == p){
                this.front = this.rear;
            }
        }
    }
    this.toString = function () {
        var item = this.front;
        var string = "";
        if(item){
            string += item.data+" ";
            item = item.next;
        }
        return string;
    }
}

//二叉搜索树结构（左节点永远小于根节点，右节点永远大于根节点）
function BinaryTree() {
    this.root = null;
    var Node = function (element) {  //节点结构
        this.data = element;
        this.leftChild = null;
        this.rightChild = null;
    }
    this.insert = function (key) {  //插入节点
        var node = new Node(key);
        if (this.root == null) {
            this.root = node;
        } else {
            this.insertNode(this.root, node);
        }
    }
    this.insertNode = function (last, now) {  //插入辅助函数
        if (now.data < last.data) {
            if (last.leftChild == null) {
                last.leftChild = now;
            } else {
                this.insertNode(last.leftChild, now);
            }
        } else {
            if (last.rightChild == null) {
                last.rightChild = now;
            } else {
                this.insertNode(last.rightChild, now);
            }
        }
    }
    //先序遍历  根左右
    this.preOrder = function (node, res = []) {
        if (node !== null) {
            res.push(node.key);
            this.preOrder(node.left, res);
            this.preOrder(node.right, res);
            return res;
        }
    }
    //中序遍历 左根右
    this.inOrder = function (node, res = []) {
        if (node !== null) {
            this.inOrder(node.left, res);
            res.push(node.key);
            this.inOrder(node.right, res);
            return res;
        }
    }
    //后序遍历 左右根
    this.postOrder = function (node, res = []) {
        if (node !== null) {
            this.postOrder(node.left, res);
            this.postOrder(node.right, res);
            res.push(node.key);
            return res;
        }
    }
    this.getMax = function () {
        var node = this.root;
        while (node && node.rightChild) {
            node = node.rightChild;
        }
        return node.data;
    }
    this.getMin = function () {
        var node = this.root;
        while (node && node.leftChild) {
            node = node.leftChild;
        }
        return node.data;
    }
    this.search = function (key) {
        return this.searchNode(this.root, key);
    }
    //查找一个特定的值的辅助函数
    this.searchNode = function (node,key) {
        if(node.data == key){
            return true;
        }
        else if(node.data > key){
           return this.searchNode(node.leftChild,key);
        }
        else if(node.data < key){
           return this.searchNode(node.rightChild,key);
        }
        if(node == null){
            return false;
        }

    }
    //移除某一个节点
    this.remove = function (key) {
        this.root = this.removeNode(this.root, key);
    }
    this.removeNode = function (node, key) {
        if (node === null) {
            return null;
        }
        if (node.key < key) {
            this.removeNode(node.right, key);
        } else if (node.key > key) {
            this.removeNode(node.left, key);
        } else {
            if (node.left === null && node.right === null) {
                return null;
            } else if (node.left === null) {
                return node.right;
            } else if (node.right === null) {
                return node.left;
            } else {
                var tempNode = this.findMinNode(node.right);
                node.key = tempNode.key;
                node.right = this.removeNode(node.right, tempNode.key);
                return node;
            }
        }
    }
}

