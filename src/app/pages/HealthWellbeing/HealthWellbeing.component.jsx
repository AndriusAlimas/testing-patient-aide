// Import: Packages
import React from "react";

// Import: Components
import { GenericCard } from "../../components";

// Import: Elements
import { SectionContainer } from "./HealthWellbeing.elements";
// Component: healthWellbeing
export default function HealthWellbeing({ sidebar }) {
  return (
    <>
      <SectionContainer sidebar={sidebar} data-testid="healthWellbeing">
        {/* Top Wrap Container for Patient Card: */}
        <div className="cardsWrapContainer">
          <GenericCard title="Smith, Jane">
            <h2>
              Age <span></span>
            </h2>
            <h2>
              Height <span></span>
            </h2>
            <h2>
              Weight <span></span>
            </h2>
          </GenericCard>
        </div>

        {/* Other Wrap Container For Other Health Records, Plan, and etc.. */}
        <div className="cardsWrapContainer ">
          <GenericCard>
            <div className="healthCard">
              <h1>My Health Records</h1>
            </div>
          </GenericCard>
          <GenericCard>
            <div className="healthCard">
              <h1>Caresphere</h1>
            </div>
          </GenericCard>
          <GenericCard>
            <div className="healthCard">
              <h1>My Care Plans</h1>
            </div>
          </GenericCard>
        </div>
      </SectionContainer>
    </>
  );
}
