"use client";

import { useSearchParams } from "next/navigation";
import * as React from "react";

interface IHowItWorksPageProps {}

const firstSection = [
  {
    title: "How does bidding work?",
    content:
      "At any time in the auction, simply enter the amount you would like to bid. If your bid is higher than other bids and there is still time on the clock, you will become the high bidder. If someone outbids you, you will see this on the vehicle page. We will also alert you by email so you can decide if you want to increase your maximum bid.",
  },
  {
    title: "Can anyone bid?",
    content:
      "Yes. However, prior to placing a bid, you must be registered with a complete bidding profile. This includes an identification check and pre-authorization of AED 1,000 (approximately $272) using a credit card. This is to protect everyone from non-serious bidding.",
  },
  {
    title: "How much is the buyer’s fee?",
    isFeeItem: true,
    content:
      "As a buyer, you pay a 5% buyer’s fee to NoLemons only if you win the auction. The minimum buyer fee is AED 1,000. The final vehicle purchase price is paid directly to the seller. There are no other additional charges by NoLemons.",
  },
  {
    title: "What is a Reserve Price?",
    content:
      "The minimum price for the car to be sold. We work with sellers to ensure each car is listed for a fair and reasonable reserve price. The car will not be sold if bids are below the reserve (minimum price).",
  },
  {
    title: "What is the Reserve Price of the car I want to buy?",
    content:
      "We never share the car reserve (minimum price). We ask that buyers do not ask sellers about the reserve price as this can impact the auction.",
  },
  {
    title: "What is a No Reserve auction?",
    content:
      "If a car does not have a reserve (minimum sale price), you will see a “No Reserve” tag on the page. If you do not see this text, that auction has a reserve price. Reserve prices are not published, and we ask that buyers refrain from asking sellers about reserve pricing during the auction. The only time you’ll know if the reserve is met is if the car sells at auction close.",
  },
  {
    title: "How can I contact the Seller?",
    content:
      "Look for the green “Ask A Question” section located in every post. We will communicate with the seller and share the response with you.",
  },
  {
    title: "I have a question. How do I find out more about a car?",
    content:
      "If you have a question about anything to do with the car, please use the ‘Ask a Question’ section at the bottom of each post. Remember to check all of the photos, text, videos and the inspection report. We try to cover as much as possible in the listing.",
  },
  {
    title: "Can I comment or post a question?",
    content:
      "Yes and we encourage you to! The Ask a Question/Comments section is designed to allow the community to have a discussion about the car and assist both the potential buyers and the seller.",
  },
  {
    title: "Should I wait until the last few minutes to bid?",
    content:
      "We never recommend buyers to wait. It’s very easy to miss a car or a good deal. Remember, the best and most desired cars don’t come on sale often. If the auction is complete and the car is sold, we cannot take your offer.",
  },
  {
    title: "Has NoLemons inspected the car?",
    content:
      "While no used car is perfect, we believe buyers should know as much as possible about the car. The good, the bad, and the ugly. Each car undergoes a pre-purchase inspection at a specialist garage. Unlike other auctions, we require a professional pre-purchase inspection before accepting most vehicles. Inspections are conducted at a specialist garage who typically have the expertise and knowledge to inspect that vehicle make and model.",
  },
  {
    title: "Can I trust your car description?",
    content:
      "All cars we post have descriptions written by the No Lemons team, not by the seller. Our auction specialists carefully write each description after discussions, photos and documents from the seller and other public sources. We double-check as much as possible and include all known issues.",
  },
  {
    title: "Why has the auction time been extended?",
    content:
      "If a bid is received within the last 3 minutes of the auction, the countdown is reset to 3 minutes. This is to allow all buyers to consider making further bids without panic. All further bids will reset the 3 minute countdown. The auction ends when there have been no bids for 3 minutes.",
  },
  {
    title: "Can I trust the description?",
    content:
      "The listing is always prepared by NoLemons, not the seller. It is carefully written after discussions, photos, and documents from the seller and other public sources. We also include the inspection report so we are completely transparent with the vehicle’s condition. As always, we encourage you to ask questions if anything is unclear.",
  },
  {
    title: "Can I bid subject to my inspection?",
    content:
      "No. By submitting a winning bid, you are making a legally binding commitment to purchase the vehicle (as with a physical auction). Remember, a winning bid results in a 5% (minimum AED 1,000 = $272 USD) as non-refundable deposit payable to NoLemons. If you win you are authorizing us to debit a security deposit of at least AED 1,000 ($272 USD) as soon as the auction ends.",
  },
  {
    title: "How do I know the seller or buyer is trustworthy?",
    content:
      "As fellow enthusiasts we understand this is one of the biggest challenges when buying any used car. We do our best to conduct due diligence on all sellers before a vehicle is listed on the platform. If a seller, or buyer, drops below these standards repeatedly, we will ban them from the platform. But remember, we are not all complete experts on every single vehicle. Neither are we working with brand new vehicles. For this reason we require specialist inspections before posting the car. As always, we encourage you to ask any questions, we will work with sellers to answer truthfully and to the best of our ability.",
  },
  {
    title: "What happens at the end of the auction?",
    content:
      "If you are the winning bidder at the end of the auction you will be asked to immediately settle the 5% buyer’s fee (minimum of AED 1,000 = $272 USD) to NoLemons. Once this is paid we will share the email and mobile number of the seller and buyer. You should arrange payment with the seller through a method you both agree on. We also recommend that you arrange to pick up the vehicle within seven days.",
  },
  {
    title: "How do I pay the seller for the car?",
    content:
      "Please note the remaining balance is paid directly to the seller in a mutually convenient method. We recommend an online bank transfer. However, the decision is up to the buyer and the seller. Please note you must pay the full sale price as per the auction. It is not permitted to negotiate the price at the end of the auction.",
  },
  {
    title: "What payment methods does NoLemons accept?",
    content:
      "Only the buyer’s fee of 5% (or a minimum of AED 1,000 = $272) is collected by NoLemons. We accept Visa, MasterCard, Amex and most locally issued credit and debit cards. The payment gateway is powered by Stripe, a leading global payments provider. If you’re unable to pay online or facing difficulties please contact us at help@nolemons.ae.",
  },
  {
    title: "I have a problem. The car is not as I hoped it would be.",
    content:
      "Please note when placing a bid, you are entering an agreement to buy the vehicle. Remember there are comprehensive photos and descriptions of all parts of the car (good and bad). We also encourage all bidders to ask any questions before bidding/the end of the auction. In addition, you can check the inspection report. Used vehicles are rarely in perfect condition, so please ensure before bidding that you are satisfied with the vehicle’s condition. In general we will not be able to invalidate the sale for minor issues.",
  },
  {
    title: "What protection do I have if the car is not as described?",
    content:
      "If you find the vehicle has major and significant issues that were hidden and/or have been misrepresented by the seller. For example, major chassis damage, then we will look into it on a case-by-case basis provided that any such significant issues have been raised with us immediately upon your taking possession of the vehicle.",
  },
  {
    title: "Can I see the car before bidding?",
    content:
      "We typically do not allow in person viewings. As an online auction, we want to ensure equal access to all buyers (located around the world). We also want to save time for sellers who have busy schedules. For this reason, each auction comes with numerous photos of the car including closeups of any problems or discrepancies in addition to videos. The inspection report provides a full audit of the vehicle condition by a specialty garage. In addition, you can post as many questions as you like.",
  },
  {
    title: "Is NoLemons a registered and licensed business?",
    content:
      "NoLemons is a fully registered and licensed business operating in Dubai Internet City.",
  },
];

