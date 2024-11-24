import Sidebar from './Sidebar'
import { BsPeopleFill } from 'react-icons/bs'
import React, { useState , useEffect } from 'react'
import { database  } from '../../Firebase';
import { ref ,  get } from "firebase/database";

const People = () => {

    const [tableData , setTableData] = useState([]);

  useEffect(() => {
  const dbRef = ref(database, 'Transaction/');
  get(dbRef).then((snapshot) => {

    if(snapshot.exists()){

      const data = [];
      snapshot.forEach((childSnapshot) => {
        
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();
        data.push({id:childKey , ...childData});

        setTableData(data);
        });

    }else{

      console.log("No data available")

    }
    
  }).catch((error) => {
    console.error(error);
  });
  }, []);

  return (
    <div className='flex h-auto w-full'>
        <div className='w-[16%] fixed '><Sidebar /></div>


        <div className='w-[84%] p-5 overflow-y-auto ml-[16%]'>
            <h1 className='text-5xl text-center leading-[60px]'>Choose From People You Wish<br /> To Send Money To!!</h1>
        
        
            <table className='w-full overflow-y-auto my-10'>

                <tr className='border-b-[1px] border-black text-center'>
                    
                    <th className=' py-5 font-normal text-4xl tracking-[10px]'>Your Friends</th>
                    
                </tr>
                {tableData.map((map) => {     
                        return(   
                <tr className='transition duration-500 hover:bg-[#101010] hover:text-white cursor-pointer text-center flex items-center justify-center'>
        
                       
                    <th className='w-full py-5 font-semibold text-lg flex  items-center justify-center pr-9 gap-5 '
                    key={map.id}><BsPeopleFill size={35}/>{map.recEmail}</th>

                </tr>
                 )  
            })}
            
            </table>

        </div>

    </div>
  )
}

export default People