import React from 'react'

export default function Statictics({contryStatics}) {
    return (
        <div>
            {
                contryStatics.map(language => (
                    <div style={{border:"1px solid black"}}>
                        <p>{language.name}</p>
                        <p>{language.count}</p>
                    </div>
                ))
            }
        </div>
    )
}
