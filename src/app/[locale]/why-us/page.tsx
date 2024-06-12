import React from "react";
// comment

const NoLemons = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Why NoLemons?</h1>
      <div className="space-y-8">
        {/* Section 1: Cool Cars Only */}
        <section className="bg-blue-100 p-6 rounded-lg shadow-md">
          <h2 className="font-semibold text-2xl mb-2">1. Cool Cars Only 😎</h2>
          <p>
            The online auction marketplace exclusively for enthusiast cars — we
            only feature cool, exciting or rare cars, trucks and SUVs
          </p>
        </section>

        {/* Section 2: No More Lemons */}
        <section className="bg-yellow-100 p-6 rounded-lg shadow-md">
          <h2 className="font-semibold text-2xl mb-2">
            2. No More Lemons ❌🍋
          </h2>
          <p>
            No Lemons does extensive checks before a car is listed. Whenever
            needed we will also arrange a pre-purchase inspection by an
            independent third party. We even share all found vehicle’s issues
            and faults
          </p>
        </section>

        {/* Section 3: No Deal = No Fees */}
        <section className="bg-green-100 p-6 rounded-lg shadow-md">
          <h2 className="font-semibold text-2xl mb-2">
            3. No Deal = No Fees 🤝
          </h2>
          <p>
            You only pay us when a deal is done. Even better fees are low and
            transparent. Buyers pay a flat 5% commission. Sellers list for free
            and only pay 2% if the car is sold.
          </p>
        </section>

        {/* Section 4: Global Buying */}
        <section className="bg-purple-100 p-6 rounded-lg shadow-md">
          <h2 className="font-semibold text-2xl mb-2">
            4. Buy from (almost) anywhere in the world 🌏
          </h2>
          <p>
            50% of our cars sell internationally. We’ve exported cars all over
            the Gulf and beyond with bidders from UAE, KSA, Kuwait, Qatar,
            Bahrain, and Oman. We’ve even served buyers in destinations as far
            as South Africa and the US. Even better, NoLemons handles all the
            work including the paperwork and shipping.
          </p>
        </section>

        {/* Lemon Definition */}
        <section className=" p-6 rounded-lg shadow-md">
          <h2 className="font-semibold text-2xl mb-2">What is a Lemon? 🍋</h2>
          <p>
            In car speak a lemon is a car that should’ve never rolled off the
            assembly line. It’s an awful heap of metal with endless issues. Over
            time the term “lemon” has expanded to include problematic cars with
            hidden issues, accidents and dodgy repairs. The ones whose owners
            can’t wait to offload to unsuspecting buyers
          </p>
        </section>

        {/* Our Story */}
        <section className="p-6 rounded-lg shadow-lg">
          <h3 className="font-bold text-xl mb-4">Our Story</h3>
          <div className="flex flex-col space-y-2">
            <p>
              The idea for NoLemons first came in the early summer of 2021. We
              love cars. Ok fine, we might be a bit obsessed. But we all hated
              the process of searching, checking and buying a cool (used) car.
              We got tired of ‘hunting’ on random websites, taking the time to
              drive to a seller, and searching in seriously sketchy car markets.
              We often found the car for sale was nothing like one advertised
              online. And figuring out the car’s issues and if the seller was
              being honest was dreadful. Once our co-founder Sammy bought 2
              lemons in a row (a Datsun 240Z and a Factory Five Shelby Cobra) he
              knew there had to be a better way.
            </p>
            <p>
              Unfortunately the experience is the same whether you’re shopping
              for a (used) Jeep Wrangler or a Ferrari 599 or something in
              between. And if you want something even more special? Say a
              Typhoon, Viper ACR, a 930 Turbo, R33 GT-R or a S2000? Or maybe E46
              BMW M3, a manual Cayenne GTS, or a bone stock Mustang GT? Good
              luck. You’ll need to go down the rabbit hole(s) of owner whatsapp
              groups, random instagram pages, or know a guy at ‘that’ garage. It
              shouldn’t be so hard to find a great (and fairly priced) car,
              especially not in 2024.
            </p>
            <p>
              Don’t even get us started about selling. Got an interesting and
              cool car that you’re letting go? Prepare yourself for endless
              “last price” messages, low-ballers, tire kickers, spirited
              test-drives, and endless requests for more ‘information’. Then
              repeat it all again next weekend on your precious and hard-earned
              day off. I think we can all agree selling is possibly the worst
              part of owning an enthusiast car.
            </p>
            <p>
              No Lemons is here to reimagine the way we find, buy and sell
              interesting and exciting cars. Join us in making it better for
              every enthusiast.
            </p>
          </div>
        </section>

        {/* TL;DR */}
        <section className="bg-gray-200 p-6 rounded-lg shadow-md">
          <h3 className="font-bold text-xl mb-4">TL;DR</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold">NO:</h4>
              <ul className="list-disc ml-4">
                <li>Boring commuter cars.</li>
                <li>
                  Cars with misleading or dishonest descriptions. Not cool.
                </li>
                <li>Dishonest sellers hiding issues and repairs.</li>
                <li>
                  Sellers that are dishonest or hide issues and repairs. Not
                  welcome
                </li>
                <li>
                  Haggling sellers. Let’s treat each other with respect. Every
                  car has its fair price. Don’t be that guy trying to get it for
                  a ‘steal’. Not nice.
                </li>
                <li>Fees just to sign up. Not here.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">YES:</h4>
              <ul>
                <li>Cool cars are sold here</li>
                <li>
                  Honest cars with 100% transparency about all issues, faults,
                  and imperfections
                </li>
                <li>
                  Inspections for each and every car. It’s your right to know
                  what your buying
                </li>
                <li>
                  Pro photography for all cars. Beauty shots and scratches, we
                  want to see it all.
                </li>
                <li>
                  Fair fees for results. 5% for buyers and 2% for sellers only
                  when deals are done.
                </li>
              </ul>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default NoLemons;
