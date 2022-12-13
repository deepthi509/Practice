import React from 'react'

function Count({ text, data }) {
    console.log("Data rendering", text)
    return (
        <div>
            {text},{data}
        </div>
    )
}

export default React.memo(Count)