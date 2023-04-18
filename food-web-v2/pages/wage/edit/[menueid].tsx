import { WageMenueLayout } from '@/components/Wage/WageMenueLayout';
import prisma from '@/lib/prismaclient'
import { getSingleMenue } from '@/providers/apis';
import { handleApiErrors } from '@/utils/handleapierrors';
import { Categories, Contractor, Menue } from '@prisma/client';
import { GetServerSideProps } from 'next'
import React, { useState } from 'react'

type IMenue = (Menue & {
    Categories: (Categories & {
        contractor: Contractor | null;
    })[];
}) | null
interface WageEditProp {
    id: string
}
const WageEdit = ({
    id
}: WageEditProp) => {
    const [menue, setmenue] = useState<IMenue>(null)
    const getsinglemenue = async () => {
        try {
            const res = await getSingleMenue(id)
            setmenue(res.data.menue)
        } catch (error: any) {
            const err = handleApiErrors(error)
            alert(err)
        }
    }
    React.useEffect(() => {
        if (id) {
            getsinglemenue()
        }
    }, [id])
    return (
        <div>
            {
                !menue ?
                    <div>loading...</div>
                    :
                    <WageMenueLayout menue={menue} />
            }
        </div>
    )
}

export default WageEdit

export const getServerSideProps: GetServerSideProps<WageEditProp> = async (ctx) => {
    const id = ctx.query.menueid as string
    return {
        props: {
            id: id
        }
    }
}
