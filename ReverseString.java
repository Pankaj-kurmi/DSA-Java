package strings;

public class ReverseString {
    public static void main(String[] args) {
        reverse_String("pankaj");
        System.out.println("---------------");
        reverse_String2("kurmi");
    }
    public static void reverse_String(String name){
        String temp = " "; 
        for (int i = 0; i < name.length(); i++) {
            temp = name.charAt(i) + temp;
        }
        System.out.println(temp);
    }
    public static void reverse_String2(String input){
        StringBuilder ans = new StringBuilder(input);
        int n = input.length();
        for (int i = 0; i < n/2; i++) {
            char first = ans.charAt(i);
            char last = ans.charAt(n-1-i);
            ans.setCharAt(i, last);
            ans.setCharAt(n-1-i, first);
        }
        System.out.println(ans.toString());
    }
}
