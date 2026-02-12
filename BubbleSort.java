public class BubbleSort {
    public static void main(String[] args) {
        int arr[]={5,3,2,1,4};
        printArray(arr, "original");
        Bubble_Sort(arr);
        printArray(arr, "sorted");
    }
    // function to print array
    public static void printArray(int arr[],String message){
        System.out.println("printing " + message + " using bubble sort algorithm");
        for (int i = 0; i < arr.length; i++) {
          System.out.print(arr[i] + " ");

        }
        System.out.println();
    }
    public static void Bubble_Sort(int arr[]){
        for (int i = 0; i < arr.length-1; i++) {
            for (int j = 0; j < arr.length-1-i; j++) {
                if (arr[j]>arr[j+1]) {
                   swap(arr, j, j+1);
                }
            }
        }

    }
    // function for swapping
    public static void swap(int arr[],int index1, int index2){
        int temp= arr[index1];
        arr[index1]=arr[index2];
        arr[index2]= temp;

    }
}
