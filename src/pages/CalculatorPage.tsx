import React from "react";
import { Page } from "../components/structure/Page";
import { ContentFitting } from "../components/structure/ContentFitting";
import { CalculatorForm } from "../components/forms/CalculatorForm";
import { Typography } from "@material-ui/core";

interface IProps {}

export const CalculatorPage = React.memo<IProps>((props) => {
  return (
    <Page>
      <ContentFitting
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant={"h4"}
          color={"secondary"}
          style={{ fontWeight: "bold" }}
        >
          Calculate your savings
        </Typography>
        <br />
        <CalculatorForm />
      </ContentFitting>
    </Page>
  );
});
