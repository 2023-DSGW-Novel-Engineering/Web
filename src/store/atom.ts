import { atom } from "recoil";

export const isSignIn = atom<boolean>({
  key: "isSignIn",
  default: false,
});

export const UserNameValue = atom<string>({
  key: "userName",
  default: "",
});
