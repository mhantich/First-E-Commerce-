import React from 'react'
import { Stack } from 'react-bootstrap';
import { TbTruckDelivery } from "react-icons/tb";

    function Topbar() {
      return (
        <div className="App">
        <Stack direction="horizontal" className="bg-dark mb-2 p-2" gap={1} style={{ justifyContent: 'center', alignItems: 'center' }}>
        <TbTruckDelivery className='text-white' />
            <p className='text-white text-capitalize fs-7'>Free shopping for all coutries</p>
        </Stack>
      </div>
      )
    }
    
export default Topbar