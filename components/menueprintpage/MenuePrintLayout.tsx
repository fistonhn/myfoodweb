import { Categories, Contractor, Menue } from '@prisma/client';
import React from 'react'
import { Button } from '../Button/Button';
import { TopPrintSection } from './TopPrintSection';
import { CLEANER_CONST, HEAD_CONST } from '@/constants/globalconstants';

type IMenue = (Menue & {
    Categories: (Categories & {
        contractor: Contractor | null;
    })[];
})

const MenuePrintLayout = ({ menue }: { menue: IMenue }) => {
    const [hidePrintButton, sethidePrintButton] = React.useState('block')
    const [tableData, settableData] = React.useState<{
        comment: string[],
        contractors: string[],
        itemName: string
    }[]>
        ([])
    
    function convertCategoriesToResult(categories: (Categories & {
        contractor: Contractor | null;
    })[]) {
        const result = [] as {
            comment: string[],
            contractors: string[],
            itemName: string
        }[]
        categories.forEach((category) => {
            const existingCategory = result.find((c) => c.itemName === category.itemName);
            const { contractor } = category
            let _conts = []
            if (contractor?.name) {
                _conts.push(contractor?.name)
            }
            if (existingCategory) {
                existingCategory.comment.push(category.comment);
                existingCategory.contractors = [...existingCategory.contractors, ..._conts]
            } else {
                const { itemName, comment } = category;
                const newCategory = {
                    itemName,
                    comment: [comment],
                    contractors: _conts,
                };
                result.push(newCategory);
            }
        });

        return result;
    }

    React.useEffect(() => {
        if (menue) {
            const data = convertCategoriesToResult(menue.Categories)
            settableData(data)
        }
    }, [menue])
    return (
        <div className='border-2 border-black m-2'>
            <TopPrintSection menue={menue} />
            <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg bg-white">
                <div className="w-full overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr
                                className="text-md font-semibold tracking-wide text-left
                            text-gray-900 bg-gray-100 uppercase border-2 border-black"
                            > 
                                <th className="px-4 py-3 uppercase text-center border-r-2 border-black">S.NO.</th>
                                <th className="px-4 py-3 uppercase text-center border-r-2 border-black">Item name</th>
                                <th className="px-4 py-3 uppercase text-center">name of staff</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white font-semibold">
                            {
                                tableData.filter(f => (f.itemName !== HEAD_CONST && f.itemName !== CLEANER_CONST)).map((c, ci) => (
                                    <tr className="">
                                        <td className="px-1 py-2 border-2 border-black w-[22.5%]">
                                            {ci + 1}
                                        </td>
                                        <td className="px-1 py-2 border-2 border-black ">
                                            <div className=''>
                                                {c.itemName} {c.comment.length === 1 ? '' : '(' } {c.comment.length === 1 ? '' : c.comment.length} {c.comment.length === 1 ? '' : ')' } {c.comment[0] ? '-' : ''} <span className='text-sm'>{ c.comment[0]} </span>
                                            </div>
                                        </td>
                                        <td className="px-1 py-2 border-2 border-black w-[50%]">
                                            {c.contractors.map((cont, i) => `${cont} ${i < c.contractors.length - 1 ? "," : ""}`)}

                                        </td>
                                    </tr>
                                ))
                            }
                            <tr className="">
                                <td className="px-4 py-3 border-2 border-black">

                                </td>
                                <td className="px-4 py-3 border-2 border-black">

                                </td>
                                <td className="px-4 py-3 border-2 border-black">

                                </td>
                            </tr>
                            <tr className="">
                                <td className="px-4 py-3 border-2 border-black">

                                </td>
                                <td className="px-4 py-3 border-2 border-black">

                                </td>
                                <td className="px-4 py-3 border-2 border-black">

                                </td>
                            </tr>
                            <tr className="">
                                <td className="px-4 py-3 border-2 border-black">

                                </td>
                                <td className="px-4 py-3 border-2 border-black">

                                </td>
                                <td className="px-4 py-3 border-2 border-black">

                                </td>
                            </tr>
                            <tr className="">
                                <td className="px-4 py-3 border-2 border-black">

                                </td>
                                <td className="px-4 py-3 border-2 border-black">

                                </td>
                                <td className="px-4 py-3 border-2 border-black">

                                </td>
                            </tr>
                            <tr className="">
                                <td className="px-1 py-3 border-2 border-black">
                                    BOOKED BY:
                                </td>
                                <td className="px-1 py-3 border-2 border-black">
                                    {menue.bookedBy}
                                </td>
                                <td className="px-1 py-3 border-2 border-black">
                                    WORDS:-  {menue.words}
                                </td>
                            </tr>
                            <tr className="">
                                <td className="px-1 py-3 border-2 border-black">
                                    MOBILE NO:
                                </td>
                                <td className="px-1 py-3 border-2 border-black">
                                    {menue.bookerMobileNumber}
                                </td>
                                <td className="px-1 py-3 border-2 border-black">
                                    CLEANER:-  {menue.cleaner}
                                </td>
                            </tr>
                            <tr className="">
                                <td className="px-1 py-3 border-2 border-black">
                                    NOTE:
                                </td>
                                <td className="px-1 py-3 border-2 border-black">
                                    {/* {menue.bookerMobileNumber} */}
                                </td>
                                <td className="px-1 py-3 border-2 border-black">
                                    {/* CLEANER:-  {menue.cleaner} */}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <h1 className='text-xl text-center tracking-tight mb-5'>
                Thank You 👏
            </h1>
            <div className='w-full p-2' style={{ display: hidePrintButton}}>
                <Button className=' w-full m-auto' title='PRINT' onClick={() => {
                    sethidePrintButton('none')
                    setTimeout(()=>  (window.print(), sethidePrintButton('block')), 1000);
                }} />
            </div>
        </div>
    )
}


export { MenuePrintLayout }