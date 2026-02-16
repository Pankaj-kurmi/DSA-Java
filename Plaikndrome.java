package strings;

public class Plaikndrome {
    public static void main(String[] args) {
       boolean ans = isplaindrome("pankaj");
       System.out.println(ans);
        

    }
    public static boolean isplaindrome(String input){
        int start=0;
        int end = input.length()-1;
        while (start<end) {
            if (input.charAt(start)!= input.charAt(end)) {
                return false;
            }
            start++;
            end--;
        }return true;
    } 
}
