import { GetServerSideProps } from 'next'
import { getSession, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'
import AccountMenu from './AccountMenu'
interface IHeader {
    onlyLogo?: boolean
    className?: string
}
const Header = ({ onlyLogo, className }: IHeader) => {
    const { data: session } = useSession()

    return (
        <div className={className}>
            <div className='flex items-center justify-evenly cursor-pointer uppercase '>
                <div className='flex items-center flex-wrap gap-5'>
                    {
                        !onlyLogo &&
                        <>
                            <h1 onClick={() => {
                                window.location.href = "/"
                            }} className='text-white hover:text-primary font-bold'>Home</h1>

                            <h1 onClick={() => {
                                window.location.href = "/admin/createusers"
                            }} className='text-white hover:text-primary font-bold'>Create Roles</h1>

                            <h1 onClick={() => {
                                window.location.href = "/admin/report"
                            }} className='text-white hover:text-primary font-bold'>Report</h1>
                            <h1 onClick={() => {
                                window.location.href = "/booking"
                            }} className='text-white hover:text-primary font-bold'>Bookings</h1>
                        </>
                    }
                </div>
                <div className='' onClick={() => { window.location.href = "/order" }}>
                    <img src='/logo.png' className='w-[200px] h-[200px] object-contain' />
                </div>
                <div className='flex items-center flex-wrap gap-5'>
                    {
                        !onlyLogo &&
                        <>
                            {
                                session?.user.role === "admin" &&
                                <h1 onClick={() => {
                                    window.location.href = "/admin/adminpage"
                                }} className='text-white hover:text-primary font-bold'>Admin</h1>
                            }
                            <h1 onClick={() => {
                                window.location.href = "/wage"
                            }} className='text-white hover:text-primary font-bold'>Wage Page</h1>
                            <h1 onClick={() => {
                                window.location.href = "/operation"
                            }} className='text-white hover:text-primary font-bold'>Operation</h1>

                            {/* <h1 className=' font-bold text-white hover:text-primary' onClick={() => { signOut() }}>logout</h1> */}
                            <h1>
                                <AccountMenu />
                            </h1>
                        </>
                    }
                </div>
            </div>
            <div className="flex items-center flex-col text-white">
                <h2 className=" font-semibold text-3xl ">
                    Reserve Menu & Catering
                </h2>
                <h5 className=" font-semibold text-xl ">XYZ place Pin: 1234567</h5>
                {
                    !onlyLogo &&
                    <>
                        <p>abc@gmail.com</p>
                        <span>Contact: 1234567</span>
                    </>
                }
            </div>
        </div>
    )
}

export { Header }
