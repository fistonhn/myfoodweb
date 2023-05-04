import { Categories, Contractor, Menue } from '@prisma/client';
import React from 'react'
import { Button } from '../Button/Button';
import { TopPrintSection } from './TopPrintSection';
import { CLEANER_CONST, HEAD_CONST } from '@/constants/globalconstants';

const numbersToWords = {
    0: "Zero",
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
    10: "Ten",
    11: "Eleven",
    12: "Twelve",
    13: "Thirteen",
    14: "Fourteen",
    15: "Fifteen",
    16: "Sixteen",
    17: "Seventeen",
    18: "Eighteen",
    19: "Nineteen",
    20: "Twenty",
    30: "Thirty",
    40: "Forty",
    50: "Fifty",
    60: "Sixty",
    70: "Seventy",
    80: "Eighty",
    90: "Ninety",
};

type IMenue = (Menue & {
    Categories: (Categories & {
        contractor: Contractor | null;
    })[];
})

const MenuePrintLayout = ({ menue }: { menue: IMenue }) => {
    const [hidePrintButton, sethidePrintButton] = React.useState('block')
    const [centerImage, setcenterImage] = React.useState('35%')
    const [sms, setsms] = React.useState('13px')

    const [tableData, settableData] = React.useState<{
        otherCategoryId: string;
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
            itemName: string,
            otherCategoryId: String
        }[]
        categories.forEach((category) => {
            const existingCategory = result.find((c) => c.itemName === category.itemName && category?.otherCategoryId === '0');
            const { contractor } = category
            let _conts = []
            if (contractor?.name) {
                _conts.push(contractor?.name)
            }
            if (existingCategory) {
                console.log('existingCategory', existingCategory);

                // if(existingCategory?.otherCategoryId === '0'){
                    existingCategory.comment.push(category.comment);
                // }
                
                existingCategory.contractors = [...existingCategory.contractors, ..._conts]
            } else {
                const { itemName, comment, otherCategoryId } = category;
                const newCategory = {
                    itemName,
                    comment: [comment],
                    contractors: _conts,
                    otherCategoryId: otherCategoryId
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
  
  const allStaffMembers = menue.Categories?.filter((item)=> item.contractor !== null).length

  function convertNumberToWords(number: any) {
    if (number in numbersToWords) return numbersToWords[number];
  
    let words = "";
  
    if (number >= 100) {
      words += convertNumberToWords(Math.floor(number / 100)) + " hundred";
  
      number %= 100;
    }
  
    if (number > 0) {
      if (words !== "") words += " and ";
  
      if (number < 20) words += numbersToWords[number];
      else {
        words += numbersToWords[Math.floor(number / 10) * 10];
  
        if (number % 10 > 0) {
          words += "-" + numbersToWords[number % 10];
        }
      }
    }
  
    return words;
  }
  
  const totalStaffInWord = convertNumberToWords(allStaffMembers);
      
    return (
        <div className='border-2 border-black m-2'>
            <TopPrintSection menue={menue} sms={sms} />
            <div className="w-full mt-[-20px] mb-8 overflow-hidden rounded-lg shadow-lg bg-white">
                <div className="w-full overflow-x-auto">
                    <table className="w-full" style={{ fontSize: sms }}>
                        <thead>
                            <tr
                                className="text-md font-semibold tracking-wide text-left
                            text-gray-900 bg-gray-100 uppercase border-2 border-black"
                            > 
                                <th className="px-4 py-3 uppercase text-center border-r-2 border-black w-[9%]">S.NO.</th>
                                <th className="px-4 py-3 uppercase text-center border-r-2 border-black">Item name</th>
                                <th className="px-4 py-3 uppercase text-center">name of staff</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white font-semibold">
                            {
                                [...new Map(tableData?.map((item: any) => [item['itemName'], item])).values()].filter(f => (f.itemName !== HEAD_CONST && f.itemName !== CLEANER_CONST && f.itemName !== 'helper' )).map((c, ci) => (
                                    <tr className="">
                                        <td className="px-1 border-2 border-black w-[5%]">
                                            {ci + 1}
                                        </td>
                                        <td className="px-1 border-2 border-black ">
                                            <div className=''>
                                                {c.itemName}  {c.comment[0] ? '-' : ''} <span className='text-sm'>{ c.comment[0]} </span>
                                                {((menue.Categories.filter((it: { menueId: string; itemName: any })=> it.menueId === menue.id &&  it.itemName === c.itemName && it?.otherCategoryId === '0')).length) === 1 ? '' : ' ( ' }

                                                {((menue.Categories.filter((it: { menueId: string; itemName: any })=> it.menueId === menue.id &&  it.itemName === c.itemName && it?.otherCategoryId === '0')).length) === 1 ? '' :
                                                ((menue.Categories.filter((it: { menueId: string; itemName: any })=> it.menueId === menue.id &&  it.itemName === c.itemName && it?.otherCategoryId === '0')).length) }

                                                {((menue.Categories.filter((it: { menueId: string; itemName: any })=> it.menueId === menue.id &&  it.itemName === c.itemName && it?.otherCategoryId === '0')).length) === 1 ? ' ' : ' ) ' }
                                            </div>
                                        </td>
                                        <td className="px-1 border-2 border-black w-[50%]">
                                            {tableData.filter(f => (f.itemName !== HEAD_CONST && f.itemName !== CLEANER_CONST && f.itemName !== 'helper'  && f.itemName === c.itemName)).map((cn, ci) => (
                                                <td className="px-1">
                                                    {cn.contractors.map((cont, i) => `${cont}, `)}
                                                    {/* {cn.contractors} */}
                                                </td>
                                           ))}

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
                                    <span>WORDS:-</span> <span className='ml-2'>{totalStaffInWord}</span> 
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
                                    <span>CLEANER:-</span> 
                                    
                                    <span className='ml-2'>
                                    {
                                        tableData.filter(f => (f.itemName === 'cleaner')).map((c, ci) => (
                                            <td className="pl-1 py-2">
                                                {c.contractors.map((cont, i) => `${cont} ${i < c.contractors.length - 1 ? "," : ","}`)}
                                            </td>
                                        ))
                                    }
                                    </span> 
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div style={{ fontSize: sms }} className="row-span-3 px-1 py-3 border-b-2 border-r-2 border-l-2 border-black font-extrabold text-xl text-center">
                        <span>NOTE:-</span> <span className='ml-2 uppercase'>{menue.note}</span> 
                    </div>
                </div>
            </div>
            <h1 className='text-xl text-center tracking-tight mb-2' style={{ paddingLeft: centerImage}}>
                <img src='/thankyou.png' className='w-[350px] h-[70px] object-contain content-center' />
            </h1>
            <div className='w-full p-2' style={{ display: hidePrintButton}}>
                <Button className=' w-full m-auto' title='PRINT' onClick={() => {
                    sethidePrintButton('none')
                    setcenterImage('25%')
                    setsms('11px')
                    setTimeout(()=>  (window.print(), sethidePrintButton('block'), setcenterImage('35%'), setsms('inherit')), 1000);
                }} />
            </div>
        </div>
    )
}


export { MenuePrintLayout }