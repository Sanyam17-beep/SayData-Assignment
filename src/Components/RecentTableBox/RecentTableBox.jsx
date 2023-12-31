import React, { useEffect, useState } from 'react'
import './style.css'
import Tablecell from './RecentTableCell/Tablecell'
import { ConfirmDialog } from 'primereact/confirmdialog'; 
import { confirmDialog } from 'primereact/confirmdialog';
import toast, { Toaster } from 'react-hot-toast';
function RecentTableBox(props) {
    {/*Recent File table box component */ }
    const temparr=["All Files"];
    const [allchecked, setallchecked] = useState(false);
    const handleDelete=()=>{
        if(props.isSelected=="Home"){ if (props.transcriptionRecords.length > 0){toast("Transcribed Record Deleted");props.setTrashRecords([...props.trashRecords,...props.transcriptionRecords]); props.setTranscriptionRecords([]);
            if (props.transcriptionRecords.length > 0) props.setNotificationRecords([...props.notificationRecords, "All Transcribed Records Deleted"]); }
        }
        if(props.isSelected=="Saved"){ if (props.savedRecords.length > 0) {toast("Saved Record Deleted");props.setTrashRecords([...props.trashRecords,...props.savedRecords]); props.setSavedRecords([]);
           props.setNotificationRecords([...props.notificationRecords, "All Saved Records Deleted"]); }
        }
        if(props.isSelected=="Trash"){
            if (props.trashRecords.length > 0){
            confirmDialog({
                message: 'Are you sure you want to Delete?',
                header: 'Confirmation',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {toast("Trash Deleted");props.setTrashRecords([]);}
            }); props.setNotificationRecords([...props.notificationRecords, "All Trash Records Deleted"]);} 
        }
       setallchecked(!allchecked);
    }
    return (
        <>
         <ConfirmDialog></ConfirmDialog>
         <Toaster></Toaster>
        <div className="RecentFiles">
        {props.isSelected=="Home"&&( <span className="RecentFilesHeading">Recent Files</span>)}
        {props.isSelected=="Saved"&&( <span className="RecentFilesHeading">Saved Files</span>)}
        {props.isSelected=="All Files"&&( <span className="RecentFilesHeading">All Files</span>)}
        {props.isSelected=="Trash"&&( <span className="RecentFilesHeading">Deleted Files</span>)}
            <div className="Horizontal">
                <div className="Line"></div>
            </div>
            <table>
                <tr>
                    <td><div className="check"><input type="checkbox" checked={allchecked} onChange={() => setallchecked(!allchecked)} className='checkbox' />{allchecked && !temparr.includes(props.isSelected) &&(<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ cursor: "pointer" }} onClick={handleDelete}>
                        <path d="M7.91665 1.45833C7.57027 1.45833 7.26 1.6726 7.13733 1.99654L6.946 2.50177C6.53585 2.46079 6.15796 2.41988 5.85205 2.38554C5.62337 2.35986 5.43539 2.3379 5.30482 2.32239L5.15419 2.30431L5.10304 2.29806C4.64629 2.24151 4.22953 2.56584 4.17297 3.02258C4.11641 3.47933 4.44082 3.89545 4.89757 3.95201L4.95323 3.95882L5.10821 3.97742C5.24183 3.99329 5.43339 4.01567 5.66608 4.04179C6.13105 4.094 6.76213 4.1614 7.42425 4.22183C8.3174 4.30334 9.29642 4.37499 9.99999 4.37499C10.7036 4.37499 11.6826 4.30334 12.5757 4.22183C13.2378 4.1614 13.8689 4.094 14.3339 4.04179C14.5666 4.01567 14.7581 3.99329 14.8918 3.97742L15.0467 3.95882L15.1023 3.95203C15.559 3.89546 15.8836 3.47933 15.827 3.02258C15.7704 2.56584 15.3543 2.24142 14.8976 2.29798L14.8458 2.30431L14.6952 2.32239C14.5646 2.3379 14.3766 2.35986 14.1479 2.38554C13.842 2.41988 13.4641 2.46079 13.054 2.50177L12.8626 1.99654C12.74 1.6726 12.4297 1.45833 12.0833 1.45833H7.91665Z" fill="black" />
                        <path d="M9.16665 9.79166C9.16665 9.33142 8.79356 8.95833 8.33332 8.95833C7.87308 8.95833 7.49998 9.33142 7.49998 9.79166V13.9583C7.49998 14.4186 7.87308 14.7917 8.33332 14.7917C8.79356 14.7917 9.16665 14.4186 9.16665 13.9583V9.79166Z" fill="black" />
                        <path d="M11.6667 8.95833C12.1269 8.95833 12.5 9.33142 12.5 9.79166V13.9583C12.5 14.4186 12.1269 14.7917 11.6667 14.7917C11.2064 14.7917 10.8333 14.4186 10.8333 13.9583V9.79166C10.8333 9.33142 11.2064 8.95833 11.6667 8.95833Z" fill="black" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.758 6.70879C15.8335 5.65149 14.922 4.80386 13.8861 4.92358C12.826 5.04608 11.1903 5.20833 9.99999 5.20833C8.8097 5.20833 7.17393 5.04608 6.11391 4.92358C5.07797 4.80386 4.16642 5.65149 4.24194 6.70879L4.95589 16.704C5.01001 17.4617 5.57437 18.1023 6.34886 18.2188C7.17936 18.3437 8.70327 18.5432 10.0009 18.5417C11.2827 18.5402 12.8128 18.3415 13.647 18.2178C14.4228 18.1027 14.99 17.4617 15.0442 16.7017L15.758 6.70879ZM14.0774 6.57922C14.0803 6.57889 14.0825 6.57909 14.0825 6.57909L14.0847 6.57959C14.0866 6.58023 14.0895 6.58175 14.0923 6.58447C14.0942 6.58627 14.0957 6.58847 14.0957 6.58847L14.0956 6.59005L13.3826 16.5721C12.557 16.6941 11.1421 16.8737 9.99902 16.875C8.84356 16.8763 7.43738 16.6965 6.6175 16.5738L5.90437 6.59005L5.90431 6.58847C5.90431 6.58847 5.90573 6.58627 5.90763 6.58447C5.9105 6.58175 5.91341 6.58023 5.91526 6.57959L5.91746 6.57909C5.91746 6.57909 5.91968 6.57889 5.92257 6.57922C6.98447 6.70195 8.70452 6.875 9.99999 6.875C11.2954 6.875 13.0155 6.70195 14.0774 6.57922Z" fill="black" />
                    </svg>)}</div></td>
                    <td><div className="Tablecell">Name</div></td>
                    <td><div className="Tablecell">Type</div></td>
                    <td><div className="Tablecell">Duration</div></td>
                    <td><div className="Tablecell">Date Created</div></td>
                    <td><div className="Tablecell">Size</div></td>
                    <td><div className="Tablecell ">Download</div></td>
                </tr>
                {props.isSelected=="Home"&&(props.transcriptionRecords.map((item, index) => (
                    <Tablecell savedRecords={props.savedRecords} setSavedRecords={props.setSavedRecords}  notificationRecords={props.notificationRecords} setNotificationRecords={props.setNotificationRecords} item={item} allchecked={allchecked}></Tablecell>
                )))}
                  {props.isSelected=="All Files"&&(props.transcriptionRecords.map((item, index) => (
                    <Tablecell savedRecords={props.savedRecords} setSavedRecords={props.setSavedRecords}  notificationRecords={props.notificationRecords} setNotificationRecords={props.setNotificationRecords} item={item} allchecked={allchecked}></Tablecell>
                )))}
                 {props.isSelected=="All Files"&&(props.savedRecords.map((item, index) => {
                    if(!props.transcriptionRecords.includes(item))
                    return <Tablecell savedRecords={props.savedRecords} setSavedRecords={props.setSavedRecords}  notificationRecords={props.notificationRecords} setNotificationRecords={props.setNotificationRecords} item={item} allchecked={allchecked}></Tablecell>;
 }))}
 {props.isSelected=="Saved"&&(props.savedRecords.map((item, index) => (
                    <Tablecell savedRecords={props.savedRecords} setSavedRecords={props.setSavedRecords}  notificationRecords={props.notificationRecords} setNotificationRecords={props.setNotificationRecords} item={item} allchecked={allchecked}></Tablecell>
                )))}
                 {props.isSelected=="Trash"&&(props.trashRecords.map((item, index) => (
                    <Tablecell savedRecords={props.savedRecords} setSavedRecords={props.setSavedRecords}  notificationRecords={props.notificationRecords} setNotificationRecords={props.setNotificationRecords} item={item} allchecked={allchecked}></Tablecell>
                )))}
            </table>
        </div>
        </>
    )
}

export default RecentTableBox
