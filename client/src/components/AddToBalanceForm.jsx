import { useForm } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Text,
  Flex,
  Button,
} from "@chakra-ui/react";
import { useContext } from "react";
import { BycClubContext } from "./../context/context";

export default function AddToBalanceForm() {
  const { Deposit } = useContext(BycClubContext);
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (values) => {
    console.log(JSON.stringify(values, null, 2));
    const { depositbalance } = values;
    await Deposit(depositbalance);
  };

  return (
    <Flex justifyContent={"center"} alignItems={"center"} p={5} mt={10}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Text fontFamily={"heading"} fontSize={"large"} fontWeight={600} mb={4}>
          Deposit Account
        </Text>
        <FormControl isInvalid={errors.payment}>
          <Input
            id="depositbalance"
            type="number"
            step="any"
            placeholder="Deposit ETH"
            {...register("depositbalance", {
              required: "This is required",
            })}
          />
          <FormErrorMessage>
            {errors.payment && errors.payment.message}
          </FormErrorMessage>
        </FormControl>
        <Button
          mt={4}
          backgroundColor="black"
          isLoading={isSubmitting}
          type="submit"
          textColor="white"
        >
          Deposit
        </Button>
      </form>
    </Flex>
  );
}
