package HashMap;
import java.util.*;

public class intro {
    public static void main(String[] args) {
        HashMap<Integer , String> mymap = new HashMap<>(); // declearation
        //insertion put methods
        mymap.put(1, "Pankaj"); 
        mymap.put(2, "Prabhat"); 
        mymap.put(3, "Mohit"); 
        mymap.put(4, "Piyush"); 
        mymap.put(5, "Shivam"); 
        //System.out.println(mymap);
        //System.out.println(mymap.get(3));

        //---- using of loop in HashMap
        for(Map.Entry<Integer,String> entry : mymap.entrySet()){
            System.out.println("key is -->" + entry.getKey());
            System.out.println("value is -->" + entry.getValue());
        }
      
    }
}
