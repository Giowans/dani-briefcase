import { useEffect, useState } from "react"
import Rotate from 'react-reveal/Rotate';

const Tabs = ({options, className, onSelect, parentActive = ''}) => {

    const [active, setActive] = useState(options[0]);

    useEffect(() => {
      setActive(parentActive);
    }, [parentActive])

    return (
      <Rotate top right cascade>
        <div className = {'w-full flex flex-row justify-between items-end p-2 '+className}>
            {options.map((option, index) => {
                return (
                  <div>
                    <h4 
                      key = {`bc-${option}-${index}`} 
                      className = {'cursor-pointer text-gray-600 hover:text-black ease-in-out '+ (active === option ? 'font-bold text-black' : '')} 
                      onClick = {() => {
                        setActive(option);
                        onSelect && onSelect(option);
                        }}
                    >
                      {option}
                    </h4>
                  </div>
                )
            })}
        </div>
      </Rotate>
    )
}

export default Tabs;