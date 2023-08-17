import Script from "next/script"
import { useEffect, useRef } from "react"

export const ClassRoomShare = () => {
  const classRoomRef = useRef(null);

  useEffect(() => {
    window.gapi !== undefined && window.gapi.sharetoclassroom.render(classRoomRef.current, { size: 44 })    
  },[]);

  return <>
    <Script
        id="google-maps"
        src="https://maps.googleapis.com/maps/api/js"
        onReady={() => {
            gapi.sharetoclassroom.render(classRoomRef.current, { size: 44 }) 
            
        }}
      />
 
      <div ref={classRoomRef}></div>
  </>
}