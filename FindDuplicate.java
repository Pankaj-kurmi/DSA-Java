public class FindDuplicate {
    public static void main(String[] args) {
        int arr[]={1,2,2};
        int ansd = findDuplicate_number(arr);
        System.out.println(ansd);
    }
    public static int findDuplicate_number(int arr[]){
        int i=0;
        int n = arr.length;
        while (i<n) {
            if (arr[i]!=i+1) {
                int current = arr[i]-1;
                if ( arr[i]!= arr[current]) {
                    swap(arr,i,current);
                }else{
                    return arr[i];
                  }
            
            }else{
                i++;
                   } 
        }
         
        return -1;
    }
    public static void swap(int arr[],int index1,int index2){
        int temp=arr[index1];
        arr[index1]=arr[index2];
        arr[index2]=temp;
    }
}
