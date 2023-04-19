import { Header } from '@/components/Header/Header'
import React, { useState } from 'react'
import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'
import { DateSearch } from '@/components/reportPage/DateSearch'
import { Box, Tab, Tabs, Typography } from '@mui/material'
import { WageSearch } from '@/components/reportPage/WageSearch'
import { ContractorSearch } from '@/components/reportPage/ContractorSearch'
interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <div>{children}</div>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const ReportPage = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <div style={{
            backgroundImage: `url("/bg3.jpg")`,
            backgroundAttachment: "fixed",
            backgroundSize: "cover"
        }}
            className="h-screen overflow-auto"
        >
            <Header />
            {/* <DateSearch /> */}
            <Box sx={{ width: '60%', bgcolor: "white", marginX: "auto" }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="FROM-TO DATE" {...a11yProps(0)} />
                        <Tab label="FROM-TO DATE WAGE" {...a11yProps(1)} />
                        <Tab label="SEARCH CONTRACTOR" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <DateSearch />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <WageSearch />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <ContractorSearch />
                </TabPanel>
            </Box>
        </div>
    )
}

export default ReportPage

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//     const session = await getSession(ctx)
//     if (!session || session.user.role !== "admin") {
//         return {
//             redirect: {
//                 destination: "/",
//                 permanent: false,
//             }
//         }
//     }
//     return {
//         props: {}
//     }
// }


