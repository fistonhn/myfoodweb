import { Categories, Contractor, Menue } from '@prisma/client';
import React from 'react'
import { getFinalWages, getTotalwages } from './utils';
interface WageSearchTableProp {
    meunues: (Menue & {
        Categories: (Categories & {
            contractor: Contractor | null;
        })[];
    })[]
}
const WageSearchTable = ({ meunues }: WageSearchTableProp) => {

    return (
        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
            <div className="w-full overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600 whitespace-nowrap">
                            <th className="px-4 py-3 uppercase">booking id</th>
                            <th className="px-4 py-3 uppercase">venue</th>
                            <th className="px-4 py-3 uppercase">total wages</th>
                            <th className="px-4 py-3 uppercase">final wages</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white whitespace-nowrap">
                        {
                            meunues.map((m, mi) => (
                                <tr key={mi} className="text-gray-700">
                                    <td className="px-4 py-3 border">
                                        {m.bookingId}
                                    </td>
                                    <td className="px-4 py-3 border">
                                        {m.venue}
                                    </td>
                                    <td className="px-4 py-3 border">
                                        {getTotalwages(m)}
                                    </td>
                                    <td className="px-4 py-3 border">
                                        {getFinalWages(m)}
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export { WageSearchTable }