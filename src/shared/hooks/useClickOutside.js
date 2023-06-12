import { useEffect } from 'react'


const useClickOutside = ( ref, callback ) => {
  const onClick = ( { target } ) => {
    if ( ref.current && !ref.current.contains( target ) ) {
      callback()
    }
  }

  useEffect( () => {
    document.addEventListener( 'click', onClick )

    return () => {
      document.removeEventListener( 'click', onClick )
    }
  } )
}

export default useClickOutside