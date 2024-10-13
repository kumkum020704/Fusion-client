import React from "react";
import SpacsMembers from "../../user/components/SpacsMembers";
// eslint-disable-next-line import/no-unresolved
import AwardsAndScholarshipCatalog from "../../user/components/AwardsAndScholarshipCatalog";
// eslint-disable-next-line import/no-unresolved
import PreviousWinners from "../../user/components/PreviousWinners";

export default function Convenor() {
  return (
    <div>
      <SpacsMembers />
      <AwardsAndScholarshipCatalog />;
      <PreviousWinners />
    </div>
  );
}
