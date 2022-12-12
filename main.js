function ut(){
    let year = document.getElementById("n1").value;
    let isleapYear = false;
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                isleapYear = true;
            }
        } else {
            isleapYear = true;
        }

    }

if (isleapYear){
    alert( "day la nam nhuan");
}else {
    alert( "khong phai nam nhuan");
}}