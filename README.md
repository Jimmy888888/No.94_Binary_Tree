# No.94_Binary_Tree
record LeetCode problem solving
</br>
</br>
## method:
- binary tree traversal
- recursion
- stack(used in C++ version)
 

### binary tree traversal

inorder:<br>
left -> root -> right

<img src="https://github.com/Jimmy888888/No.94_Binary_Tree/blob/main/inorder.gif?raw=true" with="961" height="538" alt="in_order">

###### <a href = "https://github.com/MisterBooo/LeetCodeAnimation">picture source</a>


### recursion

pseudocode:
```
in_order(node, numberList)
{
	if(node == null) return;
	in_order(node.left, numberList);
	numberList.add(node.val);
	in_order(node.right, numberList);
}
```

No.94_Binary_Tree_Inorder_Traversal.js
```

 var inorderTraversal = function(root) {
    let number = [];
    var in_order = function(root, number)
    {
        if( root === null)
        {
            return;
        }
        in_order(root.left, number);
        number.push(root.val);
        in_order(root.right, number);
    };

    in_order(root, number);
    return number;
};

```

### stack