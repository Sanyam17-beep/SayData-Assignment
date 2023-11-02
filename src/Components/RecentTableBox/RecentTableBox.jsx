import React from 'react'
import './style.css'
import Tablecell from './RecentTableCell/Tablecell'
function RecentTableBox(props) { {/*Recent File table box component */}
const tab=[1,2,3,4];
  return (
    <div className="RecentFiles">
                        <span className="RecentFilesHeading">Recent Files</span>
                        <div className="Horizontal">
                            <div className="Line"></div>
                        </div>
                        <table>
                            <tr>
                                <td><div className="check"><input type="checkbox" className='checkbox' /></div></td>
                                <td><div className="Tablecell">Name</div></td>
                                <td><div className="Tablecell">Type</div></td>
                                <td><div className="Tablecell">Duration</div></td>
                                <td><div className="Tablecell">Date Created</div></td>
                                <td><div className="Tablecell">Size</div></td>
                                <td><div className="Tablecell ">Download</div></td>
                            </tr>
                            {props.transcriptionRecords.map((item, index) => (
                                <Tablecell item={item}></Tablecell>
                            ))}
                          
                        </table>
                    </div>
  )
}

export default RecentTableBox
