import { renderCards } from "./render";
import { bmiRules } from "./rules";
import './style.css'
import { calcBmi, findCategories } from "./util"

window.kattlikatt = function kattlikatt() {
    const weight = document.getElementById("kg").value
    const height = document.getElementById("cm").value
    const eredmenyDiv = document.getElementById("eredmeny")
    try {
        const result = calcBmi(height, weight)
        console.log(result);
        const rule = findCategories(result)
        console.log(rule);

        const kartyak = [result].map(obj => `<div class="kartya">A BMI indexed: ${obj} <br>
        ${rule.category} <br>
        ${rule.message}
        </div>`);
        eredmenyDiv.innerHTML = kartyak.join("");
    } catch (error) {
        console.log(error);
        eredmenyDiv.textContent=error
    }







    /*if (rule) {
        console.log("Kategória: ", rule.category);
    }*/
    document.getElementById("kg").value = ""
    document.getElementById("cm").value = ""
}
