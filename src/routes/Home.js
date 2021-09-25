import { dbService } from "fbase";
import { useEffect, useState } from "react";
import Nweet from "components/Nweet";
import NweetFactory from "components/NweetFactory";

const Home = ({ userObj }) => {
    const [nweets, setNweets] = useState([]);
    const [desc, setDesc] = useState(1);
    
    useEffect(()=> {
        if (desc){
            dbService.collection("nweets")
            .orderBy("createdAt", "desc")
            .onSnapshot((snapshot)=> {
            const newArray = snapshot.docs.map((document) => ({
                id: document.id,
                ...document.data(),
            }));
            setNweets(newArray);
        });
        }
        else{
            dbService.collection("nweets")
            .orderBy("createdAt", "asc")
            .onSnapshot((snapshot)=> {
            const newArray = snapshot.docs.map((document) => ({
                id: document.id,
                ...document.data(),
            }));
            setNweets(newArray);
        });
        }
        
    }, [desc]);

    const changeOrder= () => {
        if(desc){
            setDesc(0);
        }
        else{
            setDesc(1);
        }
    };

    return (
    <div className="container">
        <NweetFactory userObj={userObj} />
        {desc? (
            <button className="order color" onClick={changeOrder}>Newer </button>
        ): (
            <button className="order color" onClick={changeOrder}>Older </button>
        )}
        
        <div style={{marginTop: 30}}>
            {nweets.map((nweet) => (
                <Nweet key={nweet.id} nweetObj={nweet}
                 isOwner={nweet.creatorId === userObj.uid} />
            ))}
        </div>
    </div>
    );
};

export default Home;
