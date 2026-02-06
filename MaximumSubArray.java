class Maximum{
    public static void main(String[] args) {
        int arr[][]={
            {1,2,3,4,5},
            {6,7,8,9,1},
            {2,5,8,1,3}
        };
        maxSumArray(arr);
    }
    public static void maxSumArray(int arr[][]){
        int index =-1;
        int max = Integer.MIN_VALUE;
        for (int i = 0; i < arr.length; i++) {
            int sum =0;
            for (int j = 0; j< arr[i].length; j++) {
                sum = sum+ arr[i][j];
            }
            if (sum>max) {
                max =sum;
                index=i;
            }
            
        }
        System.out.println("The maximum sum of 2D array = " + max + " at index " + index);
    }
}