import React, { useState } from "react";
import axios from "./customAxiosConfig";

const createAccount = async (data) => {
  const payload = {
    first_name: data.firstname,
    last_name: data.lastname,
    email_address: data.email,
    street_address: data.address,
    city: data.city,
    state: data.state,
    account_type: data.accounttype,
    pan_card: data.panno,
    mobile_no: data.phone,
    aadhar_card: data.aadharno,
    postal_code: data.zip,
    country: data.country,
    img: data.img,
  };

  return await axios.post("/createAccount", payload);
};

export default createAccount;
