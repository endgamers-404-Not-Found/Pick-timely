import { useState } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

export default function Example() {
    const [open, setOpen] = useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    return (
        <div className="mx-96">
            <Accordion open={open === 1} onClick={() => handleOpen(1)}>
                <AccordionHeader>What is Material Tailwind?</AccordionHeader>
                <AccordionBody>
                    We're not always in the position that we want to be at. We're
                    constantly growing. We're constantly making mistakes. We're constantly
                    trying to express ourselves and actualize our dreams.
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 2} onClick={() => handleOpen(2)}>
                <AccordionHeader>How to use Material Tailwind?</AccordionHeader>
                <AccordionBody>
                    We're not always in the position that we want to be at. We're
                    constantly growing. We're constantly making mistakes. We're constantly
                    trying to express ourselves and actualize our dreams.
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 3} onClick={() => handleOpen(3)}>
                <AccordionHeader>What can I do with Material Tailwind?</AccordionHeader>
                <AccordionBody>
                    We're not always in the position that we want to be at. We're
                    constantly growing. We're constantly making mistakes. We're constantly
                    trying to express ourselves and actualize our dreams.
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 3} onClick={() => handleOpen(3)}>
                <AccordionHeader>What can I do with Material Tailwind?</AccordionHeader>
                <AccordionBody>
                    We're not always in the position that we want to be at. We're
                    constantly growing. We're constantly making mistakes. We're constantly
                    trying to express ourselves and actualize our dreams.
                </AccordionBody>
            </Accordion>
        </div>
    );
}