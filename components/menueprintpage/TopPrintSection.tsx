import { Categories, Contractor, Menue } from '@prisma/client';
import React from 'react'
const BoldText = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={`text-light font-bold ${className}`}>{children}</div>
  )
}
type IMenue = (Menue & {
  Categories: (Categories & {
    contractor: Contractor | null;
  })[];
})
const TopPrintSection = ({ menue }: { menue: IMenue }) => {
  return (
    <>
      <div className='flex items-center justify-evenly border-b-2 border-b-black'>
        <BoldText className='!text-xl' >Function Prospectus</BoldText>
        <BoldText className='!text-xl'>{menue.function}</BoldText>
      </div>
      <div className='grid grid-cols-2 '>
        <div className='border-r-2 border-r-black border-l-2 border-l-black'>
          <div className='p-1 space-y-3'>
            <div className='flex  space-x-4'>
              <BoldText>Name:- </BoldText>
              <BoldText>{menue.name}</BoldText>
            </div>
            <div className='flex  space-x-4'>
              <BoldText>Mobile:- </BoldText>
              <BoldText>{menue.mobile}</BoldText>
            </div>
            <div className='flex  space-x-4'>
              <BoldText>Venue:- </BoldText>
              <BoldText>{menue.venue}</BoldText>
            </div>
          </div>
          <div className='flex items-center justify-end border-t-2 p-1  border-t-black '>
            <BoldText>Pax:- {menue.PAX}</BoldText>
          </div>
        </div>
        <div className='border-r-2  '>
          <div className='p-1  space-y-3'>
            <div className='flex items-center space-x-4'>
              <BoldText>Function Date:- </BoldText>
              <BoldText>{new Date(menue.functionDate).toLocaleDateString()}</BoldText>
            </div>
            <div className='flex items-center space-x-4'>
              <BoldText>Service Time:- </BoldText>
              <BoldText>{new Date(menue.serviceTime).toLocaleTimeString()}</BoldText>
            </div>
            <div className='flex items-center space-x-4'>
              <BoldText>Departure Date:- </BoldText>
              <BoldText>{new Date(menue.departureDate).toLocaleDateString()}</BoldText>
            </div>
            <div className='flex items-center space-x-4'>
              <BoldText>Departure Time:- </BoldText>
              <BoldText>{new Date(menue.departureTime).toLocaleDateString()}</BoldText>
            </div>
          </div>
        </div>

      </div>
      <div className='border-t-2 border-t-black border-l-2 border-l-black'>
        <div className='grid grid-cols-2 '>
          <div className='border-r-2 border-r-black'>
            <div className='border-b-2 border-b-black p-1 '>
              <BoldText>Special Instructions:- {menue.specialInstruction}</BoldText>
            </div>
            <div className=''>
              {/*  */}
              <div className='flex '>
                <div className='w-[45.4%] border-r-2 border-black h-[120px] '>
                  <BoldText>ONION:-</BoldText>
                  <BoldText>GARLIC:-</BoldText>
                </div>
                <div className='px-1'>
                  <BoldText>{menue.onion === true ? "True" : "False"}</BoldText>
                  <BoldText>{menue.garlic === true ? "True" : "False"}</BoldText>
                </div>
              </div>
            </div>
          </div>
          <div className='p-1  space-y-4 border-r-2 border-r-black'>
            <div className='flex space-x-4'>
              <BoldText>Head Name:- </BoldText>
              <BoldText>{menue.headName}</BoldText>
            </div>
            <div className='flex space-x-4'>
              <BoldText>Mobile Number:- </BoldText>
              <BoldText>{menue.headMobileNumber}</BoldText>
            </div>
            <div className='flex space-x-4'>
              <BoldText>Driver Name:- </BoldText>
              <BoldText>{menue.driverName}</BoldText>
            </div>
            <div className='flex space-x-4'>
              <BoldText>Vehicle Number:- </BoldText>
              <BoldText>{menue.vehicleNumber}</BoldText>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export { TopPrintSection }