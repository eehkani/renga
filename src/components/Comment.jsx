// import "../styles/destyle.css";
// import '../styles/App.css';
import Reply from "./Reply";
import React, {useState} from "react";

const Comment = ({comment, deleteComment, i}) => {

    const icon01 = "https://cdn.discordapp.com/attachments/764477223067058196/876532226001629204/image0.png"
    const png1 = "https://cdn.discordapp.com/attachments/764477223067058196/876543281054507018/image0.png"
    const png2 = "https://cdn.discordapp.com/attachments/764477223067058196/876543281327144970/image1.png"
    const png3 = "https://cdn.discordapp.com/attachments/764477223067058196/876543281562009681/image2.png"
    const [lineOne, setLineOne] = useState("")
    const [lineTwo, setLineTwo] = useState("")
    const [isRepOpen, setIsRepOpen] = useState(false)
    const [replys, setReplys] = useState([])
    const [goods, setGoods] = useState(0)

    const retweet = () => {  
        alert("リツイートはさせません!!")
    }

    const reply = () => {
        const rep = lineOne + " " + lineTwo;
        if(rep.trim()){
            const newReply = rep
            setReplys([...replys, newReply])
            setLineOne("")
            setLineTwo("")
        }else{
            alert("すべての項目を書き込んでください")
        }
    }

    const handleIsRepOpen = () => {
        setIsRepOpen(!isRepOpen);
    };

    return(
        <div className="comment_card">
            <div>
                <div className="comment_item">
                    <div className="comment_row">
                        <div><img src={icon01}  className="comment_icon"/></div>
                        <div className="comment_nameBox">
                            <div className="comment_row">
                                <div className="comment_name">{comment.username}</div>
                                <div className="comment_id">@K_azuma</div>
                            </div>
                            <div className="comment_txt">{comment.txt}</div>
                        </div>
                    </div>
                    <button className="comment_button" onClick={() => {deleteComment(i)}}>削除</button>
                </div>  

                <div className="comment_symbolWrapper">
                    <div>
                        <img src={png1} className="comment_symbol" onClick={handleIsRepOpen}/>
                    </div>
                    <div>
                        <img src={png2} className="comment_symbol" onClick={retweet}/>
                    </div>
                    <div>
                        <img src={png3} className="comment_symbol" onClick={() => {setGoods(goods+1)}}/>
                        {goods !== 0 && <span>{goods}</span>}
                    </div>
                    <div></div>
                </div>
            </div>
                
            {isRepOpen && 
                <div>
                    <input type="text" placeholder="7" value={lineOne} onChange={e=> setLineOne(e.target.value)} className="comment_reply"/>
                    <input type="text" placeholder="7" value={lineTwo} onChange={e=> setLineTwo(e.target.value)} className="comment_reply"/>
                    <button type="button" onClick={reply} className="comment_btn">送信</button>
                </div>
            }


            {isRepOpen && replys.map((rep, i) => (
                <Reply key={i} rep={rep} />  
            ))} 

            <div></div>
        </div>
    )
} 

export default Comment;