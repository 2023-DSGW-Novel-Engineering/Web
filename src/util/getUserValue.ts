import { Api } from "./Api";

const getUserValue = () => {
  const userToken: string | null = localStorage.getItem("Token");
  if (userToken) {
    Api.get("/api/users/info", {
      headers: { Authorization: `Bearer ${userToken}}` },
    })
      .then((e) => {
        console.log("tt", e);
        return e;
      })
      .catch((e) => {
        return e;
      });
  }
};

export default getUserValue;
