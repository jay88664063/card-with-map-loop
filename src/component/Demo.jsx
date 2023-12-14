import { useState } from "react";
import "./style.css"



function FunctionDemo() {
    const data = [
        {
            name: "BEARING",
            image: "https://media.gettyimages.com/id/185263951/photo/bearing.jpg?s=612x612&w=0&k=20&c=iQeM20yaxcgsbrrQ0tmt89pKSB8lF_m5hCeqlFa9oA8=",
            description: "Redesigned around the next-generation M2 chip, MacBook Air is strikingly thin and brings exceptional speed and power efficiency within its durable all‑aluminium enclosure.",
            price: 5000,
        },
        {
            name: "CEAT TYRE",
            image: "https://media.istockphoto.com/id/95757579/photo/profile-and-side-profile-view-of-a-car-wheel-on-white.webp?b=1&s=170667a&w=0&k=20&c=-Lf1wToyu9rABUhYmES-xpR5jYkrL4YHTMg57vly_Yc=",
            description: "Redesigned around the next-generation M2 chip, MacBook Air is strikingly thin and brings exceptional speed and power efficiency within its durable all‑aluminium enclosure.",
            price: 7000,
        },
        {
            name: "SOLAR PANNEL",
            image: "https://media.istockphoto.com/id/1162762396/photo/team-of-automotive-engineers-working-on-electric-car-chassis-platform-taking-measures-working.jpg?s=612x612&w=0&k=20&c=xFi6U-gC8OJ2Qa8RnZaml3Rs0SSXe35BvRmfMZ1TKsM=",
            description: "Redesigned around the next-generation M2 chip, MacBook Air is strikingly thin and brings exceptional speed and power efficiency within its durable all‑aluminium enclosure.",
            price: 250000,
        },
        {
            name: "SUSPENSION",
            image: "https://media.istockphoto.com/id/1414449765/photo/wheel-structure-car-wheel-with-brake-isolated-on-a-white-background-3d-illustration.webp?b=1&s=170667a&w=0&k=20&c=8b0NgMfgJqMH1xOS4eUZ1Qa4j1daKHo1tRoh0Rk68Eg=",
            description: "Redesigned around the next-generation M2 chip, MacBook Air is strikingly thin and brings exceptional speed and power efficiency within its durable all‑aluminium enclosure.",
            price: 30000,
        },
        {
            name: "V4 ENGINE",
            image: "https://media.istockphoto.com/id/693624242/photo/automotive-engine-gearbox-assembly-without-shadow-on-white-background-3d.jpg?s=612x612&w=0&k=20&c=BNWXnRp75Hdohj44ZqEBbl2KCO3jfqi6P1xgtXq1ZKg=",
            description: "Redesigned around the next-generation M2 chip, MacBook Air is strikingly thin and brings exceptional speed and power efficiency within its durable all‑aluminium enclosure.",
            price: 250000,
        },
        {
            name: "SUPER CHARGER",
            image: "https://media.istockphoto.com/id/643567206/photo/generic-car-turbo-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=7XaxYtEyE_bSKMoIswO90HG-e43AJL10J1XqMOX2CNE=",
            description: "Redesigned around the next-generation M2 chip, MacBook Air is strikingly thin and brings exceptional speed and power efficiency within its durable all‑aluminium enclosure.",
            price: 50000,
        },
        {
            name: "HID LAMP",
            image: "https://thumbs.dreamstime.com/b/d-s-hid-bulb-isolated-white-144439277.jpg?w=768",
            description: "Redesigned around the next-generation M2 chip, MacBook Air is strikingly thin and brings exceptional speed and power efficiency within its durable all‑aluminium enclosure.",
            price: 2000,
        }, {
            name: "SPENER",
            image: "https://images.unsplash.com/photo-1613206485381-b028e578e791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRvb2xzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
            description: "Redesigned around the next-generation M2 chip, MacBook Air is strikingly thin and brings exceptional speed and power efficiency within its durable all‑aluminium enclosure.",
            price: 2000,
        }, {
            name: "GEARS",
            image: "https://cdn.pixabay.com/photo/2016/03/04/19/36/gears-1236578_640.jpg",
            description: "Redesigned around the next-generation M2 chip, MacBook Air is strikingly thin and brings exceptional speed and power efficiency within its durable all‑aluminium enclosure.",
            price: 200000,
        }
    ]


    const [product, setProduct] = useState(data);
    console.log(product)

    // const [search, setSearch] = useState('');

    /*---------------------------------------------------------------*/

    function handleproduct() {

        const device = data.filter((element) => {
            if (element.price > 30000)
                return element;
        })

        setProduct(device)
    }

    /*----------------------------searching method--------------------------------*/


    function Search(value) {
        
        const filter = data.filter((element) => {
            if (element.name.includes(value)) {
                return element;
            }
        })

        setProduct(filter)
    
    }
   

    return (
        <>
            <div className="container">


                <button onClick={handleproduct}>button</button>
                <input type="text" onKeyUp={(e) => Search(e.target.value)} />


                <div className="row">
                    {
                        product.map((element) => {
                            // console.log(element);    
                            return (
                                <div className="col-4">
                                    <div className="card mt-4 align-items-center text-">

                                        <h1 class="fs-2 fw-bold">{element.name}</h1>
                                        <img src={element.image} alt="" />
                                        <h3 class="fs-4">{element.description}</h3>
                                        <span class="fs-3 fw-bold"><i class="fa-solid fa-truck-fast m-2"></i>{element.price}</span>

                                    </div>
                                </div>
                            )
                        })
                    };

                </div>
            </div>
        </>
    )
}

export default FunctionDemo;




