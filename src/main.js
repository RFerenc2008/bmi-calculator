import { bmiRules } from "./rules"
import './style.css'
import { calcBmi, findCategories } from "./util"

window.kattlikatt = function kattlikatt() {
    const weight = document.getElementById("kg").value
    const height = document.getElementById("cm").value
    const result = calcBmi(height, weight)

    const eredmenyDiv = document.getElementById("eredmeny")
    eredmenyDiv.textContent = result
    const rule = findCategories(result)
    if (rule) {
        console.log("Kategória: ", rule.category);
    }
}