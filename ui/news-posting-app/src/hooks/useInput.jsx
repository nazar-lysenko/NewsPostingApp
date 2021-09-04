import React, { useState } from 'react'

const useInput = ({ type, defaultValue, name, label }) => {
    const [value, setValue] = useState(defaultValue || '')
    const input = (
        <>
            {label ? <label htmlFor={name}>{label}</label> : null}
            <input type={type || 'text'} value={value} onChange={event => setValue(event.target.value)} name={name} />
        </>
    )
    return [value, input, setValue]
}

export default useInput
