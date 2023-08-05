function fun()
{
    
    var name=document.getElementById("name");
    var email=document.getElementById("email");
    var contact=document.getElementById("mobile");
    var msg=document.getElementById("msg");
    if(name.value=="" || email.value=="" || contact.value=="" || msg.value=="")
    {
        window.alert("Enter the  required field");
    }
    else
    {
        var disp=document.getElementById("last");
        disp.style.display="block";
        var table = document.getElementById("detailTable");
        var count=0;
    for (let row of table.rows) 
    {
        for(let cell of row.cells) 
        {
        if(cell.innerText == email.value || cell.innerText==contact.value)
        count=1;
        }
    }
    if(count==1)
    alert("User already exists");
    else
    {
      alert("Thanks for connecting. You can see your details below "); 
    var row = table.insertRow(table.length);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = name.value;
    cell2.innerHTML = email.value;
    cell3.innerHTML=contact.value;
    cell4.innerHTML=msg.value;

    row.setAttribute("class","table-success");
    name.value='';
    email.value='';
    contact.value='';
    msg.value='';
    }
}
}
function sixty(x)
{
    x.src="./images/sixty.png";
}
function sixtyFive(x)
{
    x.src="./images/sixtyfive.png";
}
function seventy(x)
{
    x.src="./images/seventy.png";
}
function seventyFive(x)
{
    x.src="./images/seventyfive.png";
}
function eighty(x)
{
    x.src="./images/eighty.png";
}
function ninety(x)
{
    x.src="./images/ninety.png";
}
function eightyFive(x)
{
    x.src="./images/eightyfive.png";
}
function displayJava(x)
{
    x.src="./images/java.png";
}
function displayJS(x)
{
    x.src="./images/js.jpeg";
}
function displayPython(x)
{
    x.src="./images/python_new.png";
}
function displayHtml(x)
{
    x.src="./images/html.png";
}
function displayCSS(x)
{
    x.src="./images/css.png";
}
function displaySwift(x)
{
    x.src="./images/Swift.jpeg";
}
function displaySql(x)
{
    x.src="./images/sql.webp";
}
function displayOOPS(x)
{
    x.src="./images/OOPs.jpeg";
}
function displayDS(x)
{
    x.src="../images/algorithms.png";
}
function displayDbms(x)
{
    x.src="./images/dbms.webp";
}
function displayReact(x)
{
    x.src="./images/react-logo.png";
}
function displayRubyOnRails(x)
{
    x.src="./images/rubyonrails.png";
}
function displayAngular(x)
{
    x.src="./images/Angular.png";
}
function mysql(x)
{
    x.src="./images/mysql.png";
}
function mssql(x)
{
    x.src="./images/mssql.jpeg";
}
function github(x)
{
    x.src="./images/GitHub-Mark.png";
}
