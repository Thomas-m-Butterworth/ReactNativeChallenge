import { create } from "zustand";
import { defaultData } from "./testData";
import { DataStore } from "./types";

export const useDataStore = create<DataStore>(() => ({
  data: defaultData,
}));
