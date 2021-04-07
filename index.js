
let currentplayer="X";
let wining=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let matrix=["","","","","","","","",""];
let count=0;
let status=true;





function clicked(event){
    
    let item=document.getElementById(`${event.target.id}`);
    if(item.getAttribute("status")=="false")
    {
        count++;
        item.innerHTML=`${currentplayer}`;
        matrix[`${event.target.id}`-1]=`${currentplayer}`;
        console.log(matrix);
        
        if(currentplayer=="X")
        {
            
            currentplayer="O";
            document.getElementById("message").innerHTML="Player 2 turn";
            

        }
        
        else
        {
            
            currentplayer="X";
            document.getElementById("message").innerHTML="Player 1 turn";
        }
       
        item.setAttribute("status", "true");
        checkstatus();
    }
}
function checkstatus(){
    for(let i=0;i<8;i++){
        if(matrix[wining[i][0]]=="X"&&matrix[wining[i][1]]=="X"&&matrix[wining[i][2]]=="X")
        {
           alert("Congratulations! Player1 wins");
          
            status=false;
            checkall(true);
            break;
        }
        if(matrix[wining[i][0]]=="O"&&matrix[wining[i][1]]=="O"&&matrix[wining[i][2]]=="O")
        {
            alert("Congratulations! Player2 wins");
           
            status=false;
            checkall(true);
            break;
        }
        
    }
    if(count==9&&status){
        alert("Draw!");
    }

}
function checkall(value)
{
    let item = document.querySelectorAll("#main div")
    for(let x=0;x<9;x++)
    {
        item[x].setAttribute("status",`${value}`);
    }
}

