import { ethers } from "ethers";
import { useState } from "react";
import axios from "axios";

export function useGetBalance() {
    const [userBalance, setUserBalance] = useState();

    async function getBalance(walletAddress) {
        console.log("IN GET BALANCE");
        await axios.get(`/get_balance?address=${walletAddress}`).then((res) => {
            const balance = res.data[0].balance
            const decimals = 18
            const balanceInMRST = ethers.utils.formatUnits(balance, decimals);
            setUserBalance(balanceInMRST)
            console.log({balance, decimals, balanceInMRST})

        }).catch((err) => console.log({err}))
    }

    return { userBalance, getBalance }
}