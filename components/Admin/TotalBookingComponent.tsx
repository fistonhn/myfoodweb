import { Menue } from '@prisma/client'
import React from 'react'
interface TotalBookingComponentProp {
    menues: Menue[]
}
const TotalBookingComponent = ({ menues }: TotalBookingComponentProp) => {
    return (
        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
            <div className="w-full overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600 whitespace-nowrap">
                            <th className="px-4 py-3 uppercase">booking id</th>
                            <th className="px-4 py-3 uppercase">function</th>
                            <th className="px-4 py-3 uppercase whitespace-nowrap">name</th>
                            <th className="px-4 py-3 uppercase whitespace-nowrap">created at</th>
                            <th className="px-4 py-3 uppercase">function date</th>
                            <th className="px-4 py-3 uppercase">mobile</th>
                            <th className="px-4 py-3 uppercase">Service Time</th>
                            <th className="px-4 py-3 uppercase">venue</th>
                            <th className="px-4 py-3 uppercase">Departure Date</th>
                            <th className="px-4 py-3 uppercase">Departure Time</th>
                            <th className="px-4 py-3 uppercase">PAX</th>
                            <th className="px-4 py-3 uppercase">Special Instruction</th>
                            <th className="px-4 py-3 uppercase">Head Name</th>
                            <th className="px-4 py-3 uppercase">Head Mobile Number</th>
                            <th className="px-4 py-3 uppercase">Driver Name</th>
                            <th className="px-4 py-3 uppercase">Vehicle Number</th>
                            <th className="px-4 py-3 uppercase">words</th>
                            <th className="px-4 py-3 uppercase">cleaner</th>
                            <th className="px-4 py-3 uppercase">booked By</th>
                            <th className="px-4 py-3 uppercase">booker Mobile Number</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white whitespace-nowrap">
                        {
                            menues.map((val, index) => (
                                <tr className="text-gray-700" key={index}>
                                    <td className="px-4 py-3 border">
                                        {val.bookingId}
                                    </td>
                                    <td className="px-4 py-3 border">
                                        {val.function}
                                    </td>
                                    <td className="px-4 py-3 border">
                                        {val.name}
                                    </td>
                                    <td className="px-4 py-3 border">
                                        {
                                            val.createdAt ?
                                                `${new Date(val.createdAt).toLocaleDateString()}`
                                                :
                                                "null"
                                        }
                                    </td>
                                    <td className="px-4 py-3 border">
                                        {new Date(val.functionDate).toLocaleDateString()}
                                    </td>
                                    <td className="px-4 py-3 border">
                                        {val.mobile}
                                    </td>
                                    <td className="px-4 py-3 border">
                                        {new Date(val.serviceTime).toTimeString()}
                                    </td>
                                    <td className="px-4 py-3 border">
                                        {val.venue}
                                    </td>
                                    <td className="px-4 py-3 border">
                                        {new Date(val.departureDate).toLocaleDateString()}
                                    </td>
                                    <td className="px-4 py-3 border">
                                        {new Date(val.departureTime).toTimeString()}
                                    </td>
                                    <td className="px-4 py-3 border">
                                        {val.PAX}
                                    </td>
                                    <td className="px-4 py-3 border">
                                        {val.specialInstruction}
                                    </td>
                                    <td className="px-4 py-3 border">
                                        {val.headName}
                                    </td>
                                    <td className="px-4 py-3 border">
                                        {val.headMobileNumber}
                                    </td>
                                    <td className="px-4 py-3 border">
                                        {val.driverName}
                                    </td>
                                    <td className="px-4 py-3 border">
                                        {val.vehicleNumber}
                                    </td>
                                    <td className="px-4 py-3 border">
                                        {val.words}
                                    </td>
                                    <td className="px-4 py-3 border">
                                        {val.cleaner}
                                    </td>
                                    <td className="px-4 py-3 border">
                                        {val.bookedBy}
                                    </td>
                                    <td className="px-4 py-3 border">
                                        {val.bookerMobileNumber}
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

export { TotalBookingComponent }