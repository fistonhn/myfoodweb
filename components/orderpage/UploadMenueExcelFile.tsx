import React, { useState } from 'react'
import Input from '../Inputs/Input'
import * as xlsx from 'xlsx'
import { ICreateMenueApi, createMenueApi } from '@/providers/apis'
import { Menue } from '@prisma/client'
import { updateDateWithHourAndMinute } from '@/utils/updateDateWithHoursAndMinutes'
import { IItem } from '@/types/order'
import { handleApiErrors } from '@/utils/handleapierrors'
import { v4 as uuid } from 'uuid'
import { CircularProgress } from '@mui/material'
const UploadMenueExcelFile = () => {

    const [uploading, setuploading] = useState(false)
    const [data, setdata] = useState<ICreateMenueApi | null>(null)
    const handleCategories = (v: any): boolean | IItem[] => {
        let toReturn = [] as IItem[]
        Object.entries(v).forEach(([key, value]) => {
            if (key.startsWith("item")) {
                toReturn.push({
                    comment: "",
                    counter: `${v[`counter${key.slice(4)}`]}`,
                    item: `${value}`
                })
            }
        })
        if (toReturn.length > 0) {
            return toReturn
        }
        return false
    }
    const handleData = async (json: Omit<Menue, "createdAt" | "updatedAt">[]) => {
        // console.log('json', json);
        
            const nameString = json[1]?.__EMPTY;
            if(nameString?.replace(/\s/g, '') === 'NAME:-') return alert('Name is required!')
            const name = nameString?.replace("NAME:-", "");

            const functionDateString = json[1]?.__EMPTY_3;            
            if(functionDateString?.replace(/\s/g, '') === 'FunctionDate:-') return alert('Function Date is required!')
            const functionDate = functionDateString?.replace("Function Date:-", "");

            const mobileString = json[2]?.__EMPTY;
            if(mobileString?.replace(/\s/g, '') === 'MOBILE:-') return alert('Mobile is required!')
            const nameMobile = mobileString?.replace("MOBILE:-", "");

            const serviceTimeString = json[2]?.__EMPTY_3;
            if(serviceTimeString?.replace(/\s/g, '') === 'ServiceTime:-') return alert('Service Time is required!')
            const serviceTime = serviceTimeString?.replace("Service Time:-", "");            

            const venueString = json[3]?.__EMPTY;
            const venueString2 = json[4]?.__EMPTY;
            if(venueString?.replace(/\s/g, '') === 'VENUE:-') return alert('Venue is required!')
            let venue = venueString?.replace("VENUE:-", "")
            if(venueString2 !== undefined){ venue = venueString?.replace("VENUE:-", "") + venueString2 } 

            const departureDateString = json[3]?.__EMPTY_3;
            if(departureDateString?.replace(/\s/g, '') === 'DepartureDate:-') return alert('Departure Date is required!')
            const departureDate = departureDateString?.replace("Departure Date:-", "");            

            const plateString = json[5]?.__EMPTY;
            const plate = plateString?.replace("PLATE:-", "");

            const depatureTimeString = json[5]?.__EMPTY_3;
            if(depatureTimeString?.replace(/\s/g, '') === 'DepartureTime:-') return alert('Departure Time is required!')
            const departureTime = depatureTimeString?.replace("Departure Time:-", "");

            const paxString = json[6]?.__EMPTY;
            const pax = paxString?.replace("PAX:-", "");

            const SpecialInstructionsString = json[7]?.__EMPTY;
            const SpecialInstructions = SpecialInstructionsString?.replace("Special Instructions:-", "");
            const headNameString = json[7]?.__EMPTY_2;
            const headName = headNameString?.replace("HEAD NAME:-", "");

            const onionString = json[8]?.__EMPTY_1;
            const onion = onionString?.replace("ONION:-", "");

            const mobileNoString = json[8]?.__EMPTY_2;
            const headMobileNo = mobileNoString?.replace("MOBILE NO.:-", "");

            const garlicString = json[9]?.__EMPTY_1;
            const garlic = garlicString?.replace("GARLIC:-", "");

            const driveString = json[10]?.__EMPTY_2;
            const driveName = driveString?.replace("DRIVE NAME:-", "");

            const vehicleString = json[11]?.__EMPTY_2;
            const vehicleNumber = vehicleString?.replace("VEHICLE NO.:-", "");

            const note = json[28]?.__EMPTY_1;
            const bookBy = json[29]?.__EMPTY_1;
            if(bookBy === undefined) return alert('"Booked By" is required!')

            const bookMobile = json[30]?.__EMPTY_1;
            if(bookMobile === undefined) return alert('"book Mobile" is required!')
            
            const wordString = json[29]?.__EMPTY_2;
            const words = wordString?.replace("WORDS:-", "");

            const cleanerString = json[30]?.__EMPTY_2;
            const cleaner = cleanerString?.replace("CLEANER:-", "");

            const it1 = json[13]?.__EMPTY_1;
            const it2 = json[14]?.__EMPTY_1;
            const it3 = json[15]?.__EMPTY_1;
            const it4 = json[16]?.__EMPTY_1;
            const it5 = json[17]?.__EMPTY_1;
            const it6 = json[18]?.__EMPTY_1;
            const it7 = json[19]?.__EMPTY_1;
            const it8 = json[20]?.__EMPTY_1;
            const it9 = json[21]?.__EMPTY_1;
            const it10 = json[22]?.__EMPTY_1;
            const it11 = json[23]?.__EMPTY_1;
            const it12 = json[24]?.__EMPTY_1;
            const it13 = json[25]?.__EMPTY_1;
            const it14 = json[26]?.__EMPTY_1;
            const it15 = json[27]?.__EMPTY_1;



            const selectedItems = []

            if(it1 !==undefined) {
                const item1 = { item: it1, counter: '0', comment: '' }
                selectedItems.push(item1)
            } 
            if(it2 !==undefined) {
                const item2 = { item: it2, counter: '0', comment: '' }
                selectedItems.push(item2)
                
            }
            if(it3 !==undefined) {
                const item3 = { item: it3, counter: '0', comment: '' }
                selectedItems.push(item3)
            } 
            if(it4 !==undefined) {
                const item4 = { item: it4, counter: '0', comment: '' }
                selectedItems.push(item4)
                
            }
            if(it5 !==undefined) {
                const item5 = { item: it5, counter: '0', comment: '' }
                selectedItems.push(item5)
            } 
            if(it6 !==undefined) {
                const item6 = { item: it6, counter: '0', comment: '' }
                selectedItems.push(item6)
                
            }
            if(it7 !==undefined) {
                const item7 = { item: it7, counter: '0', comment: '' }
                selectedItems.push(item7)
            } 
            if(it8 !==undefined) {
                const item8 = { item: it8, counter: '0', comment: '' }
                selectedItems.push(item8)
                
            }
            if(it9 !==undefined) {
                const item9 = { item: it9, counter: '0', comment: '' }
                selectedItems.push(item9)
            } 
            if(it10 !==undefined) {
                const item10 = { item: it10, counter: '0', comment: '' }
                selectedItems.push(item10)
                
            }
            if(it11 !==undefined) {
                const item11 = { item: it11, counter: '0', comment: '' }
                selectedItems.push(item11)
            } 
            if(it12 !==undefined) {
                const item12 = { item: it12, counter: '0', comment: '' }
                selectedItems.push(item12)
                
            }
            if(it13 !==undefined) {
                const item13 = { item: it13, counter: '0', comment: '' }
                selectedItems.push(item13)
                
            }
            if(it14 !==undefined) {
                const item14 = { item: it14, counter: '0', comment: '' }
                selectedItems.push(item14)
            } 
            if(it15 !==undefined) {
                const item15 = { item: it15, counter: '0', comment: '' }
                selectedItems.push(item15)
                
            }

            const _departureHourMinute = departureTime.split(":")
            const _departureTime = updateDateWithHourAndMinute(new Date(departureDate), Number(_departureHourMinute[0]), Number(_departureHourMinute[1]))
            // 
            const _serviceHourMinute = serviceTime.split(":")
            const _serviceTime = updateDateWithHourAndMinute(new Date(functionDate), Number(_serviceHourMinute[0]), Number(_serviceHourMinute[1]))
                                            
            const formData = {
                bookedBy: bookBy,
                bookerMobileNumber: String(bookMobile),
                bookingId: String(uuid()).substring(0, 8),
                cleaner: cleaner,
                departureDate: new Date(departureDate),
                departureTime: new Date(_departureTime),
                driverName: driveName,
                function: 'breakfast',
                functionDate: new Date(functionDate),
                headMobileNumber: String(headMobileNo),
                headName: headName,
                mobile: String(nameMobile),
                name: name,
                PAX: pax,
                PLATE: plate,
                serviceTime: new Date(_serviceTime),
                specialInstruction: SpecialInstructions,
                vehicleNumber: String(vehicleNumber),
                venue: venue,
                words: words,
                note: note,
                id: "",
                onion: onion === 'yes' ? true : false,
                garlic: garlic === 'yes' ? true : false
            }
            
            try { 
                setuploading(true)         
                const res = await createMenueApi({
                  formdata: formData,
                  selectedItems: selectedItems
                }) 
                setuploading(false)               
                
                alert("Menue uploaded successfully.")
                window.location.href = `/admin/menueprint/${res.data.id}`
              } catch (error: any) {
                const err = handleApiErrors(error)
          
                alert(err)
              }
                

            
    }
    const handleFileChange = (_e: React.ChangeEvent<HTMLInputElement>) => {
        _e.preventDefault();
        if (_e.target.files) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const data = e.target?.result;
                const workbook = xlsx.read(data, { type: "array" });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const json = xlsx.utils.sheet_to_json(worksheet);
                // console.log({ json })
                handleData(json as any)
                _e.target.value = ""
            };
            reader.readAsArrayBuffer(_e.target.files[0]);
        }
    }
    return (
        <div className='flex items-center px-4 space-x-3'>
            <Input label='Upload Menues' type='file' onChange={(e) => {
                if (!e.target.files) {
                    return;
                }
                handleFileChange(e)
            }} />
            {uploading && <CircularProgress className='mt-6 !text-white' />}
        </div>
    )
}

export { UploadMenueExcelFile }