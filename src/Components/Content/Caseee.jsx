{/* other offers */}
<div className="flex flex-col items-start justify-start w-auto">
<Text className="font-bold text-white_A700 text-xl w-auto">
  Other offers
</Text>
</div>

{otherOffers
.slice(0, offersDisplayCount)
.map((offer, index) => (
  <div
    key={index}
    className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full"
  >
    <div className="flex flex-col items-center justify-center w-auto sm:w-full">
      <div className="flex flex-col gap-2 items-start justify-start w-auto">
        <Text className="text-base text-white_A700 w-auto">
          Offer name
        </Text>
        {/* <input
            placeholder="Enter name"
            className="p-0 placeholder:text-gray_300 text-base bg-gray_800 text-gray_300 rounded w-[400px] text-left h-12 pl-4"
            type="text"
            value={offer.offers_name}
            onChange={(e) => handleOfferChange(index, "offers_name", e.target.value)}
          /> */}
        <input
          placeholder="Enter name"
          className="p-0 placeholder:text-gray_300 text-base bg-gray_800 text-gray_300 rounded w-[400px] text-left h-12 pl-4"
          type="text"
          value={offer.offers_name}
          onChange={(e) => handleOfferChange(index, "offers_name", e.target.value)}                          
        />
      </div>
    </div>

    <div className="flex sm:flex-col flex-row gap-6 items-end justify-center w-auto sm:w-full">
      <div className="flex flex-col gap-2 items-start justify-start w-auto">
        <Text className="text-base text-white_A700 w-auto">
          Day
        </Text>
        <div className="bg-gray_800 flex flex-col h-12 md:h-auto items-start justify-center rounded w-[162px] sm:w-full">
          {/* <select
            className="p-0 placeholder:text-gray_300 text-base bg-gray_800 text-gray_300 rounded w-full text-left h-12 pl-4"
            name="selectedDate"
          >
            <option value="" disabled>
              Select a date
            </option>
            {selectedDates.map((selectedDate, index) => (
              <option key={index} value={selectedDate}>
                {new Date(selectedDate).toLocaleDateString(
                  "en-US"
                )}{" "}
              </option>
            ))}
          </select> */}

          <select
              className="p-0 placeholder:text-gray_300 text-base bg-gray_800 text-gray_300 rounded w-full text-left h-12 pl-4"
              name="selectedDate"
            value={offerDates[index]} // Use the selected date from the state
            onChange={(e) => {
              const updatedDates = [...offerDates];
              updatedDates[index] = e.target.value;
              setOfferDates(updatedDates);
            }}
          >
            <option value="" disabled>Select a date</option>
            {selectedDates.map((selectedDate, index) => (
              <option key={index} value={selectedDate}>
                {new Date(selectedDate).toLocaleDateString("en-US")} 
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-start justify-start w-auto">
        <Text className="text-base text-white_A700 w-auto">
          % off
        </Text>
        <div className="bg-gray-800 flex flex-col h-12 md:h-auto items-start justify-center rounded w-[94px] sm:w-full">
          <input
            className="p-0 placeholder:text-gray_300 text-base text-center bg-gray_800 text-gray_300 rounded w-[100px] text-left h-12 pl-4"
            isMulti={false}
            isSearchable={false}
            placeholder="%"
            value={offer.percentage} // Use the percentage value from the state
            onChange={(e) => {
              const updatedOffers = [...otherOffers];
              updatedOffers[index].percentage = e.target.value;
              setOtherOffers(updatedOffers);
            }}
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-auto">
        <div className="flex flex-col gap-2 items-start justify-start w-auto">
          <Text className="text-base text-white_A700 w-auto">
            Number of tickets
          </Text>
          <input
            placeholder="Enter number"
            className="p-0 placeholder:text-gray_300 text-base bg-gray_800 text-gray_300 rounded w-[115px] text-left h-12 pl-4 pr-2"
            type="number"
            value={offer.number_of_tickets} // Use the number of tickets value from the state
            onChange={(e) => {
              const updatedOffers = [...otherOffers];
              updatedOffers[index].number_of_tickets = e.target.value;
              setOtherOffers(updatedOffers);
            }}
          />
        </div>
      </div>
      
    </div>
    <div className="flex flex-col items-center justify-center w-auto sm:w-full">
  <div className="flex flex-col gap-2 items-start justify-start w-auto">
    <Text className="text-base text-white_A700 w-auto">
      Promo code
    </Text>
    <input
      placeholder="Enter code"
      className="p-0 placeholder:text-gray_300 text-base bg-gray_800 text-gray_300 rounded w-[400px] text-left h-12 pl-4"
      type="text"
      value={offer.promo_code} // Use the promo code value from the state
      onChange={(e) => {
        const updatedOffers = [...otherOffers];
        updatedOffers[index].promo_code = e.target.value;
        setOtherOffers(updatedOffers);
      }}
    />
    {/* <input
      name="groupThirtyOne"
      placeholder="Enter code"
      className="p-0 placeholder:text-gray_300 text-base bg-gray_800 text-gray_300 rounded w-[400px] text-left h-12 pl-4 pr-4"
      type="number"
    /> */}
  </div>
</div>
  </div>
))}

{showAddMoreButton && (
<div className="flex flex-col items-center justify-start pt-[3px]">
  <Text
    className="text-sm text-white_A700 underline"
    onClick={handleLoadMoreOffers}
  >
    Load More Offers
  </Text>
</div>
)}



// FORM
// formData.append("selected_other_offers", JSON.stringify(otherOffers));
formData.append(  "selected_other_offers", JSON.stringify(otherOffers.slice(0, 5)) // Take up to 5 offers
);



  
const otherOffers = selectedOtherOffers.map((offer) => ({
  offers_name: offer.offers_name,
  offer_day: offer.offer_day, // This will be the selected date
  promo_code: offer.promo_code,
  percentage: offer.percentage,
  number_of_tickets: offer.number_of_tickets,
}));

