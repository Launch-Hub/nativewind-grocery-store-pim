import React from "react";
import { ScrollView } from "react-native";
import { Box, HStack } from "@/components/ui";
import Banner from "@/components/shared/Banner";
import Header from "@/components/shared/Header";
import WebSidebar from "@/components/shared/WebSidebar";
import MainContent from "@/components/shared/main-content/MainContent";

const Explorepage = ({ activeTab, setActiveTab }: any) => {
  return (
    <>
      <Box className={`w-full ${activeTab != "Profile" ? "flex" : "hidden"}`}>
        {/* top banner */}
        <Banner />
        {/* header */}
        <Header />
      </Box>

      {/* mobile */}
      <ScrollView className="h-[1px] md:hidden">
        <Box
          className={`${activeTab !== "Profile" ? "flex" : "hidden"} md:hidden`}
        >
          <MainContent setActiveTab={setActiveTab} activeTab={activeTab} />
        </Box>
      </ScrollView>

      {/* web */}
      <HStack className="w-full hidden md:flex flex-1">
        <WebSidebar />
        <ScrollView style={{ flex: 1 }}>
          <MainContent setActiveTab={setActiveTab} activeTab={activeTab} />
        </ScrollView>
      </HStack>
    </>
  );
};

export default Explorepage;
