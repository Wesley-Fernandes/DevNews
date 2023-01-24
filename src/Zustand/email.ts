import { create } from "zustand";
import supabase from "../Supabase/supabase";

interface data {
    map(arg0: (email: any) => JSX.Element): import("react").ReactNode;
    id: number;
    email: string;
    created_at: Date;
}

interface EmailType {
    emails: data[],
    request: ()=>void;
}
const useEmailStore = create<EmailType>(set=>({
    emails: [],
    request: async () => {
        const {data}:any = await supabase.from("users").select("*")
        console.log("fetch");
        set(state =>({emails: [...state.emails, data]}))
    }
}))

export default useEmailStore;