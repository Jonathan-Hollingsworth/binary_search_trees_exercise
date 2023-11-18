class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if (!this.root) {
      this.root = new Node(val)
      return this
    }

    let toVisitQueue = [this.root];
    while (toVisitQueue.length) {
      let current = toVisitQueue.shift();

      if (current.val === val) return "This value is already in the array"

      if (current.val > val) {
        if(!current.left) {
          current.left = new Node(val)
          return this
        } else {
          toVisitQueue.push(current.left)
        }
      } else {
        if(!current.right) {
          current.right = new Node(val)
          return this
        } else {
          toVisitQueue.push(current.right)
        }
      } 
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    if (!this.root) {
      this.root = new Node(val)
      return this
    }

    function findInsert(node){

      if (node.val === val) return "This value is already in the array"

      if (node.val > val) {
        if(!node.left) {
          node.left = new Node(val)
        } else {
          findInsert(node.left)
        }
      } else {
        if(!node.right) {
          node.right = new Node(val)
        } else {
          findInsert(node.right)
        }
      } 
    }

    findInsert(this.root)
    return this
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;

    while (current) {
      if (current.val === val) 
        return current;

      current = val < current.val ? current.left : current.right;
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    function check(node) {
      if (!node) return

      console.log(node)
      if (node.val === val) return node

      let checkNext = val < node.val ? node.left : node.right;
      return check(checkNext)
    }

    return check(this.root)
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {

  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {

  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {

  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {

  }

  // /** Further Study!
  //  * remove(val): Removes a node in the BST with the value val.
  //  * Returns the removed node. */

  // remove(val) {

  // }

  // /** Further Study!
  //  * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  // isBalanced() {

  // }

  // /** Further Study!
  //  * findSecondHighest(): Find the second highest value in the BST, if it exists.
  //  * Otherwise return undefined. */

  // findSecondHighest() {
    
  // }
}

module.exports = BinarySearchTree;
