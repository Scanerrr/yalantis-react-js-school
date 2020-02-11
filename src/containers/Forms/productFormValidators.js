import {
  combineValidators,
  composeValidators,
  isRequired,
  isNumeric,
  hasLengthBetween,
  isOneOf
} from "revalidate";

export const formValidators = combineValidators({
  product: {
    name: composeValidators(isRequired, hasLengthBetween(3, 20))("Title"),
    price: composeValidators(isRequired, isNumeric)("Price"),
    origin: composeValidators(
      isRequired,
      isOneOf(["africa", "asia", "europe", "usa"])
    )("Origin")
  }
});
