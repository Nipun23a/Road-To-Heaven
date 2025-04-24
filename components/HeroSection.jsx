import {useEffect, useState} from "react";

export default function HeroSection(){
    const [mounted,setMounted] = useState();

    useEffect(() => {
        setMounted(true);

    }, []);

    const sriLankaSlides = [
        {
            id:1,

        }
    ]
}