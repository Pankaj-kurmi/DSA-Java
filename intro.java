package Tree;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.Queue;

public class intro {
    public static void main(String[] args) {
        
    }
    class TreeNode<E> {
        E data;
        TreeNode left;
        TreeNode right;
        public TreeNode(E data){
            this.data=data;
            this.left=null;
            this.right=null;
        }
    }
    public ArrayList<Integer> BFS(TreeNode<Integer> root){
        ArrayList<Integer> res = new ArrayList<>();
        Queue<TreeNode> que = new LinkedList<>();
        que.offer(root); //insert data in ques to follow level wise insertion
        while (! que.isEmpty()) {
            TreeNode<Integer> node = que.poll();
            res.add(node.data);
            if (node.left !=null) {
                que.offer(node.left);
            }
            if (node.right!=null) {
                que.offer(node.right);
            }
        }
        return res;
    }
}
