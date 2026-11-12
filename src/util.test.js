import { describe } from "vitest";
import { test } from "vitest";
import { calcBmi } from "./util";
import { expect } from "vitest";

describe('calcBmi függvény testelése',()=>{
    test('helyes adatok esetén megfelelő számot ad vissza',()=>{
        expect(()=>calcBmi(0,60)).toThrow()
        
    })
})