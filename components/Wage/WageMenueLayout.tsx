import { updateWageCategory } from '@/providers/apis';
import { convertExcelToJson } from '@/utils/convertExcelToJson';
import { handleApiErrors } from '@/utils/handleapierrors';
import { Categories, Contractor, Menue, Places } from '@prisma/client';
import React, { useState } from 'react'
import { Button } from '../Button/Button';
import { Header } from '../Header/Header';
import Input from '../Inputs/Input';
import { Select } from '../Select';
import { createPlacesApi, getAllPlacesApi } from '@/providers/apis/places';
import { TopPrintSection } from '../menueprintpage/TopPrintSection';

type IMenue = (Menue & {
    Categories: (Categories & {
        contractor: Contractor | null;
    })[];
})

const WageMenueLayout = ({ menue }: { menue: IMenue }) => {
    const [printing, setprinting] = useState(false)
    const [placesValues, setplacesValues] = useState<{ name: string, value: string }[]>([])

    const allCategories = {
        Categories: menue?.Categories?.filter((item)=> item.contractor !== null)?.sort((a, b) => b.itemName !== 'head' ? -1 : 1)
    }
    console.log('allCategories', allCategories);

    const [data, setdata] = useState<IMenue>(allCategories)
    const handleChangeCalculation = (cindex: number, value: string, key: "minus" | "plus" | "placevalue") => {
        const _cat = [...data.Categories].map((c, ci) => ci === cindex ? { ...c, [key]: value } : c)
        setdata((prev) => ({ ...prev, Categories: _cat }))
    }
    const getTotalwages = () => {
        let sum = 0;
        data.Categories.forEach(c => {
            if (c.contractor?.wage !== undefined) {
                sum += c.contractor.wage
            }
        })
        return sum;
    }
    const getPluses = () => {
        let sum = 0;
        data.Categories.forEach(c => {
            if (c.plus !== undefined) {
                sum += Math.abs(Number(c.plus))
            }
        })
        return sum;
    }
    const getMinuses = () => {
        let sum = 0;
        data.Categories.forEach(c => {
            if (c.minus !== undefined) {
                sum += Math.abs(Number(c.minus))
            }
        })
        return sum;
    }
    const getFinalTotal = () => {

        let sum = 0;
        data.Categories.forEach(c => {
            if (c.minus !== undefined) {
                sum += ((Number(c.contractor?.wage) * Number(c.placevalue))) + Number(c.plus) - Number(c.minus) ? ((Number(c.contractor?.wage) * Number(c.placevalue))) + Number(c.plus) - Number(c.minus) : 0
            }
        })
        return sum;
    }
    const handleUpdateCategories = async () => {
        try {
            await updateWageCategory({
                categories: data.Categories
            })
            alert("updated successfully!")
        } catch (error: any) {
            const err = handleApiErrors(error)
            alert(err)
        }
    }
    const handleUploadPlacesValues = async (json: Omit<Places, "id">[]) => {
        try {
            await createPlacesApi({
                places: json
            })
            alert("uploaded successfull!")
        } catch (error: any) {
            const err = handleApiErrors(error)
            alert(err)
        }
        setplacesValues(json)
    }
    const getAllPlaces = async () => {
        try {
            const res = await getAllPlacesApi()
            setplacesValues(res.data.places)
        } catch (error: any) {
            const err = handleApiErrors(error)
            alert(err)
        }
    }
    React.useEffect(() => {
        getAllPlaces()
    }, [])
    React.useEffect(() => {
        if (printing) {
            window.print()
        }
    }, [printing])
    return (
        <div>
            {
                !printing &&
                <Header className='bg-sky-500' />
            }
            <TopPrintSection menue={menue} />
            {
                !printing &&
                <div className='p-4 bg-gray-100'>
                    <Input label='Upload Places' labelClassName='!text-black' type="file" onChange={(e) => {
                        if (!e.target.files) {
                            return;
                        }
                        const file = e.target.files[0]
                        convertExcelToJson({
                            callback: handleUploadPlacesValues,
                            file: file
                        })
                        e.target.value = ""
                    }}
                    />
                </div>
            }
            <div className="w-full mb-8 overflow-hidden bg-white">
                <div className="w-full overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="text-md font-semibold tracking-wide text-left text-gray-900 uppercase border-b border-2 border-black">
                                <th className="px-4 py-3 uppercase  border-2 border-black  text-center">s.no</th>
                                <th className="px-4 py-3 uppercase  border-2 border-black  text-center">NAME OF staff</th>
                                <th className="px-4 py-3 uppercase  border-2 border-black  text-center">wage</th>
                                <th className="px-4 py-3 uppercase  border-2 border-black  text-center">value of place</th>
                                <th className="px-4 py-3 uppercase  border-2 border-black  text-center">
                                    Bonus
                                    <tr className='flex justify-between text-md font-semibold tracking-wide text-left text-gray-900  uppercase '>
                                        <th className='px-4 py-3 uppercase text-center'>+</th>
                                        <th className='px-4 py-3 uppercase text-center'>-</th>
                                    </tr>
                                </th>
                                <th className="px-4 py-3 uppercase text-center">
                                    TOTAL
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white font-semibold">
                            {
                                data.Categories.map((c, ci) => (
                                    <tr className="text-gray-700">
                                        <td className="px-1 py-3 border-2 border-black  text-center">
                                            {ci + 1}
                                        </td>
                                        <td className="px-1 py-3 border-2 border-black  ">
                                            {c.contractor?.name}
                                        </td>
                                        <td className="px-1 py-3 border-2 border-black  text-center">
                                            {c.contractor?.wage ? c.contractor.wage : "0"}
                                        </td>
                                        <td className="px-1 py-3 border-2 border-black  text-center ">
                                            <div className='w-full'>
                                                {
                                                    !printing ?
                                                        <Input className='!w-[100px] ' type='number' value={c.placevalue !== null ? c.placevalue : "1"} />
                                                        :
                                                        c.placevalue !== null ? c.placevalue : "1"
                                                }
                                            </div>
                                            <div className='flex items-center space-x-3 mt-4'>
                                                {
                                                    !printing &&
                                                    <Select
                                                        value={c.placevalue !== null ? c.placevalue : ""}
                                                        onChange={(e) => {
                                                            handleChangeCalculation(ci, e.target.value, "placevalue")
                                                        }}
                                                        label='Select Place' labelClassName='!text-black' className='!text-black !w-[150px]' options={[...placesValues.map(v => ({ content: `${v.name}: ${v.value}`, value: v.value }))]}
                                                    />
                                                }
                                            </div>
                                        </td>
                                        <td className="px-4 py-3 border-2 border-black  text-center">
                                            <tr className="text-gray-700 flex justify-between">
                                                <td className="px-4 py-3  text-center">
                                                    {
                                                        !printing ?
                                                            <Input type='number' onChange={(e) => {
                                                                handleChangeCalculation(ci, e.target.value, "plus")
                                                            }} className='!w-[100px] ' value={c.plus !== null ? c.plus : "0"} />
                                                            :
                                                            c.plus !== null ? c.plus : "0"
                                                    }
                                                </td>
                                                <td className="px-4 py-3  text-center">
                                                    {
                                                        !printing ?
                                                            <Input type='number' onChange={(e) => {
                                                                handleChangeCalculation(ci, e.target.value, "minus")
                                                            }} className='!w-[100px] ' value={c.minus !== null ? c.minus : "0"}
                                                            />
                                                            :
                                                            c.minus !== null ? c.minus : "0"
                                                    }
                                                </td>
                                            </tr>
                                        </td>
                                        <td className="px-4 py-3 border-2 border-black  text-center">
                                            {((Number(c.contractor?.wage) * Number(c.placevalue))) + Number(c.plus) - Number(c.minus)}
                                        </td>
                                    </tr>
                                ))
                            }
                            <tr className="text-gray-700 font-bold">
                                <td className="px-4 py-3 border-2 border-black  text-center">

                                </td>
                                <td className="px-1 py-3 border-2 border-black  font-bold">
                                    Total value:
                                </td>
                                <td className="px-4 py-3 border-2 border-black  text-center">
                                    {getTotalwages()}
                                </td>
                                <td className="px-4 py-3 border-2 border-black  text-center">

                                </td>
                                <td className="px-4 py-3 border-2 border-black  text-center">
                                    <tr className="text-gray-700 flex justify-between">
                                        <td className="px-4 py-3  text-center">
                                            {getPluses()}
                                        </td>
                                        <td className="px-4 py-3  text-center">
                                            {getMinuses()}
                                        </td>
                                    </tr>
                                </td>
                                <td className="px-4 py-3 border-2 border-black  text-center">
                                    {getFinalTotal()}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h1 className='text-end font-semibold text-lg p-3 underline underline-offset-4'>Total payable amount : {getFinalTotal()}</h1>
                <h1 className='text-xl text-center tracking-tight mb-10'>
                    Thank You 👏
                </h1>
            </div>
            {
                !printing &&
                <div className='w-full p-2'>
                    <Button className=' w-full m-auto' title='UPDATE' onClick={handleUpdateCategories} />
                    <Button className='mt-4 w-full m-auto' title='PRINT' onClick={async () => {
                        setprinting(true)
                    }} />
                </div>
            }
        </div>
    )
}

export { WageMenueLayout }
