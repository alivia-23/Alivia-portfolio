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
function bigImg(x) {
    x.style.height = "155px";
    x.style.width = "155px";
  }
  
  function normalImg(x) {
    x.style.height = "150px";
    x.style.width = "150px";
}
function java_e(x)
{
    x.src="./images/java_e.jpg";
}
function java(x)
{
    x.src="./images/java_1.png";
}
function c_e(x)
{
    x.src="./images/c_e.jpg";
}
function c(x)
{
    x.src="./images/C.png";
}
function html_e(x)
{
    x.src="./images/html_e.jpg";
}
function html(x)
{
    x.src="./images/html5.jpg";
}

function css_e(x)
{
    x.src="./images/css_e.jpg";
}
function css(x)
{
    x.src="./images/css.webp";
}
function js(x)
{
    x.src="./images/js_1.jpeg";
}
function oops(x)
{
    x.src="./images/OOPs.jpeg";
}
function ds_e(x)
{
    x.src="./images/ds_e.jpg";
}
function ds(x)
{
    x.src="../images/data-structures.jpg";
}
function dbms_e(x)
{
    x.src="./images/dbms_e.png";
}
function dbms(x)
{
    x.src="./images/dbms.jpg";
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
