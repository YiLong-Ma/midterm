import Image from "next/image";
import { useState } from "react";
import { list } from "@/data/list";

export default function Product() {
    img = "";
    tag = "";
    price = 0;

    const [data, setData] = useState(0);

    return(
        <>
            <Image
                loader={myLoader}
                src = "img"
                alt="Picture of the author"
                width={200}
                height={200}
            />
            <div>
                {tag}
            </div>
            <div>
                {price}
            </div>
        </>
    )
}