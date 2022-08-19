import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from './Navbar';

describe('navbar teting', ()=>{
    it("navbar text testing", ()=>{
        render(<Navbar />, {wrapper: BrowserRouter});
        const text = screen.getByText('Pick-Timely');
        expect(text).toBeInTheDocument();
    });
});