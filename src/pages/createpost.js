import { useEffect, useState } from "react";
import {addDoc, collection} from 'firebase/firestore';
import {db,auth} from '../firebase-config'
import {useNavigate} from 'react-router-dom';
function CreatePost({isAuth})
{ 
    const[title,setTitle]=useState("");
    const[posttext,setPostText]=useState("");

    const email = auth.currentUser.email
    const arr = email.split('@')
    const domain = arr[1]
    const postCollectionRef = collection(db,domain);

    let navigate=useNavigate();

    const CreatePost = async () =>
    {
        await addDoc(postCollectionRef,{title,posttext,author:{name:auth.currentUser.displayName,id:auth.currentUser.uid}})
        //console.log(title);
        //console.log(auth.currentUser.email);
        //console.log(domain)
        //navigate('/');
    }
    useEffect(()=>
    {
        if(!isAuth)
        {
            navigate('/login')
        }
    })

    return(<div className="createPostPage">
         <div className="cpContainer">
            <h1>Create a Post</h1>
            <div className="inputGp">
                <label>Title :</label>
                <input placeholder="Title..." onChange={(event)=>
                {
                     setTitle(event.target.value);
                }}></input>
            </div>
            <div className="inputGp">
                <label>Post :</label>
                <textarea placeholder="Post" onChange={(event)=>{
                    setPostText(event.target.value);
                }}/>
            </div>
            <button onClick={CreatePost}>Submit Post</button>
         </div>
    </div>)

}
export default CreatePost;