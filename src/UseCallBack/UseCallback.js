import React, { useCallback, useState } from 'react'
import Button from './Button'
import Title from './Title'
import Count
    from './Count'
function UseCallback() {
    const [age, setAge] = useState(25)
    const [count, setCount] = useState(40000)

    const ageInc = useCallback(() => {
        setAge(age + 1)
    }, [age])

    const countInc = useCallback(() => {
        setCount(count + 1)
    }, [count])

    return (
        <div>
            <Title />
            <Count text="Age" data={age} />
            <Button handler={ageInc}>ageInc</Button>
            <Count text="Count" data={count} />
            <Button handler={countInc}>countInc</Button>
        </div>
    )

}
export default UseCallback