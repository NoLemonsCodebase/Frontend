import * as React from "react";

interface IHowSellingWorksPageProps {}

const HowSellingWorksPage: React.FunctionComponent<
  IHowSellingWorksPageProps
> = (props) => {
  return (
    <main className="p-4 h-screen w-full overflow-y-scroll pt-4 pb-8">
      <div className="flex flex-col mx-auto max-w-xl text-lg font-normal">
        <div className="text-4xl font-bold my-4 text-center">
          How Selling Works
        </div>
        <div className="text-3xl font-bold my-6">The NoLemons Approach</div>
        <p>At NoLemons we want to help you:</p>
        <ol className="mt-3">
          <li>1. Maximize the chance your car sells </li>
          <li>2. Get you a great price for your car</li>
          <li>3. Save you time and unnecessary stress</li>
        </ol>
        <p className="my-3">
          We aim to give as much information as possible upfront to buyers. That
          way buyers are able to fully evaluate your car online.
        </p>
        <p>
          We have{" "}
          <span
            style={{
              textDecoration: "underline",
            }}
          >
            3 steps before your car can go live on auction.
          </span>
        </p>

        <div className="flex flex-col space-y-4 mt-10">
          <div className="text-3xl font-bold">1. Garage Inspection</div>
          <p>New vehicles under warranty do not require the inspection</p>
          <p className="italic">
            Most cars we list are used and well beyond the coverage of a factory
            warranty. As such, we usually require a pre-purchase inspection at
            one of our partner garages. Why?
          </p>
          <ul className="list-disc ml-4">
            <li>
              Being honest and transparent. This actually increases the number
              of offers you will receive.{" "}
            </li>
            <li>
              Honesty is the only policy. We don’t require your car to be
              perfect or fault-free. It’s perfectly fine to sell with NoLemons
              even if the car needs some work.
            </li>
            <li>
              Buyer’s deserve to know the full story. Sellers don’t want any
              last minute negotiations or worse a buyer back out.
            </li>
            <li>
              NoLemons works with multiple garages and we prefer specialists
              whenever available.
            </li>
            <li>Vehicles with a valid warranty are usually exempt</li>
          </ul>
        </div>

        <div className="flex flex-col space-y-4 mt-10">
          <div className="text-3xl font-bold">2. Professional Photography</div>
          <p className="italic">
            We work with several automotive photographers who have experience
            with shooting enthusiast cars. Your car will get up to 100 photos
            and 4-5 videos. Why?
          </p>
          <ul className="list-disc ml-4">
            <li>To show everything a buyer might want to know – online</li>
            <li>
              Our photographers can meet you at multiple locations. Sometimes we
              can even shoot at your home (if you have a suitable location).
            </li>
          </ul>
        </div>

        <div className="flex flex-col space-y-4 mt-10">
          <div className="text-3xl font-bold">
            3. Creating Your Vehicle Post
          </div>
          <p className="italic">
            Our team of writers will prepare and organize your post from A to Z.
            All you have to do is provide us the info and share documents.
          </p>
          <ul className="list-disc ml-4">
            <li>
              Your car’s story: How long you’ve had it, what you’ve done to it
              and more
            </li>
            <li>
              Ownership documents (vehicle registration card, title or similar)
            </li>
            <li>Past service and maintenance records (dealer and garage)</li>
            <li>Warranty and service contract (if applicable)</li>
            <li>Past repair and accident repair bills (if applicable)</li>
          </ul>
          <p className="underline">
            Please share copies/photos of any of the above. The more the
            merrier.
          </p>
        </div>

        <div className="flex flex-col space-y-4 mt-12">
          <div className="text-3xl font-bold">How Do I Get Started?</div>
          <ul className="list-disc ml-4">
            <li>
              We will send you contact details to set up appointments for your
              garage inspection and photography session.
              <ul className="list-disc ml-6">
                <li>Choose the earliest date and time that works for you.</li>
              </ul>
            </li>
            <li>
              Send any information, documents (see Step 3) to{" "}
              <a href="mailto:admin@nolemons.ae" className="underline">
                admin@nolemons.ae
              </a>{" "}
              or via Whatsapp at{" "}
              <a
                href="https://wa.me/971566633668"
                className="underline"
                target="_blank"
              >
                +971 56 663 3668
              </a>
            </li>
            <li>
              Remember, first come first served. The faster you complete these
              steps the earlier your car goes live!
            </li>
            <li>
              <p className="font-bold">Important</p>
              <ol className="list-decimal ml-6">
                <li>Your car cannot be sold externally during the auction.</li>
                <li>
                  Your car cannot be advertised on any websites, pages or
                  channels. Any ads must be removed before proceeding.
                </li>
                <li>
                  Our team will manage all buyer communication on your behalf
                </li>
              </ol>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default HowSellingWorksPage;
