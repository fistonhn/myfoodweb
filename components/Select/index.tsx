import React from 'react'
export interface ISelectOption {
    value: string
    content: React.ReactNode
}
interface SelectProp extends React.SelectHTMLAttributes<HTMLSelectElement> {
    options: ISelectOption[]
    value: string
    className?: string,
    label?: string
    labelClassName?: string
}
const Select = ({ options, value, className, label, labelClassName, ...props }: SelectProp) => {
    return (
        <div className='grid text-start w-[150px]'>
            {
                label &&
                <label className={`text-sm font-semibold text-white ${labelClassName}`}>{label}</label>
            }
            <select {...props} value={value} className={`shadow-md w-full border border-gray-300 rounded-md focus:border-primary p-2  outline-none ${className}`}>
                {
                    options.map((val, index) => (
                        <option key={index} value={val.value}>{val.content}</option>
                    ))
                }
            </select>
        </div>
    )
}

export { Select }