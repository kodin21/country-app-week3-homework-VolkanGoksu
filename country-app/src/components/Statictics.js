import React from 'react'

export default function Statictics({contryStatics}) {
    return (
        <div  className="bg-white text-black auto w-80 rounded-lg shadow-md">
                 <div className="text-base font-extrabold text-center mb-3">
                     <h2>Languages - Top 10</h2>
                 </div>
            {
                contryStatics.map(language => (
                    <div className="text-center" >
                        <ui>
                            <li className="list-none font-medium">
                            {language.name} = {language.count}
                            </li>
                        </ui>
                       
                    </div>
                ))
            }
        </div>
    )
}
