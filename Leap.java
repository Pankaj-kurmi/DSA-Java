import java.util.Scanner;

class leap {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter year to be Searched");
        int year  = sc.nextInt();
       
        sc.close();
        isLeapYear(year);
        
    }
    public static void isLeapYear(int year ){
       
         if (year % 4 == 0 && year != 0 || year %400 ==0) {
            System.out.println(" yes , its a leap year");
        }
        else{
            System.out.println(" no , its not a leap year ");
        }
       }
    }

