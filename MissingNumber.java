class missingNumber{
    public static void main(String[] args) {
        int arr[]= {1,2,3,5,6,7,8,9,10};
        System.out.println(findMissingNumber(arr));
        System.out.println("---------------------------------");
        System.out.println(byXOR(arr));
    }
    public static int findMissingNumber(int arr[]){
        // total sum;
        int n = 10;
        System.out.println(n);
        int totalsum = n * (n+1)/2;
        int currsum=0;
        for(int num:arr){
            currsum+= num;
        }
        return totalsum-currsum;
    }
    public static int byXOR(int arr[]){
        int xor1=0;
        int xor2=0;
        for (int i = 1; i <=10; i++) {
            xor1^=i;
        }
        for(int num:arr){
            xor2^=num;
        }
        return xor1^xor2;

    }
}