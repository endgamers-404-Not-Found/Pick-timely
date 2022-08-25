import { render, screen } from "@testing-library/react";
import Meetings from "./Meetings";

describe('Meeting component testing', ()=>{
it('component text testing', ()=>{
render(<Meetings />);
const text = screen.getByText('Set up your meetings in minutes. Really!');
expect(text).toBeInTheDocument();
})
})