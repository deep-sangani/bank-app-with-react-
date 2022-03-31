import React, { useState } from "react";
import axios from "./customAxiosConfig";

const dipositBalance = async (data) => {
  const payload = {
    acc_no: data.accountno,
    deposit_amt: data.depositamount,
    particulars: data.perticulers,
    transactionid: data.transactionid,
  };

  try {
    return await axios.post("/deposit", payload);
  } catch (error) {
    console.log(error);
  }
};

export default dipositBalance;
