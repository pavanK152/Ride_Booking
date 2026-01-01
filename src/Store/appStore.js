import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  savedPlaces: [
    { type: "Home", address: "123 Downtown Home", icon: "Home" },
    { type: "Work", address: "256  Noida It Park", icon: "Work" },
    { type: "Gym", address: "999 Cult Fit", icon: "Gym" },
  ],
  userStats: { rating: 4.8, rides: 49, saved: 2.5 },
  userData: {
    name: "Arjun",
    email: "arjun28@gmail.com",
    phoneNumber: "+123456789",
    walletBalance: 0,
  },
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    // pass no of hrs to this function
    upDateRidesAndHours: (state, action) => {
      state.userStats = {
        ...state.userStats,
        rides: state.userStats.rides + 1,
        saved: state.userData.saved + action.payload,
      };
    },
    // update balance
    upDateWalletBalance: (state, action) => {
      let updatedBalance = state.userData.walletBalance;

      if (action.payload.type == "increment") {
        updatedBalance = updatedBalance + action.payload.balance;
      } else if (action.payload.type == "decrement") {
        updatedBalance = updatedBalance - action.payload.balance;
      }

      state.userData = {
        ...state.userData,
        walletBalance: updatedBalance,
      };
    },
    upDateProfileData: (state, action) => {
      state.userData = {
        ...state.userData,
        ...action.payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { upDateRidesAndHours, upDateWalletBalance, upDateProfileData } =
  appSlice.actions;

export default appSlice.reducer;
