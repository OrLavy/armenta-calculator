import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { green, red } from "@material-ui/core/colors";

interface IProps {}

type TFormData = {
  herdSize: string;
  mastitisPrevalenceValue: string;
  cullinRate: string;
  // In NIS
  rawMilkPrice: string;
};

const useStyles = makeStyles((theme) => ({
  textField: {
    "& label.Mui-focused": {
      // color: "#f5f5f5",
    },
  },
  actionButton: {
    transition: "background-color 0.2s linear, color 0.2s linear",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
      color: theme.palette.getContrastText(theme.palette.secondary.light),
    },
  },
}));

const DEFAULT_MASTITIS_PREVALENCE_VALUE = 51.7;
const DEFAULT_CULLING_RATE = 5;
const DEFAULT_RAW_MILK_PRICE = 2;

export const CalculatorForm = React.memo<IProps>((props) => {
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm<TFormData>();

  const [hasResult, setHasResult] = useState(false);
  const [result, setResult] = useState(0);

  const calculatedSavings = useCallback((formData: TFormData) => {
    // Parse to int
    const cullinRate = parseInt(formData.cullinRate);
    const herdSize = parseInt(formData.herdSize);
    const mastitisPrevalenceValue = parseInt(formData.mastitisPrevalenceValue);
    const rawMilkPrice = parseInt(formData.rawMilkPrice);

    // Calculate
    const infectedCows = Math.round((mastitisPrevalenceValue / 100) * herdSize);
    const culledCows = Math.round((cullinRate / 100) * herdSize);
    const litersLostToInfection = infectedCows * 3.4 * 150;
    const potentialLose = litersLostToInfection * rawMilkPrice;
    const totalCull = culledCows * 8000;
    const totalLoss = totalCull + potentialLose;
    const applicatorsNeeded = Math.round(infectedCows / 60);
    const totalApplicatorsCost = applicatorsNeeded * 9000;
    const totalFarmerInvestment = totalApplicatorsCost + 50000;
    const reductionOfLosses = totalLoss * 0.7;
    const newTotalLoss = totalLoss - reductionOfLosses + totalFarmerInvestment;

    const savings = totalLoss - newTotalLoss;

    return savings;
  }, []);

  const submit = useCallback(
    (formData: TFormData) => {
      const calculatedResult = calculatedSavings(formData);

      setHasResult(true);
      setResult(calculatedResult);
    },
    [calculatedSavings]
  );

  const farmerWillSaveMoney = result > 0;

  return (
    <>
      <form
        onSubmit={handleSubmit((fomData) => submit(fomData))}
        style={{
          maxWidth: "100%",
          // width: "100%",
          width: "60ch",
        }}
      >
        {/* Herd Size */}
        <TextField
          autoComplete={"off"}
          InputLabelProps={{ style: { pointerEvents: "auto" } }}
          name={"herdSize"}
          label={"Size of herd"}
          title={"Cattle heads in your herd"}
          variant={"outlined"}
          type={"number"}
          required
          inputRef={register}
          fullWidth
          className={classes.textField}
        />
        <br />
        <br />

        {/* Mastitis prevalence value */}
        <TextField
          autoComplete={"off"}
          InputLabelProps={{ style: { pointerEvents: "auto" } }}
          name={"mastitisPrevalenceValue"}
          label={"Mastitis prevalence value"}
          title={"Mastitis prevalence value"}
          variant={"outlined"}
          type={"number"}
          defaultValue={DEFAULT_MASTITIS_PREVALENCE_VALUE}
          required
          inputRef={register}
          fullWidth
          className={classes.textField}
          InputProps={{
            startAdornment: <InputAdornment position="start">%</InputAdornment>,
          }}
        />
        <br />
        <br />

        {/*Culling rate*/}
        <TextField
          autoComplete={"off"}
          InputLabelProps={{ style: { pointerEvents: "auto" } }}
          name={"cullinRate"}
          label={"Culling rate"}
          title={"Culling rate"}
          variant={"outlined"}
          type={"number"}
          defaultValue={DEFAULT_CULLING_RATE}
          required
          inputRef={register}
          fullWidth
          className={classes.textField}
          InputProps={{
            startAdornment: <InputAdornment position="start">%</InputAdornment>,
          }}
        />
        <br />
        <br />

        {/*Raw milk price (in NIS) */}
        <TextField
          autoComplete={"off"}
          InputLabelProps={{ style: { pointerEvents: "auto" } }}
          name={"rawMilkPrice"}
          label={"NIS/liter Milk ratio"}
          title={"NIS/liter Milk ratio"}
          variant={"outlined"}
          type={"number"}
          defaultValue={DEFAULT_RAW_MILK_PRICE}
          required
          inputRef={register}
          fullWidth
          className={classes.textField}
          InputProps={{
            startAdornment: <InputAdornment position="start">₪</InputAdornment>,
          }}
        />
        <br />
        <br />

        {/* Submit */}
        <Button
          className={classes.actionButton}
          variant={"outlined"}
          fullWidth
          type={"submit"}
        >
          Calculate Savings
        </Button>

        {hasResult && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <br />
            <br />
            <Typography variant={"h4"} color={"secondary"}>
              Estimated savings :
            </Typography>
            <Typography
              variant={"h4"}
              style={{ color: farmerWillSaveMoney ? green[400] : red[400] }}
            >
              ₪ {result.toLocaleString()}
            </Typography>
          </div>
        )}
      </form>
    </>
  );
});
