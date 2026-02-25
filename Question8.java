import java.util.Arrays;

class DelteMiddle {
    public static void main(String[] args) {
        int []arr={1,2,3,4,5,6,7,8,9,10};
       int []ans = deleteMiddle(arr);
        System.out.println(Arrays.toString(ans));



    }
    public static int[] deleteMiddle(int[] arr) {
        int[] newArr = new int[arr.length - 1];
        int mid = arr.length / 2;

        for (int i = 0, j = 0; i < arr.length; i++) {
            if (i == mid) continue;
            newArr[j++] = arr[i];
        }

        return newArr;
    }

}
