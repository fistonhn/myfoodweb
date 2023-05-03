import React from 'react'
interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string,
    type?: "button" | "submit" | "reset",
    children?: React.ReactNode
}
const Button = ({ title, className, type, children, ...rest }: IButton) => {
    return (
        <button  {...rest} type={type ? type : "button"} className={`shadow-md bg-primary py-2 px-4 rounded-md text-sm font-semibold outline-none text-white ${className}`}>
            {title}
            {children}
        </button>
    )
}

export { Button }