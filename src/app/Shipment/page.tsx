import ShippingRelated from "./ShippingRelated"
import Shipping from "./Shipping";


export default function Shipment(){
    return (
        <>
           <h1 className="font-bold text-2xl lg:text-4xl text-center text-black">Welcome TO Shipment FAQ</h1>
       <Shipping/>
       <ShippingRelated/>
        </>
    );
}