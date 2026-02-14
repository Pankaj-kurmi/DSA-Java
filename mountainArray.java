public class mountainArray {
    public static void main(String[] args) {
        int arr []={2,4,6,8,7,5,3,1,};
        int s =mountain_Array(arr); 
        System.out.println(s);

    }
    public static int mountain_Array(int arr[]){
        int start = 0;
        int end = arr.length-1;
        while (start<end) {
            int mid = start +(end - start)/2;
             if (arr[mid]>arr[mid+1]) {
                end = mid;
             }
             else{
                start= mid+1;
             }
        } return start;
    }
}
