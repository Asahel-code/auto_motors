import React from 'react'

const Section = props => {
    return (
        <div className="section">
            {props.children}
        </div>
    )
}

export const SectionTitle = props => {
    return (
        <div className="uppercase font-bold text-2xl">
            {props.children}
        </div>
    )
}

export const SectionBody = props => {
    return (
        <div className="">
            {props.children}
        </div>
    )
}

export default Section
