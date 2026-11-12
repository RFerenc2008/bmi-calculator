import { bmiRules } from "./rules"
import './style.css'
import { calcBmi, findCategories } from "./util"

window.kattlikatt = function kattlikatt() {
    const weight = document.getElementById("kg").value
    const height = document.getElementById("cm").value
    const result = calcBmi(height, weight)

    const eredmenyDiv = document.getElementById("eredmeny")
    const rule = findCategories(result)
    const kartyak = [result].map(obj => `<div class="kartya">A BMI indexed: ${obj} <br>
        ${rule.category} <br>
        ${rule.message}
        </div>`);
    eredmenyDiv.innerHTML = kartyak.join("");
    
    /*if (rule) {
        console.log("Kategória: ", rule.category);
    }*/
    document.getElementById("kg").value = ""
    document.getElementById("cm").value = ""
}