import { Button } from '@/components/Button/Button'
import { MenuePrintLayout } from '@/components/menueprintpage/MenuePrintLayout'
import prisma from '@/lib/prismaclient'
import { getSingleMenue } from '@/providers/apis'
import { handleApiErrors } from '@/utils/handleapierrors'
import { Categories, Contractor, Menue } from '@prisma/client'
import { GetServerSideProps } from 'next'
import React, { useEffect, useState } from 'react'
type IMenue = (Menue & {
    Categories: (Categories & {
        contractor: Contractor | null;
    })[];
}) | null
interface MenuePrintProp {
    id: string
}
const MenuePrint = ({ id }: MenuePrintProp) => {
    const [menue, setmenue] = useState<IMenue | null>(null)

    const getsinglemenue = async () => {
        try {
            const res = await getSingleMenue(id)
            setmenue(res.data.menue)
        } catch (error: any) {
            const err = handleApiErrors(error)
            alert(err)
        }
    }
    useEffect(() => {
        if (id) {
            getsinglemenue()
        }
    }, [id])
    return (
        <div>
            {
                !menue ?
                    <div>Loading...</div>
                    :
                    <MenuePrintLayout menue={menue} />
            }

        </div>
    )
}
export default MenuePrint;

export const getServerSideProps: GetServerSideProps<MenuePrintProp> = async (ctx) => {
    const id = ctx.query.menueid as string
    return {
        props: {
            id: id
        }
    }
}
