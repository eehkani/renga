// import "../styles/destyle.css";
// import "../styles/App.css";
import React from "react"

const Reply = ({rep}) => {
    //console.log(rep)
    const icon02 = "https://cdn.discordapp.com/attachments/764477223067058196/880358012336877608/image0.png"
    
    return (
        <>
            <div className="reply_row">
                    <div><img src={icon02}  className="reply_icon"/></div>

                    <div id="reply_nameBox">
                        <div className="reply_row">
                            <div className="reply_name">foo</div>
                            <div className="reply_id">@im_funny</div>
                        </div>
                        <div className="reply_txt"> {rep} </div>
                    </div>
                </div>
                <br />
                
        </>
    )
}

export default Reply;