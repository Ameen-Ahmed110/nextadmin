 import { connect } from "mongoose";
import { User } from "./models";
import { connectToDB } from "./utils";
export const fetchUsers = async () => {
  try {
 connectToDB();
    const users = await User.find();
    return users
  } catch (error) {
    console.log(error)
    throw new Error("Failed to fetch users!")
    
  }
  // const regex = new RegExp(q, "i");
}

//DUMMY DATA

export const cards = [
    {
      id: 1,
      title: "Total Users",
      number: 10.928,
      change: 12,
    },
    {
      id: 2,
      title: "Stock",
      number: 8.236,
      change: -2,
    },
    {
      id: 3,
      title: "Revenue",
      number: 6.642,
      change: 18,
    },
  ];