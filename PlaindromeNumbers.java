public class PlaindromeNumbers {
    public static void main(String[] args) {
        Plaindromenumbers(525); 
        Plaindromenumbers(234); 
        Plaindromenumbers(1001); 
    } 
    public static void Plaindromenumbers(int num){
        int newnum= num;
        int result = 0;
        while (num>0) {
            int digit = num%10;
            //int reminder = num/10;
            result = result*10 + digit;
            num/=10; 
            
        }
        if (newnum==result) {
            System.out.println("plaindrome number found");
        }
        else{
            System.out.println("khada hu aaj bhi wahi tera intezar hai");
        }

    }
}
