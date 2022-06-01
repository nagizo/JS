function get_calc(btn) {
    let result = document.getElementById('result')
    let btn_value = btn.value;
    
    if (btn_value == "AC") {
        result.value = "0"
    } else if (btn_value == "=") {
        result.value = eval(result.value)

    } else if (btn_value == "%") {
        result.value = eval((result.value)/100)

    } else if (btn_value =="+/-") {
        result.value = eval("-" + result.value)
    } else {
        if (result.value == "0") {
            result.value = btn_value
        } else {
            result.value += btn_value
        }
    }
}

