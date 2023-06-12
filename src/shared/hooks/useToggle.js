import { useCallback, useState } from 'react'


const useToggle = ( defaultValue ) => {
  const [ value, setValue ] = useState( defaultValue )

  const toggle =  () => setValue( x => !x )

  return [ value, toggle, setValue ]
}

export default useToggle