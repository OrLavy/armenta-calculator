import React from "react";
import { Page } from "../components/structure/Page";
import { ContentFitting } from "../components/structure/ContentFitting";

interface IProps {}

export const CalculatorPage = React.memo<IProps>((props) => {
  return (
    <Page>
      <ContentFitting> CalculatorPage</ContentFitting>
    </Page>
  );
});
