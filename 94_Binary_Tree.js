/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
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

//use recursion 