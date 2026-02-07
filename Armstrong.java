public class Armstrong {
    public static void main(String[] args) {
        ArmstrongNumber(153);
        ArmstrongNumber(785);
        ArmstrongNumber(231);
        ArmstrongNumber(370);
        ArmstrongNumber(371);
    }
    public static void ArmstrongNumber(int num){
        int ans = 0;
        int newNUm= num;
        while (num>0) {
            int LastDigit= num%10;
            ans = ans + (int)Math.pow(LastDigit,3); // LastDigit*LastDigit*LastDigit;
            num/=10; 
        }
        if (newNUm==ans) {
            System.out.println("mil giya ji Army wala number");
        }
        else{
            System.out.println("nhi mila re ");
        }
        System.out.println("--------------------------------------------------");
    }
}
