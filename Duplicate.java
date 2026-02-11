import java.util.HashSet;

public class Duplicate {
    public static void main(String[] args) {
        int arr[]={1,2,3,3,4,5};
        System.out.println(findDuplicate(arr));
        System.out.println("---------------------------------");
        System.out.println(findXOR(arr));
    }
    public static int findDuplicate(int arr[]){
        HashSet<Integer> set = new HashSet<>();
        for(int num:arr){
            if (set.contains(num)) {
                return num;
            }
            set.add(num);
        }
        return -1;

    }
    public static int findXOR(int arr[]){
        int xor1=0;
        int xor2 =0 ;
        int n = arr.length;
        for(int num:arr){
            xor1^=num;
        }
        for(int i=1;i<=n-1;i++){
            xor2^=i;
        }
        
        return xor1^xor2;

    }
}
