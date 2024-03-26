

function btnClick(e){
 document.getElementById('inp').value += e
}
function clearAll(){
    document.getElementById('inp').value = ''
}
function eq(){
    var getvalue = document.getElementById('inp')
    getvalue.value=eval(getvalue.value)
}