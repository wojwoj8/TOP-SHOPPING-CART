import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import App from "./App";
import About from "./components/About";
import Shop from "./Shop";
import { act } from "react-dom/test-utils";

describe("App component", () =>{
    it("display homepage", () =>{
        const { container } = render(<App />)
        expect(container).toMatchSnapshot();
})

    it("renders about after click about on navbar", async () =>{
        render(<App />);
        await act(async () =>{
            const about = screen.getByRole("link", {name:"About"});
            await userEvent.click(about);
        })
        const h2 = screen.getByText(/About page/i);
        expect(h2).toBeInTheDocument();
        
    })
})

describe("Shop component", () =>{
    it("display shop page with 11 items", async () =>{
        
        render(<App/>)
        await act(async () =>{
            const shop = screen.getAllByRole("link", {name:"Shop"});
            userEvent.click(shop[0]);
        })  
        const items = document.querySelectorAll('.card-item');
        expect(items.length).toBe(11);
        
       
    })
    it("shop items redirect to item component",async () =>{
        render(<App/>)
        await act(async () =>{
            const shop = screen.getAllByRole("link", {name:"Shop"});
            userEvent.click(shop[0]);
            const shopItemLink = screen.getByText("BCAA");
            //access to item with name BCAA
            userEvent.click(shopItemLink)
        })  
        const price = screen.getByText(/Price:/i);
        console.log(price)
        expect(price).toBe("Price:50$");
    })
})