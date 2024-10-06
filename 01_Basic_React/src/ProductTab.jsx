import Product from "./product";

export default function ProductTab(){
    let styles = {
        
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItem: "center"

    }
    return(
        <>
            <h1>Blockbuster Deals | Shop Now</h1>
            <div style={styles}> 
                <Product title="Logitech MX Master" idx ={0} />
                <Product title="Apple Pencil (2nd Gen)" idx={1} />
                <Product title="Zebronics zeb-transformer" idx={2} />
                <Product title="Petronics Toad 23" idx={3} />
            </div>
        </>
    );
}