const secondSection = [
  {
    title: "How much does it cost to sell a car on NoLemons?",
    content:
      "Selling a car on NoLemons is easy and risk free. If the car is sold, you only pay a commission 2% (of the final sale price).",
  },
  {
    title: "Can I sell my car on NoLemons?",
    content:
      "NoLemons is only for enthusiast vehicles which come in all shapes, sizes, price points. We’re interested in all cool and desirable coupes, sedans, trucks, wagons, SUVs, sports cars, supercars, track, project cars and more. We accept both modern (up to 2021) and classic (up to 1950) vehicles. If it’s cool, unique, rare, or special, we probably want to hear about it. Want to know if your cool car is eligible? Submit your car by heading to Sell your car section on the nolemons.ae website. Our team will get back to you as soon as possible.",
  },
  {
    title:
      "Can I sell a vehicle if I live outside of the United Arab Emirates?",
    content:
      "Yes, no matter where you are and where the vehicle is located, you can sell it with NoLemons.",
  },
  {
    title: "What services do you provide to sellers?",
    content:
      "One of the biggest benefits of selling with NoLemons is the broker service for sellers. As a seller you won’t be bothered with calls and messages, NoLemons handles all buyer communication on your behalf. We also take care of the photoshoot, conduct a comprehensive inspection, and handle all marketing.",
  },
  {
    title: "Who creates the car post?",
    content:
      "We work with all of our sellers to create professional listings to allow the full vehicle history to be available online for review with unlimited photos, videos and documents. Our professional writers will work with you to find out more about your vehicle so they are able to create a listing that ensures it’s story is told in the best way possible.",
  },
  {
    title: "Can I edit the vehicle post?",
    content:
      "No. Our aim is to be transparent with buyers and keep listings honest. If something happens to the vehicle or changes during the auction you must communicate it to the NoLemons team, so we can conduct the required adjustments.",
  },
  {
    title: "Does the NoLemons team visit/view my vehicle?",
    content:
      "It depends. Alternatively, we may ask to set up a video call depending on your location and availability. Prior to the photoshoot and inspection we will also ask you to share the vehicle documents to confirm ownership.",
  },
  {
    title:
      "I want to auction my enthusiast car with no lmns. What do I need to provide?",
    content:
      "Proof of ownership ('Mulkiya' in UAE), some general photos, and as many closeup photos showing the good and not-so-good parts of your car. There is no limit to the photos, the more the better! If available, service history including recent garage receipts, vehicle history including documents, receipts, service books are highly desirable, a brief description of any issues. Don’t worry we’re not looking for perfect cars, only honest sellers and honestly presented cars.",
  },
  {
    title:
      "Why do you want to know all the issues and faults? Is this really necessary?",
    content:
      "Yes. We only post comprehensive auction listings. The cars are obviously not brand-new, no-one should expect them to be perfect. If we ignore or hide faults, buyers will not have the confidence to bid nor commit to buying a car online. Even worse, the winner of the auction (the buyer) could rightfully refuse buying the car if known faults (especially major ones) are hidden. In contrast, by describing issues and photographing any faults, we can actually achieve higher auction prices and improve odds of a successful sale. Every used vehicle has some faults, and everything has a price. Lets be open to ensure that both buyers and sellers know what they are dealing with. In short, put yourself in the shoes of the buyers. Imagine you were buying this car online. What would you like/need to see and know before paying?",
  },
  {
    title: "What if I hide issues or faults from NoLemons?",
    content:
      "Most vehicles are sold without the buyer having viewed the car beforehand. Some buyers will also be unfamiliar with the vehicle and what is commonly wrong on the particular make and model. If the buyer finds the vehicle is significantly mis-described on collection, they will be seriously dissatisfied and may cancel the purchase. We also would not accept any further vehicles from a seller who repeatedly misdescribes or misrepresents the vehicles they are selling.",
  },
  {
    title: "How long does it take to auction my vehicle?",
    content:
      "This will depend on availability and how quickly you can complete the inspection and photography session. We can typically set up an auction in less than a week, and the auctions run for 7 days. There are no hard deadlines though, we run auctions every week and are ready when you are.",
  },
  {
    title: "How do you ensure bidders (and buyers) are serious?",
    content:
      "Our process is designed to attract offers from serious buyers only, here are a few ways how: All bidders have to register with a credit or debit card to place a bid. All listings have comprehensive information on the vehicle and its condition including issues and faults. Bidders can also ask questions throughout the auction. Winning bidders are charged AED 1,000 and have to complete an online payment of a 5% buyer’s fee at auction before they are introduced to you (the seller). Disreputable buyers and sellers are permanently banned from the platform.",
  },
  {
    title: "How do I get paid?",
    content:
      "As a seller, the full vehicle price is paid directly to you – via a method that both you and the buyer agree on. We always recommend an online bank transfer but this is completely up to you and the buyer.",
  },
  {
    title: "Can a buyer cancel the purchase?",
    content:
      "The general answer is no. A winning bid at NoLemons online auction is final and binding unless you have materially misdescribed the vehicle. Buyer backout will result in loss of their deposit (credit card authorization) and a permanent ban from the platform.",
  },
  {
    title: "What if the reserve price is not met?",
    content:
      "If the reserve price has not been met by the end of the auction, the vehicle will not be sold. We may attempt to contact the highest bidder to see if we can arrange a mutually agreeable deal. We will never expect sellers to accept an unreasonably low offer for their vehicle.",
  },
  {
    title: "How do I submit my car for sale?",
    content:
      "To submit your car for sale, go to the “Sell your Car” section on the NoLemons website. In order to sell your car, you’ll need to provide us with some important information – like the make, model, year, a few photos, and some other relevant details. If your car qualifies, we’ll get in touch with you. A NoLemons team member will ask you for more details on your vehicle before putting you in touch with a qualified garage and photographer to complete the listing process.",
  },
  {
    title: "How long does an auction last?",
    content: "All auctions last for seven days.",
  },
  {
    title: "Can I schedule when my car’s auction starts?",
    content:
      "We can’t offer the ability to schedule your auction on a certain day or week. However, we allow our sellers to provide preferences. If you prefer a certain week or if you would prefer if your auction wasn’t live during a certain week (for example, due to a vacation or business trip), just let your assigned auction manager know.",
  },
  {
    title: "Can I edit my auction once it’s live?",
    content:
      "You can’t edit your auction yourself – but you can also leave comments in the Ask a Question section. You can also include additional photos and answer buyer questions to help improve your auction.",
  },
  {
    title: "How do I respond to questions during the auction?",
    content:
      "We highly recommend being an active in the Ask a Question section. You should respond to any questions or comments submitted there. A NoLemons team member may also reach out with questions from prospective buyers. Stay positive and constructive with your answers even if a buyer is being difficult. This will only increase confidence from other potential bidders and ultimately your success.",
  },
  {
    title: "Can I put a reserve price on my auction?",
    content:
      "Yes, we offer sellers the choice between a “Reserve” and a “No Reserve” auction. A “Reserve” is a minimum price that a seller is willing to accept for a car. This is hidden to buyers during the auction. A “No Reserve” auction has no minimum price. This means the car will sell for the amount of the highest bid. Please note to accept your vehicle reserve prices must be realistic and within current market price for your vehicle and its condition.",
  },
];

