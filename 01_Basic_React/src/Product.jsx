import Price from "./price";
import "./Product.css"

export default function Product( { title, idx }){

    let oldPrices = ["12,495", "11,900", "1,599", "599"];
    let NewPrices = ["8,999", "9,199", "899" ,"278"];
    let description =[
        ["8,000 DPI","5 Programmable buttons"], 
        ["Intutive surface","designed for ipad pro"],
        ["designed for iPad Pro","Intutive surface"],
        ["Wireless","optical orintation"]
    ]

    return(
        <div className="Product"  >
            <h4>{title}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
           <Price oldPrice={oldPrices[idx]} NewPrice ={NewPrices[idx]} /> 
        </div>
    )
}