public class FindMissinNum {
    public static void main(String[] args) {
        int arr[]={1,2,3};
        int ans= findMissingNumber(arr);
        System.out.println(ans);
    }
    public static int findMissingNumber(int arr[]){
        int i=0;
        int n =arr.length;
        //int currentposition =arr[i];
        while (i<n) {
            int currentposition =arr[i]-1;
            if (arr[i]<n && arr[i]!=arr[currentposition]) {
                swap(arr, i, currentposition);
            }else{
                i++;
            }
           
        } for (int j = 0; j < arr.length; j++) {
            
            if (arr[j]!= j) {
              return j;
            } 
         } 
         return n;
    }
    public static void swap(int arr[],int index1,int index2){
        int temp= arr[index1];
        arr[index1]=arr[index2];
        arr[index2]=temp;
    }
}
