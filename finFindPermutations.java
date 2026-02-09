public class finFindPermutations {
    public static void main(String[] args) {
        findPermutations("abc", "");
    }
    public static void findPermutations(String str , String ans ){
        
        // base conditions 
        if (str.length()==0) {
            System.out.println(ans);
            return;
        }
        for (int i = 0; i < str.length(); i++) {
            char curr = str.charAt(i);
           String Newstr= str.substring(0, i)+ str.substring(i+1);
            findPermutations(Newstr, ans+curr);
            
        }
        

    }
}
