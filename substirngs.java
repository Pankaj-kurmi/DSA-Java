public class substirngs {
    public static void main(String[] args) {
        substring("ABC");
    }
    public static void substring( String name){
        int n = name.length();
        for (int i = 0; i < n; i++) {
            for (int j = i+1; j <= n; j++) {
                System.out.print(name.substring(i, j)+" ");
            }
        }
    }
}
