import { supabase } from "@/lib/supabase";
import React, { createContext, useContext, useEffect, useState } from "react";
import { StyleSheet } from "react-native";


const AppStateContext = createContext(null);

const AppStateProvider = ({ children }: any) => {
  const [checkPlan, setCheckPlan] = useState()
  const[test,setTest] = useState()
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
  const [qid, setqid] = useState(null)
  const [aid, setAid] = useState(null)
  const [count, setCount] = useState(0)
  const [establishmentscount, setEstablishmentscount] = useState()
  const [dataQ, setdataQ] = useState()
  const [dataA, setdataA] = useState()
  const [pro, setpro] = useState(0.23)
  const [q, setQ] = useState()
  const [en,setEn]= useState()
  const [dataR,setdataR]=useState()

  const check = async () => {
    const { data, error } = await supabase.auth.getSession()
    findrole(data)

    if (data.session !== null) {
      setToken(data?.session)
    }
  }

 const fetchRasidents = async () => {
      const { data, error } = await supabase
        .from('Resident')
        .select('*')
      setdataR(data)
    }


 const fetchRasidentsQuestion = async () => {
        const { data, error } = await supabase
            .from('ResidentsQ')
            .select('*')
        const { data: check, error: err } = await supabase
            .from('ResidentA')
            .select('*')
            .eq("Residents_ID", rasidentDashboardID?.id)
        setdataA(check)
        setdataQ(data)
        setQ(data)
        setpro(((check?.length * 100) / data?.length)/100)
    }
   
    const fetchA = async () => {
        const { data:check, error } = await supabase
            .from('ResidentA')
            .select('*')            
        setEn(check)

    }


  const findrole = async (token) => {
    const { data } = await supabase
      .from('User')
      .select('*')
      .eq('email', token?.session?.user?.email)

    setRole(data[0]?.role)
    // console.log(role)
    // setLoding(false)
  }

  useEffect(() => {
    check()
  }, [user])

  async function signOut() {
    const { error } = await supabase.auth.signOut()
    setToken(null)
    setRole(null)
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eaeaea',
  },
  });

  return (
    <AppStateContext.Provider value={{dataR,fetchRasidents,setdataR,fetchRasidentsQuestion,test,setTest,fetchA,q, setQ,en,setEn,
      setRole, role, user, setUser, token, signOut, setToken, loding, aid, setAid, rasidentId,dataQ, setdataQ,dataA, setdataA,pro, setpro,
      setRasidentId, qid, setqid, rasidentDashboardID, setRasidentDashboardID, establishmentid, setEstablishmentid, data, rasidents,
      setRasidents, setdata, getuserdata, setGetUserdata, userCount, setUserCount, establishmentscount, setEstablishmentscount, checkPlan, setCheckPlan, count, setCount
    }}>
      {children}
    </AppStateContext.Provider>
  );
};
const useAuth = () => useContext(AppStateContext)
export { AppStateProvider, useAuth };

