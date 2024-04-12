import Ndr from "./Ndr";
import Rto from "./Rto";
import DeliveryDispute from "./DeliveryDispute";
import Nps from "./Nps";
import Pickup from "./PickUp";
import CreateOrder from "./CreateOrder";
import OrderProcess from "./OrderProcess";
export default function Orders() {
  return (
    <>
       <h1 className="font-bold text-2xl lg:text-4xl text-center text-black">Welcome TO Orders FAQ</h1>
      <CreateOrder />
      <OrderProcess />
      <Pickup />
      <Ndr />
      <Rto />
      <DeliveryDispute />
      <Nps />
    </>
  );
}
