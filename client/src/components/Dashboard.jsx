import Stats from "./Stats"
import { Stack, Box,} from "@chakra-ui/react"
import Bicycle from "./Bicycle"
import RentersForm from "./RentersForm"
import { useContext, useState } from "react"
import { BycClubContext } from './../context/context';

const Dashboard = () => {
    const { renterExists, currentAccount } = useContext(BycClubContext)
    console.log(renterExists)
    return (
        <Stack
            as={Box}
            textAlign={'center'}
            spacing={{ base: 8, md: 14 }}
            py={{ base: 20, md: 36}}>
        { renterExists && currentAccount ? <Stats /> : <RentersForm /> }
        <Bicycle />
        </Stack>
    )
}

export default Dashboard