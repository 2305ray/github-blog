import { useContext } from "react";
import { UserContext } from "../contexts/userApi";

export function useUser() {
    return useContext(UserContext)

}