import React from 'react'
import './style.css'
function RecentTableBox() { {/*Recent File table box component */}
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
                                <td><div className="Tablecell">Last Updated</div></td>
                                <td><div className="Tablecell">Action</div></td>
                            </tr>
                            <tr>
                                <td><div className="check"><input type="checkbox" className='checkbox' /></div></td>
                                <td><div className="Tablecell">Peng Meeting</div></td>
                                <td><div className="Tablecell">Audio</div></td>
                                <td><div className="Tablecell">20</div></td>
                                <td><div className="Tablecell">Tofunmi</div></td>
                                <td><div className="Tablecell">Table cell</div></td>
                                <td><div className="Tablecell"></div></td>
                            </tr>
                            <tr>
                                <td><div className="check"><input type="checkbox" className='checkbox' /></div></td>
                                <td><div className="Tablecell">Tofunmi Idowu</div></td>
                                <td><div className="Tablecell">SML10025</div></td>
                                <td><div className="Tablecell">1/5/2023</div></td>
                                <td><div className="Tablecell">Constance</div></td>
                                <td><div className="Tablecell">Table cell</div></td>
                                <td><div className="Tablecell"></div></td>
                            </tr>
                            <tr>
                                <td><div className="check"><input type="checkbox" className='checkbox' /></div></td>
                                <td><div className="Tablecell">Naomi Igimoh</div></td>
                                <td><div className="Tablecell">SML10025</div></td>
                                <td><div className="Tablecell">25/4/2023</div></td>
                                <td><div className="Tablecell">Shakirat</div></td>
                                <td><div className="Tablecell">Table cell</div></td>
                                <td><div className="Tablecell"></div></td>
                            </tr>
                            <tr>
                                <td><div className="check"><input type="checkbox" className='checkbox' /></div></td>
                                <td><div className="Tablecell">Edu Hermanns</div></td>
                                <td><div className="Tablecell">SML10025</div></td>
                                <td><div className="Tablecell">20/4/2023</div></td>
                                <td><div className="Tablecell">Tofunmi</div></td>
                                <td><div className="Tablecell">Table cell</div></td>
                                <td><div className="Tablecell"></div></td>
                            </tr>
                            <tr>
                                <td><div className="check"><input type="checkbox" className='checkbox' /></div></td>
                                <td><div className="Tablecell">Timmy Adubi</div></td>
                                <td><div className="Tablecell">SML10025</div></td>
                                <td><div className="Tablecell">20/4/2023</div></td>
                                <td><div className="Tablecell">Tofunmi</div></td>
                                <td><div className="Tablecell">Table cell</div></td>
                                <td><div className="Tablecell"></div></td>
                            </tr>
                            <tr>
                                <td><div className="check"><input type="checkbox" className='checkbox' /></div></td>
                                <td><div className="Tablecell">Alex Oyebade</div></td>
                                <td><div className="Tablecell">SML10025</div></td>
                                <td><div className="Tablecell">20/4/2023</div></td>
                                <td><div className="Tablecell">Shakirat</div></td>
                                <td><div className="Tablecell">Table cell</div></td>
                                <td><div className="Tablecell"></div></td>
                            </tr>
                            <tr>
                                <td><div className="check"><input type="checkbox" className='checkbox' /></div></td>
                                <td><div className="Tablecell">Ekene Smart</div></td>
                                <td><div className="Tablecell">SML10025</div></td>
                                <td><div className="Tablecell">20/4/2023</div></td>
                                <td><div className="Tablecell">Shakirat</div></td>
                                <td><div className="Tablecell">Table cell</div></td>
                                <td><div className="Tablecell"></div></td>
                            </tr>
                            <tr>
                            </tr>
                        </table>
                    </div>
  )
}

export default RecentTableBox
