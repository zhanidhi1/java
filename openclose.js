//var myWindow;
//function openWin(){
//    myWindow = window.open("", "myWindow", "width=200,height=100");
//    myWindow.document.write("<p>This is 'myWindow'</p>");
//}
//function closeWin(){
//    myWindow.close();
//}
    var myWindow;
    function openWin(){
        myWindow=windpw.open("","myWindow","width=200","height=100");
        myWindow.document.write("<p>This is 'myWindow'</p>");
    }
    function moveWin(){
        myWindow.moveBy(300,300);
        myWindow.focuc();
    }
  

    function myFunction1(){
        confirm("Press a button!");
    }
    function myFunctio2(){
        alert("Hello! i am an alert box!");
    }
    function myFunction3(){
        var person= prompt("Please enter your name","Nidhi");
        if(person!=null){
            document.write("Hello"+person+ "!How are you today?");
        }
    }
    <body>
        <button onclick="openWin()">Open "myWindow"</button>
        <button onclick="moveWin()">Move "myWindow"</button>

        <button onclick="myFunction1()">press</button>
        <button onclick="myFunction2()">alert</button>
        <button onclick="myFunction3()">Name</button>
    </body>
   

