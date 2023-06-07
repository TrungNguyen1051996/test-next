import { authApi } from "@/api-client/index";
import useSWR from "swr";

export const useAuth = (options) => {
  const { data, error, mutate } = useSWR("/profile", {
    dedupingInterval: 60000,
    revalidateOnFocus: false,

    ...options,
  });

  async function login() {
    await authApi.login({
      username: "test1",
      password: "123123",
    });
    await mutate();
  }
  async function logout() {
    await authApi.logout();
    mutate({}, false);
  }

  return {
    data,
    error,
    login,
    logout,
  };
};
