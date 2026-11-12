import { bmiRules } from "./rules"

export function calcBmi(height, weight) {

    if (!Number(height) || !Number(weight)) {
        throw new Error('Helytelen érték')
    }
    if(height<=0 || weight <=0){
        throw new Error('0-nál többnek kell lennie az értékeknek')
    }
    const magassagM = height / 100
    const bmi = weight / (magassagM * magassagM)
    return Number(bmi.toFixed(2))
}

export function findCategories(result) {
    const matchedRule = bmiRules.find(rule => result >= rule.min && result < rule.max)
    return matchedRule
}