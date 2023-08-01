export default function CurrentDate():JSX.Element { 
  return ( <div>{new Date().toLocaleDateString('he-IL', {timeZone:'Asia/Jerusalem'}).replace(/\D/g,'/') }</div> ); } 