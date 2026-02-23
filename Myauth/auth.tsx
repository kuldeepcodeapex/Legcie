import { supabase } from "@/lib/supabase";
import React, { createContext, useContext, useEffect, useState } from "react";


const AppStateContext = createContext(null);

const AppStateProvider = ({ children }: any) => {
  const [user, setUser] = useState([])
  const [role, setRole] = useState(null)
  const [token, setToken] = useState(null)
  const [loding, setLoding] = useState(true)
  const [data, setdata] = useState()
  const [rasidentDashboardID, setRasidentDashboardID] = useState()
  const [getuserdata, setGetUserdata] = useState()
  const [userCount, setUserCount] = useState()
  const [rasidents, setRasidents] = useState()
  const [rasidentId, setRasidentId] = useState()
  const [establishmentid, setEstablishmentid] = useState()
  const [qid, setqid] = useState()
  const [aid, setAid] = useState()

  const check = async () => {
    setLoding(true)
    const { data, error } = await supabase.auth.getSession()
    findrole(data)
    if (data) {
      setToken(data?.session)
      // console.log('DDData', data);
      // console.log(data.session,"this is token")
    }
  }

  const findrole = async (token) => {
    const { data, err } = await supabase
      .from('User')
      .select('*')
      .eq('email', token?.session?.user?.email)

    setRole(data[0]?.role)
    // console.log(role)
    setLoding(false)
  }

  useEffect(() => {
    check()
  }, [user])

  async function signOut() {
    const { error } = await supabase.auth.signOut()
    setToken(null)
    setRole(null)
  }
  return (
    <AppStateContext.Provider value={{ setRole, role, user, setUser, token, signOut, setToken, loding, aid, setAid, rasidentId, setRasidentId, qid, setqid, rasidentDashboardID, setRasidentDashboardID, establishmentid, setEstablishmentid, data, rasidents, setRasidents, setdata, getuserdata, setGetUserdata, userCount, setUserCount }}>
      {children}
    </AppStateContext.Provider>
  );
};
const useAuth = () => useContext(AppStateContext)
export { AppStateProvider, useAuth };

