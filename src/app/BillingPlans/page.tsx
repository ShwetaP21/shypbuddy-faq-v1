import Credit from "./Credit";
import DelayedWalletUpdate from "./DelayedWalletUpdate";
import DownloadCOD from "./DownloadCOD";
import EarlyCOD from "./EarlyCOD";
import PaymentFrequency from "./Payment";
import Pending from "./Pending";
import Recharge from "./Recharge";
import RechargeProcess from "./RechargeProcess";

export default function BillingPlans(){
    return (
        <>
        <h1 className="font-bold text-2xl lg:text-4xl text-center text-black">Welcome TO Billing Plans</h1>
        <RechargeProcess/>
        <Credit/>
        <DelayedWalletUpdate/>
        <DownloadCOD/>
        <EarlyCOD/>
        <PaymentFrequency/>
        <Pending/>
        <Recharge/>
        </>
    );
}