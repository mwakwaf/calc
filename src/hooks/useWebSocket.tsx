import {useEffect, useRef} from "react";

export const useWebSocket = <T, >(url: string, onmessage: (response: T) => void) => {
  const socketRef = useRef<WebSocket>()
  useEffect(() => {
    console.log('Start Connect..')
    socketRef.current = new WebSocket(url)
    socketRef.current!.onopen = () => console.log('Connected')
    socketRef.current!.onmessage = (e) => onmessage(JSON.parse(e.data))
    socketRef.current!.onerror = (e) => console.log('Failed To Connect', e.target)
    return () => {
      console.log('End Connect..')
      socketRef.current?.close()
    }
  }, [])
  return socketRef.current!
}