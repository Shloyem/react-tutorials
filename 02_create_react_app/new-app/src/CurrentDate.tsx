export default function CurrentTime():JSX.Element { 
  return ( <div>{new Date().toLocaleDateString('he-IL', {timeZone:'Asia/Jerusalem'}).replace(/\D/g,'/') }</div> ); } 