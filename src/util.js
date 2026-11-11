export function calcBmi(height, weight){

    if (!Number(height) || !Number(weight)) {
       // alert("Kérlek add meg a testsúlyodat és a magasságodat!");
        return "Helytelen érték!"
    }
    const magassagM = height / 100
    const bmi = weight / (magassagM * magassagM)
    return  `A BMI indexed: ${bmi.toFixed(2)}`
}