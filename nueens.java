public class nueens {
    public static void main(String[] args) {
        int n =4;
        char chessBoard[][] = new char[n][n];
        // initilazise
        for (int i = 0; i < n; i++) {
            for (int j = i; j < n; j++) {
                System.out.println('.');
            }
        }
        Nqueens(chessBoard,0);
    }
    public static void Nqueens(char chessBoard[][],int row){
        if (row== chessBoard.length) {
            print(chessBoard);
            return;
        }
        for (int j = 0; j < chessBoard.length; j++) {
           if (isSafe(chessBoard, row, row)) {
            chessBoard[row][j] ='Q';
            Nqueens(chessBoard, row+1);
            chessBoard[row][j] ='.';
           }
        }
    }
    public static void print(char chessBoard[][]){
        System.out.println("--------------------------");
        for (int i = 0; i < chessBoard.length; i++) {
            for (int j = 0; j < chessBoard.length; j++) {
                System.out.print(chessBoard[i][j] + " ");
            }
            System.out.println();
        }
    }
    public static boolean isSafe(char chessBoard[][], int row, int col){
        // first case Vertically up
        for (int i = row; i >=0 ; i--) {
            if (chessBoard[i][col]=='Q') {
                return false;
            }
        }
         // diagonally up
         for (int  k = row-1, j=col-1;k>=0 && j>=0; k--,j--) {
            if (chessBoard[k][j]=='Q') {
                return false;
            }
        }
        // diagonally right up
        for (int i = row-1,j=col+1; i>=0 && j < chessBoard.length; i--,j++) {
            if (chessBoard[i][j]=='Q') {
                return false;
            }
        }
        return true;
    }
}
