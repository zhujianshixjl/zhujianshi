function test(){
    Array.from(document.getElementsByTagName("input")).forEach(a => a.value ="");
    Array.from(document.getElementsByTagName("select")).forEach(a => a.value ="");
}
function query(){
    let queryContArr = Array.from(document.getElementsByClassName("queryConti"));
    let queryValue = Array.from(document.getElementsByClassName("queryOne"));
    queryValue.filter(i => !(i.innerText == queryContArr[0].value)).forEach(i => i.parentNode.parentNode.removeChild(i.parentNode))
}
function k(){
    var value = document.getElementById("querry").style.display;
if(value=="none")
{
document.getElementById("querry").style.display="block";
}
else
document.getElementById("querry").style.display="none";
}

function j(){
    let name = document.getElementById("tj_name").value;
    let age = document.getElementById("tj_age").value;
    let sex = document.getElementById("tj_xb").value;
    let wz = document.getElementById("tj_wz").value;
    let jg = document.getElementById("tj_jg").value;
    let tc = document.getElementById("tj_tc").value;
    let tianjia = `<tr>
    <td>${name}</td>
    <td>${age}</td>
    <td>${sex}</td>
    <td>${jg}</td>
    <td>${wz}</td>
    <td>${tc}</td>
    <td>
        <span style="padding-left: 20px;"></span><button
            style="background-color: #07baf8;">详情</button>
        <span style="padding-left: 20px;"></span><button
            style="background-color: #65df4b;">修改</button>
        <span style="padding-left: 20px;"></span><button
            style="background-color: pink;" class="shanchu">删除</button>
        <span style="padding-left: 20px;"></span><button
            style="background-color: #ffab00;">添加图片</button>
    </td>
</tr>`
  document.getElementById("showTable").innerHTML +=tianjia
}
Array.from(document.getElementsByClassName("shanchu")).forEach(i =>
    i.onclick=function(){
        this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
    })

