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
        const arrayFormData = [] as { _data: Omit<Menue, "createdAt" | "updatedAt">, cat: IItem[] }[]
        json.forEach((v) => {
            // categories
            const result = handleCategories(v)
            if (typeof result === "boolean") {
                return alert("kindly select the items and counters.")
            }
            console.log("results==>", result)

            // categories
            const formData = { id: "", bookingId: String(uuid()).substring(0, 8) } as Omit<Menue, "createdAt" | "updatedAt">
            if (!v.departureTime || !v.serviceTime || !v.departureDate || !v.functionDate) {
                return alert("service time | service date | departureDate| departureTime is required.")
            }
            // @ts-ignore
            const _departureHourMinute = v.departureTime.split(":")
            const _departureTime = updateDateWithHourAndMinute(new Date(v.departureDate), Number(_departureHourMinute[0]), Number(_departureHourMinute[1]))

            // @ts-ignore
            const _serviceHourMinute = v.serviceTime.split(":")
            const _serviceTime = updateDateWithHourAndMinute(new Date(v.functionDate), Number(_serviceHourMinute[0]), Number(_serviceHourMinute[1]))
            // bookedBy
            if (v.bookedBy) {
                formData.bookedBy = v.bookedBy
            } else {
                return alert("Booked By is Required.")
            }
            // bookerMobileNumber 
            if (v.bookerMobileNumber) {
                formData.bookerMobileNumber = v.bookerMobileNumber
            } else {
                return alert("bookerMobileNumber is Required.")
            }
            // cleaner 
            if (v.cleaner) {
                formData.cleaner = v.cleaner
            } else {
                return alert("cleaner is Required.")
            }
            // departureDate 
            if (v.departureDate) {
                formData.departureDate = new Date(v.departureDate)
            } else {
                return alert("departureDate is Required.")
            }
            // departureTime 
            if (v.departureTime) {
                formData.departureTime = _departureTime
            } else {
                return alert("departureTime is Required.")
            }
            // driverName 
            if (v.driverName) {
                formData.driverName = v.driverName
            } else {
                return alert("driverName is Required.")
            }
            // function 
            if (v.function) {
                formData.function = v.function
            } else {
                return alert("function is Required.")
            }
            // functionDate 
            if (v.functionDate) {
                formData.functionDate = new Date(v.functionDate)
            } else {
                return alert("functionDate is Required.")
            }
            // headMobileNumber 
            if (v.headMobileNumber) {
                formData.headMobileNumber = v.headMobileNumber
            } else {
                return alert("headMobileNumber is Required.")
            }
            // headName 
            if (v.headName) {
                formData.headName = v.headName
            } else {
                return alert("headName is Required.")
            }
            // mobile 
            if (v.mobile) {
                formData.mobile = v.mobile
            } else {
                return alert("mobile is Required.")
            }
            // name 
            if (v.name) {
                formData.name = v.name
            } else {
                return alert("name is Required.")
            }
            // PAX 
            if (v.PAX) {
                formData.PAX = v.PAX
            } else {
                return alert("PAX is Required.")
            }
            // serviceTime 
            if (v.serviceTime) {
                formData.serviceTime = _serviceTime
            } else {
                return alert("serviceTime is Required.")
            }
            // specialInstruction 
            if (v.specialInstruction) {
                formData.specialInstruction = v.specialInstruction
            } else {
                return alert("specialInstruction is Required.")
            }
            // vehicleNumber 
            if (v.vehicleNumber) {
                formData.vehicleNumber = v.vehicleNumber
            } else {
                return alert("vehicleNumber is Required.")
            }
            // venue 
            if (v.venue) {
                formData.venue = v.venue
            } else {
                return alert("venue is Required.")
            }
            // words 
            if (v.words) {
                formData.words = v.words
            } else {
                return alert("words is Required.")
            }
            arrayFormData.push({
                _data: formData,
                cat: result
            })
        })
        try {
            setuploading(true)
            for (let index = 0; index < arrayFormData.length; index++) {
                await createMenueApi({
                    formdata: arrayFormData[index]._data,
                    selectedItems: arrayFormData[index].cat
                })
            }
            setuploading(false)
            alert("Menue uploaded successfully.")
        } catch (error: any) {
            const err = handleApiErrors(error)
            alert(err)
            setuploading(false)
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
                console.log({ json })
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
