function bt() {
    let a = document.getElementById("ip1").value;
    let b = document.getElementById("ip2").value;
    let bmi;

bmi=parseInt(a)/(parseInt(b)*parseInt(b))
    if (bmi < 18)
        alert(" gầy thanh tao");
    else if (bmi < 25.0)
        alert("Đẹp không chê được");
    else if (bmi < 30.0)
        alert("béo phúc hậu");
    else
        alert("bạn là sumo chính hãng");

}