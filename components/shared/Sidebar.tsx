import React from "react";
import { VStack, ScrollView } from "@/components/ui";
import AmenitiesSection from "@/components/shared/sidebar/AmenitiesSection";
import BookingOptions from "@/components/shared/sidebar/BookingOptions";
import CustomerRatingSection from "@/components/shared/sidebar/CustomerRatingSection";
import FiltersAppliedSection from "@/components/shared/sidebar/FiltersAppliedSection";
import PlaceTypeSection from "@/components/shared/sidebar/PlaceTypeSection";
import PriceRangeSection from "@/components/shared/sidebar/PriceRangeSection";
import SortBySection from "@/components/shared/sidebar/SortBySection";

const Sidebar = () => {
  const [scrollEnabled, setScrollEnabled] = React.useState<boolean>(true);
  return (
    <ScrollView className="w-full" scrollEnabled={scrollEnabled}>
      <VStack space="xl" className="py-6 px-4">
        <FiltersAppliedSection />
        <SortBySection />
        <PlaceTypeSection />
        <AmenitiesSection />
        <PriceRangeSection setScrollEnabled={setScrollEnabled} />
        <BookingOptions />
        <CustomerRatingSection />
      </VStack>
    </ScrollView>
  );
};
export default Sidebar;
