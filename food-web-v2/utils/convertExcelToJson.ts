import * as xlsx from 'xlsx'

interface IConvertExcelToJson {
    file: File,
    callback: (json: any) => void
}
export const convertExcelToJson = ({ callback, file }: IConvertExcelToJson) => {
    if (file) {
        const reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onload = (e) => {
            const data = e.target?.result;
            const workbook = xlsx.read(data, { type: "array" });
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const json = xlsx.utils.sheet_to_json(worksheet);
            callback(json)
        };
    }
}