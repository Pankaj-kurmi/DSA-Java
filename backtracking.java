public class backtracking{
    public static void main(String[] args) {
        int arr[]= new int[5];
        changeArr(arr, 0, 10);
        printArr(arr);
    }
    public static void printArr(int arr[]){
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i]+ " ");
        }
        System.out.println();
    }
    public static void changeArr(int arr[],int index,int value){
        //base condition
        if (index== arr.length) {
            printArr(arr);
            return;
        }
        // recursive condition 
        arr[index] = value;
        changeArr(arr, index+1, value+1);
        // decrease thge value of array by -2 from its index 
        arr[index] = arr[index]-value;

    }
}