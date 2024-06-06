"use client";
import React, { useRef } from "react";
import { Provider } from "react-redux";
import { AppStore, makeStore } from "../../lib/Store/Store";
import { add } from "../Features/cartSlice/cartSlice";
const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
    // add initial Data from local storage
    storeRef.current.dispatch(add('MovieId'));
  }
  return <Provider store={storeRef.current}>{children}</Provider>;
};

export default StoreProvider;
