import React, { useState, useEffect, useContext } from "react";
import UserBar from '../../Components/UserBar'
import styles from './styles.module.css';
import api from "../../services/api";
import LeftMenu from '../../Components/SideBar/LeftMenu';
import customFilter from "../../Components/SideBar/Input/customFilter";
import customSelectors from "../../Components/SideBar/Selector/customSelectors";
import Selector from '../../Components/SideBar/Selector';
import Input from '../../Components/SideBar/Input';
import RetractableScreen from '../../Components/SideBar/RetractableScreen';

function Acesses() {

  const [acesses, setAcesses] = useState([]);
  const [filters, setFilters] = useState([]);
  const [filterData, setFilterData] = useState([]);
 
    useEffect(()=>{  

    async function loadAcesses() {
    const user  = JSON.parse(localStorage.getItem("user"));
    const acesse = await api.get(`profile/findByUser/${user.id}`);
    const formatedAcesses = acesse.data?.map(x => x.permissions.map(n => {return {profile: x.name, permission: n.name}})) 
    setAcesses(formatedAcesses.flat())

    }
    
    loadAcesses()

  },[]);

  useEffect(() => {
    setFilterData(acesses);
  }, [acesses]);

  function filter() {

    let data = acesses;
    for (let i = 0; i < filters.length; i++) {
      if (filters[i].inputValue.length > 0) {
        data = customFilter(filters[i], data);
      }
    }
    setFilterData(data);

 
  }

  const { stringSimbols } = customSelectors();

  return (
  <>
 <UserBar />
 
  <LeftMenu filter={filter} setFilters={setFilters}>
      <Input type={"text"} dataName="permission" label="Nome do acesso" setFilters={setFilters}>
        <Selector selectors={stringSimbols} />
      </Input>
      <Input type={"text"} dataName="profile" label="Perfil do acesso" setFilters={setFilters}>
        <Selector selectors={stringSimbols} />
      </Input>
  </LeftMenu> 

  <RetractableScreen>
     
      {filterData.map((x,i) => (
      <div key={i} className={styles.card}>
        <div className={styles.item}>
        <h5>Nome do acesso</h5>
         <h2>{x.permission}</h2>
         </div>
         <div className={styles.item}>
         <h5>Perfil do acesso</h5>
         <h2>{x.profile}</h2>
         </div>
      </div>       
      ))} 
<button onClick={() => console.log(filters)}>x</button>
<button onClick={() => console.log(filterData, filters.length)}>fd</button>
</RetractableScreen>

   </>
  );
}

export default Acesses;
