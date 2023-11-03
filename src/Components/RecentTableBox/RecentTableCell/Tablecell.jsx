import React,{useState} from 'react'
import '../style.css'
import toast, { Toaster } from 'react-hot-toast';
function Tablecell(props) {
  const [tempchecked,settempchecked]=useState(false);
    const downloadTxtFile = () => {
           toast("Downloading.....");
           const newNotification=`Transcription of ${props.item.name} completed`;
           props.setNotificationRecords([...props.notificationRecords,newNotification]);
        const element = document.createElement("a");
        const file = new Blob([props.item.transcription],
            { type: 'text/plain;charset=utf-8' });
        element.href = URL.createObjectURL(file);
        element.download = "Transcribed.txt";
        document.body.appendChild(element);
        element.click();
    }
    return (
        <>
        <Toaster></Toaster>
        <tr>
        <td><div className="check"><input type="checkbox" checked={tempchecked || props.allchecked} onChange={()=>{ settempchecked(!tempchecked);}} className='checkbox'/></div></td>
            <td><div className="Tablecell">{props.item.name}</div></td>
            <td><div className="Tablecell">{props.item.type}</div></td>
            <td><div className="Tablecell">{props.item.duration}sec</div></td>
            <td><div className="Tablecell">{props.item.dateCreated}</div></td>
            <td><div className="Tablecell">{props.item.size}</div></td>
            <td><div className="Tablecell download" onClick={downloadTxtFile}> {props.item.transcription.length > 10
                ? props.item.transcription.substring(0, 10) + "..."
                : props.item.transcription}</div></td>
        </tr>
        </>
    )
}

export default Tablecell
