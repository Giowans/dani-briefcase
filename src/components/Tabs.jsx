import { useEffect, useState } from "react"
import Rotate from 'react-reveal/Rotate';

const Tabs = ({options, className, onSelect, parentActive = ''}) => {

    const [active, setActive] = useState('');

    useEffect(() => {
      setActive(parentActive);
    }, [parentActive])

    useEffect(() => {
      setActive(options[0]);
    }, [])

    return (
      <Rotate top right cascade>
        <div className = {'hidden w-full lg:flex flex-row justify-between items-end p-2 '+className}>
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
        <div className = {'lg:hidden h-fit w-full grid grid-cols-12 gap-5 items-center p-2 '+className}>
            {options.map((option, index) => {
                return (
                  <div className="col-span-4">
                    <h4 
                      key = {`bc-${option}-${index}`} 
                      className = {'w-full cursor-pointer text-gray-600 hover:text-black ease-in-out '+ (active === option ? 'font-bold text-black' : '')} 
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