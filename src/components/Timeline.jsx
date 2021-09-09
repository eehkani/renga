// import "../styles/destyle.css";
// import "../styles/App.css";
import Comment from "./Comment";
import React, {useState} from "react";

const Timeline = () => {
    
    const [comments, setComments] = useState([{username: "Kazuma", txt: "柿食えば 鐘が鳴るなり 法隆寺", rep: []}])
    const [username, setUsername] = useState("")
    const [lineOne, setLineOne] = useState("")
    const [lineTwo, setLineTwo] = useState("")
    const [lineThree, setLineThree] = useState("")

    const handleComments = () => {
        const txt = lineOne + " "+ lineTwo + " "+ lineThree;
        if(username && txt.trim()){
            const newComment = {username: username, txt: txt, rep: []}
            setComments([...comments, newComment])
            setUsername("")
            setLineOne("")
            setLineTwo("")
            setLineThree("")
        }else{
            alert("すべての項目を書き込んでください")
        }
        
    }

    const deleteComment = (i) => {
        if(window.confirm("Are you sure you want to delete?")) {
            setComments([...comments.slice(0, i), ...comments.slice(i+1)])
        }
    }

    return(
        <>
            <header className="timeline_title"><h1>ホーム</h1></header>
            <div className="timeline_postWrapper">
                <input className="timeline_post" type="text" placeholder="username" value={username} onChange={e=> setUsername(e.target.value)}/>
                <input className="timeline_post" type="text" placeholder="5" value={lineOne} onChange={e=> setLineOne(e.target.value)}/>
                <input className="timeline_post" type="text" placeholder="7" value={lineTwo} onChange={e=> setLineTwo(e.target.value)}/>
                <input className="timeline_post" type="text" placeholder="5" value={lineThree} onChange={e=> setLineThree(e.target.value)}/> 

                <button type="button" onClick={handleComments} className="timeline_btn">送信</button>
            </div>
            {comments.map((comment, i) => (
                <Comment key={i} comment={comment} deleteComment={deleteComment} i={i}/>
            ))}
        </>
    )
}

export default Timeline;