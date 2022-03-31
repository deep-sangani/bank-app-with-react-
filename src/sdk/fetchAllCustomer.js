import React, { useState } from "react";
import axios from "./customAxiosConfig";

const fetchAllCustomer = async (data) => {
  try {
    return await axios.get("/getAllAccounts");
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default fetchAllCustomer;
