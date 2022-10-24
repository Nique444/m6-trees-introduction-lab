class TreeNode {
  constructor(data = null) {
    this.data = data;
    this.children = [];
  }
}

class Tree {
  constructor(node) {
    this.root = node;
  }

  findNode(data) {
    // console.log(data)
    if(data === this.root.data) return this.root;
    const queue = [this.root.children]
    console.log(queue)
    // console.log(this.root)
    if(this.root) return this.root.children
  }
}

module.exports = { TreeNode, Tree };
