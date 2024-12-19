import { AppComponent } from "./app.component";

describe("AppComponent", () => {
    it("Testing contain", () => {
        const element = new AppComponent();

        expect(element.title).toContain('Hello')
    })

    it("check contain this array", () => {
        const cars = ["lambo", "BWN", "Bugatti"];
        expect(cars).toContain("BWN")
    })

    it("Login must be true", () => {
        let num1 = 20;
        let num2 = 30
        expect(num1 < num2).toBeTruthy()
    })
})