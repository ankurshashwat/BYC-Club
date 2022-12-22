import { useForm } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Text,
  Flex,
} from "@chakra-ui/react";
import { useContext } from "react";
import { BycClubContext } from "./../context/context";

export default function PayForm() {
  const { Payment } = useContext(BycClubContext);
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (values) => {
    console.log(JSON.stringify(values, null, 2));
    const { payment } = values;
    await Payment(payment);
  };

  return (
    <Flex justifyContent={"center"} alignItems={"center"} p={5} mt={10}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Text fontFamily={"heading"} fontSize={"large"} fontWeight={600} mb={4}>
          Pay Due
        </Text>
        <FormControl isInvalid={errors.payment}>
          <Input
            id="payment"
            type="number"
            step="any"
            placeholder="Payment"
            {...register("payment", {
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
          Pay Due
        </Button>
      </form>
    </Flex>
  );
}
