public class maxwealth {
    public static void main(String[] args) {
        int arr[][]={
            {1,2,3},
            {1,2,3,4},
            {7,3},
        };
        int answer = max_wealth(arr);
        System.out.println("the richest person have wealth = "+ answer);
    }
    public static int max_wealth(int arr[][]){
        int ans =Integer.MIN_VALUE;
        for (int i = 0; i < arr.length; i++) {
            int sum = 0;
            for (int j = 0; j < arr[i].length; j++) {
                sum += arr[i][j];
            }
           if (sum>ans) {
            ans= sum;
           }

        } return ans;

    }
}
