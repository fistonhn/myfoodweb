import * as XLSX from "xlsx";
export function convertJSONintoExcelFile(data: any, fileName: any) {
    const workSheet = XLSX.utils.json_to_sheet(data);
    const workBook = XLSX.utils.book_new();
    // Object.entries(workSheet).map(([key, value]) => {
    //     if (!!value.v && value.v.includes("http")) {
    //         workSheet[key].l = { Target: `${value.v}`, Tooltip: `${value.v}` };
    //     }
    // })

    XLSX.utils.book_append_sheet(workBook, workSheet, "students");
    // Generate buffer
    XLSX.write(workBook, { bookType: 'xlsx', type: "buffer" });

    // Binary string
    XLSX.write(workBook, { bookType: "xlsx", type: "binary" });

    XLSX.writeFile(workBook, `${fileName}.xlsx`);
}
