import {test , expect} from '@playwright/test'
test.describe("group1",async()=>{
    test("test1",()=>{
        console.log("test 1 is executed successfully")
    })
    test('test2',()=>{
        console.log("test 2 is exceuted successfully")
    })
    test("test3",()=>{
        console.log("test 3 is exceuted successfully")
    })
})

test.describe("group2",async()=>{
    test("test4",()=>{
        console.log("test 4 is exceuted successfully")
    })
    test("test5",()=>{
        console.log("test 5 is exceuted successfully")
    })
})