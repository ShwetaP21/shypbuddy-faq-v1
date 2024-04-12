import BlockPinCodes from "./BlockPinCodes";
import MultipleWarehouseManagement from "./MultipleWarehouseManagement";
import ShipmentChargesExplanation from "./ShipmentChargesExplanation";
import ShippingRateCalculation from "./ShippingRateCalculation";
import ShippingZonesExplanation from "./ShippingZonesExplanation";
import ViewAllRatesExplanation from "./ViewAllRatesExplanation";

export default function Tools(){
    return (
        <>
           <h1 className="font-bold text-2xl lg:text-4xl text-center text-black">Welcome TO ShypBUDDY Tools</h1>
     <BlockPinCodes/>
     <MultipleWarehouseManagement/>
     <ShipmentChargesExplanation/>
     <ShippingRateCalculation/>
     <ShippingZonesExplanation/>
     <ViewAllRatesExplanation/>
        </>
    );
}