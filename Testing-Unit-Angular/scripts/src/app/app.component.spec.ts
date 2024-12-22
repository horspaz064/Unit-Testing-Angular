import { AppComponent } from "./app.component";

describe("AppComponent", () => {
    const component = new AppComponent()
    
    it("testing add function", () => {
        expect(component.add(5, 5)).toBe(10)
    })

    it("testing multiply function", () => {
        expect(component.multiply(1, 2)).toBe(2)
    })
})