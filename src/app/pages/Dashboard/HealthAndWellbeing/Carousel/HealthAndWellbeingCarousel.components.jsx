import React from "react";

import AllergiesCarouselCard from "../CarouselCards/AllergiesCarouselCard/AllergiesCarouselCard.component";
import ConditionsCarouselCard from "../CarouselCards/ConditionsCarouselCard/ConditionsCarouselCard.component";
import CurrentMedicationCarouselCard from "../CarouselCards/CurrentMedicationCarouselCard/CurrentMedicationCarouselCard.component";
import ProceduresCarouselCard from "../CarouselCards/ProceduresCarouselCard/ProceduresCarouselCard.component";
import {
  CarouselContainer,
  SectionContainer,
} from "./HealthAndWellbeingCarousel.elements";

export default function HealthAndWellbeingCarousel() {
  return (
    <SectionContainer>
      <h1 id="header">Health and Wellbeing</h1>
      <div id="CarouselWrapper">
        <CarouselContainer>
          <AllergiesCarouselCard />
          <ConditionsCarouselCard />
          <ProceduresCarouselCard />
          <CurrentMedicationCarouselCard />
        </CarouselContainer>
      </div>
    </SectionContainer>
  );
}