const HowItWorksPage: React.FunctionComponent<IHowItWorksPageProps> = (
  props
) => {
  const showFee = useSearchParams().get("showFee");

  return (
    <main className="p-4 h-screen w-full overflow-y-scroll pt-4 pb-8">
      <div className="flex flex-col mx-auto items-center">
        <div className="text-4xl font-bold my-4">I want to buy a car</div>
        <div className="bg-white w-full sm:w-1/2 lg:w-96 border border-gray-200 divide-y divide-gray-200">
          {firstSection.map((item, index) => (
            <details
              key={index}
              open={item.isFeeItem && !!showFee}
              style={
                item.isFeeItem && !!showFee
                  ? {
                      border: "1px solid #5a9e6f",
                    }
                  : {}
              }
            >
              <summary className="question py-3 px-4 cursor-pointer select-none w-full outline-none bg-[#fafafa]">
                {item.title}
              </summary>
              <p className="pt-1 pb-3 px-4">{item.content}</p>
            </details>
          ))}
        </div>
        <div className="text-4xl font-bold mb-4 mt-6">I want to sell a car</div>
        <div className="bg-white w-full sm:w-1/2 lg:w-96 border border-gray-200 divide-y divide-gray-200">
          {secondSection.map((item, index) => (
            <details key={index}>
              <summary className="question py-3 px-4 cursor-pointer select-none w-full outline-none bg-[#fafafa]">
                {item.title}
              </summary>
              <p className="pt-1 pb-3 px-4">{item.content}</p>
            </details>
          ))}
        </div>
      </div>
    </main>
  );
};

export default HowItWorksPage;
