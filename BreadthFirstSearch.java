package TreeNode;
import java.util.*;

public class BreadthFirstSearch {

    // BFS Method
    public static ArrayList<Integer> BFS(Node root) {
        ArrayList<Integer> res = new ArrayList<>();

        if (root == null) return res;

        Queue<Node> que = new LinkedList<>();
        que.offer(root);

        while (!que.isEmpty()) {
            Node node = que.poll();
            res.add(node.data);

            if (node.left != null) {
                que.offer(node.left);
            }
            if (node.right != null) {
                que.offer(node.right);
            }
        }

        return res;
    }

    // Main method (Testing)
    public static void main(String[] args) {

        Node root = new Node(1);
        root.left = new Node(2);
        root.right = new Node(3);
        root.left.left = new Node(4);
        root.left.right = new Node(5);

        ArrayList<Integer> result = BFS(root);

        System.out.println(result); // Output: [1, 2, 3, 4, 5]
    }
}

// Node class
class Node {
    int data;
    Node left;
    Node right;

    Node(int data) {
        this.data = data;
        this.left = this.right = null;
    }
}