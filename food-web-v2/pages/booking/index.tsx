import { Header } from '@/components/Header/Header'
import { SeniorClerkEdit } from '@/components/orderpage/SeniorClerkEdit'
import { UploadMenueExcelFile } from '@/components/orderpage/UploadMenueExcelFile'
import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'
import React from 'react'

const BookingClerk = () => {
    return (
        <div style={{
            backgroundImage: `url("/bg3.jpg")`,
            backgroundAttachment: "fixed",
            backgroundSize: "cover"
        }}
            className="h-screen overflow-auto">
            <Header />
            <div className='mb-40'>
                <UploadMenueExcelFile />
                <SeniorClerkEdit />
            </div>
        </div>
    )
}

export default BookingClerk

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const user = await getSession(ctx)
    if (!user || user.user.role !== "bookingclerk") {
        return {
            redirect: {
                destination: "/",
                permanent: false
            }
        }
    }
    return {
        props: {}
    }
}