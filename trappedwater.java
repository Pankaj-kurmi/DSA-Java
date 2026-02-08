public class trappedwater {
    public static void main(String[] args) {
        int height[]={0,1,0,2,1,0,1,3,2,1,2,1};
        int ans =Rainwater(height);
        System.out.println("the total trapped water is = "+ ans);
    }
    // creating function 
    public static int Rainwater(int height[]){

        int n= height.length;
        // ----------------calculate leftmax
        int leftmax[]= new int[n];
        leftmax[0]=height[0];
        for (int i = 1; i < n; i++) {
            leftmax[i]=Math.max(height[i], leftmax[i-1]);
        }
        // ---------------- calculate rightmax
        int rightmax[]= new int[n];
        rightmax[n-1]=height[n-1];
        for (int i = n-2; i >= 0; i--) {
            rightmax[i]= Math.max(height[i], rightmax[i+1]);
        }
        //----------- loop for trapped water
        int trappedwater=0;
        int waterlevel=0;
        for (int i = 0; i < n; i++) {
            waterlevel = Math.min(leftmax[i], rightmax[i]);// minimum value among leftmax [i] and rightmax
            trappedwater += waterlevel-  height[i];
        }
        return trappedwater;
    } 
}
