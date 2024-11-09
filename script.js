function AddCustomer(){alert('مرحبا بك')}
function DELCustomer(){alert('تم الحذف')}
var cName =document.getElementById('cName');
var cEmail =document.getElementById('cEmail');
var cNumber =document.getElementById('cNumber');
var cMember =document.getElementById('cMember');
var cPhoto =document.getElementById('cPhoto');
var cGender =document.getElementById('cGender');
var typeofmembership =document.getElementById('typeofmembership');
var cPay =document.getElementById('cPay');
var sports =document.getElementById('sports');
var notes =document.getElementById('notes');

function AddProduct()
{
    var Member[] =
    {
    name:cName.value,
    email:cEmail.value,
    number:cNumber.value,
    nmember:cMember.value,
    cPhoto:`/image${cPhoto.files[0].name}`,
    gender:cGender.value,
    TmShip:typeofmembership.value,
    pay:cPay.value,
    sports:sports.value,
    notes:Description.value,
}
    ClearData();
    display();
    console.log(Member);
}
function ClearData()
{
    cName.value=""
    cEmail.value=""
    cNumber.value=""
    cMember.value=""
    cPhoto.value=""
    cGender.value=""
    typeofmembership.value=""
    cPay.value=""
    sports.value=""
    Description.value=""
}
function display() {
    var club = ""
    
    for (var i = 0; i < Member.length; i++)
    {
        club +=`
        ${i}
        ${Member[i].name}
        ${Member[i].email}
        ${Member[i].number}
        ${Member[i].nmember}
        ${Member[i].cPhoto}
        ${Member[i].gender}
        ${Member[i].TmShip}
        ${Member[i].pay}
        ${Member[i].sports}
        ${Member[i].notes}
        `
    }