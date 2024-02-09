import Image from "next/image";
import * as React from "react";

interface IPageProps {}

const Page: React.FunctionComponent<IPageProps> = (props) => {
  return (
    <div className="flex flex-col p-4 space-y-4 max-w-xl mx-auto">
      <h2 className="text-4xl font-bold text-center">The Sale Process</h2>
      <p>
        Congratulations! You are at the final stage of buying or selling your
        car.
      </p>

      <p>
        Here are the 5 steps you need to follow to complete the sale and
        registration of your car.
      </p>
      <Image
        src="/images/the-sale-process/yellow-mini-car.jpg"
        alt="The Sale Process"
        width="400"
        height="300"
        style={{
          width: "100%",
        }}
      />
      <p>These instructions are for the following conditions:</p>
      <p>
        <strong>Seller:</strong> You are a resident or citizen of the UAE with a
        privately owned car.
      </p>
      <p>
        <strong>Buyer:</strong> You are a resident of Dubai or a citizen of UAE
        who wishes to register the car in their name.
      </p>
      <p>
        <strong>Vehicle status:</strong> The car is in the seller’s name with
        valid registration in Dubai. The car also has a mortgage (also referred
        to as a bank loan) as indicated on the bottom of the vehicle
        registration.
      </p>
      <div className="w-full border-b pt-4" />
      <h2 className="text-xl underline font-bold">
        Step 1: Sign the vehicle sales agreement
      </h2>
      <p>
        NoLemons will send both parties an online vehicle sales agreement to
        your provided email address. The agreement contains all IDs, buyer and
        seller personal information, vehicle registration details and the agreed
        upon payment method (bank transfer, bank branch visit, or cash).
      </p>
      <h2 className="text-xl underline font-bold">
        Step 2: Visit the seller’s bank
      </h2>
      <p>
        The seller and buyer visit a bank branch to pay the mortgage (loan)
        balance and release the vehicle. The bank is integrated with the RTA. As
        such the mortgage removal will be updated and removed on the RTA system
        electronically. We recommend visiting a mutually convenient branch in
        the morning.
      </p>
      <p>
        In some cases the seller may not have the funds immediately available to
        clear the mortgage. In this case, the seller may ask the buyer to pay
        the outstanding loan balance to release the vehicle without delay. Rest
        assured any payments made by the buyer to the bank will be deducted from
        the balance (agreed sale price) owed. Please keep receipts of any
        payment(s) to the bank.
      </p>
      <p>
        In this case the buyer can choose to keep the license plates as
        collateral once the vehicle is re-parked in a secure location. Typically
        we recommend the vehicle is parked at the seller’s home or parking
        garage.{" "}
      </p>
      <p>
        Note on Step 2: Please keep in mind if the buyer decides to keep the
        license plates the vehicle will need to be transported. NoLemons can
        arrange for a recovery truck. At this point the car should not be driven
        on public roads except to load/unload the vehicle.
      </p>
      <h2 className="text-xl underline font-bold">
        Step 3: Wait for loan release to be processed
      </h2>
      <p>
        A SMS and/or email will be sent by the bank and the RTA to the seller
        that the car is now released. The bank branch will inform you of the
        expected timeline.
      </p>
      <div>
        <Image
          src="/images/the-sale-process/msg-1.jpg"
          alt="The Sale Process"
          width="300"
          height="250"
        />
        <p className="text-gray-400 mt-1">Example: Bank SMS to the Seller</p>
      </div>
      <div>
        <Image
          src="/images/the-sale-process/msg-2.jpg"
          alt="The Sale Process"
          width="300"
          height="250"
        />
        <p className="text-gray-400 mt-1">Example: RTA SMS to the Seller</p>
      </div>
      <h2 className="text-xl underline font-bold">Step 4: Buy car insurance</h2>
      <p>
        The buyer must have a valid insurance policy before registering the car
        in their name. Insurance is also available at most RTA centers but it is
        generally cheaper and faster if you buy it ahead of time. NoLemons can
        connect you with several providers of third party or comprehensive
        (full) insurance at the lowest rates.
      </p>

      <h2 className="text-xl underline font-bold">Step 5: Meet at RTA</h2>
      <p>
        The buyer and seller meet at a nearby RTA center with the vehicle during
        working hours to complete the transfer. Please bring original Emirates
        IDs, vehicle registration card and the license plates (front and back).
      </p>
      <p>
        Note: For clarification the vehicle transfer fees are to be paid by the
        buyer. Traffic fines and any unresolved traffic matters are the sole
        responsibility of the seller.
      </p>
      <p>Information and exact RTA fees can be found on the links below: </p>
    </div>
  );
};

export default Page;
