import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

const PDF_FILE_URL = "https://haronpaulson.github.io/portfolio-mathew/file_pdp.pdf";
const uurrll = PDF_FILE_URL.split("/").pop();

function Exportpdf() {
        const downloadFileAtUrl = (url) => {
            const fileName = url.split("/").pop();
            const aTag = document.createElement("a");
            aTag.href= url;
            aTag.setAttribute("download", fileName);
            document.body.appendChild(aTag);
            aTag.click();
            aTag.remove();
        };

  return (
    <div>
        <div>
            <div className=' flex justify-center' onClick={() => {
                downloadFileAtUrl(PDF_FILE_URL);
            }}>
                <div className=' flex  rounded-md p-1 space-x-2'><h2>View full resume </h2><GoArrowUpRight /></div>
            </div> 
        </div>

    </div>
  )
}

export default Exportpdf