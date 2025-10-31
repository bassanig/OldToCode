import { useEffect } from 'react'

export default function useOutsideClick(ref, handler, active = true, ignoredRef = null) {
  useEffect(() => {
    if (!active) return
    const listener = (event) => {
      if (ref.current && !ref.current.contains(event.target) &&
          (!ignoredRef || !ignoredRef.current || !ignoredRef.current.contains(event.target))) {
        handler()
      }
    }
    document.addEventListener('mousedown', listener)
    return () => {
      document.removeEventListener('mousedown', listener)
    }
  }, [ref, handler, active, ignoredRef])
}