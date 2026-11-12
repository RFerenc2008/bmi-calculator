import { test } from "vitest";
import { describe } from "vitest";
import { getCateg } from "./utils";
import { expect } from "vitest";

/*test('egyszerű teszt',()=>{
    expect(2+3).toBe(5)
})*/



describe('getCateg fgv tesztelése',()=>{
    test('normál testsúly esetén megfelelő kategóriát ad vissza',()=>{
        const result=getCateg(172,60)
        expect(result.category).toBe('Normál testsúly')
    })
    test('alacsony BMI esetén megfelelő kategóriát ad vissza',()=>{
        const result=getCateg(172,40)
        expect(result.category).toBe('Alultáplált')
    })
    test('magas BMI esetén megfelelő kategóriát ad vissza',()=>{
        const result=getCateg(100,120)
        expect(result.category).toBe('Elhízás III. fokozat')
    })
    test('a visszaadott érték egy objektum',()=>{
        const result=getCateg(172,60)
        expect(result).toBeTypeOf('object')
    })
    test('a visszaadott objektumnak van BMI attribútuma ',()=>{
        const result=getCateg(172,60)
        expect(result).toHaveProperty('bmi')
    })
    test('a bmi erteket egy tizedesjegyre kerekiti',()=>{
        const result=getCateg(172,60)
        expect(result.bmi).toBe(20.3)
    })
})

describe('a bemeneti ertekek tesztelese',()=>{
    test('ha a magasság nem szám hibát dob',()=>{
        expect(()=>getCateg('172',60)).toThrow()
    })
    test('ha a súly nem szám hibát dob',()=>{
        expect(()=>getCateg(172,'60')).toThrow()
    })
    test('ha a magasság 0 hibát dob',()=>{
        expect(()=>getCateg(0,60)).toThrow()
    })
    test('ha a magasság negatív hibát dob',()=>{
        expect(()=>getCateg(-172,60)).toThrow()
    })
})