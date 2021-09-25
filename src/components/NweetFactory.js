import { useState } from "react";
import { dbService, storageService } from "fbase";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus,faTimes } from "@fortawesome/free-solid-svg-icons";

const NweetFactory = ( {userObj} ) => {
    const [nweet, setNweet] = useState("");
    const [attachment, setAttachment] = useState("");


    const onSubmit = async (event) => {
        event.preventDefault();
        if (nweet === ""){
            return;
        }
        let attachmentUrl = "";
        if (attachment !== ""){
            const attachmentRef = storageService.ref().child(`${userObj.uid}/${uuidv4()}`);
            const response = await attachmentRef.putString(attachment,"data_url");
            attachmentUrl = await response.ref.getDownloadURL();
        }
        await dbService.collection("nweets").add({
            text: nweet,
            createdAt: Date.now(),
            creatorId: userObj.uid,
            attachmentUrl,
        });
        setNweet("");
        setAttachment("");
    };

    const onChange = (event) => {
        event.preventDefault();
        const {
            target: {value},
        } = event;
        setNweet(value);
    };

    const onFileChange = (event) => {
        const {
            target: {files},
        } = event;
        const theFile = files[0];
        const reader = new FileReader();
        reader.onloadend = (finishedEvent) => {
            const {
                currentTarget: { result },
            } = finishedEvent;
            setAttachment(result);
        };
        if (Boolean(theFile)){
            reader.readAsDataURL(theFile);
        }
    };

    const onClearAttachment = () => setAttachment("");

    return (
        <form onSubmit={onSubmit} className="factoryForm">
            <div className="factoryInput__container">
                <input className="factoryInput__input colorBorCor" value={nweet}
                onChange={onChange} type="text"
                placeholder="What's on your mind?" maxLength={120}
                />
                <input type="submit" value="&rarr;" className="factoryInput__arrow colorBack" />
            </div>
            <label for="attach-file" className="factoryInput__label color">
                <span className="color">Add photos</span>
                <FontAwesomeIcon icon={faPlus} />
            </label>
            <input
                id="attach-file" type="file"
                accept="image/*" onChange={onFileChange}
                style={{ opacity: 0, }}
            />
            

            {attachment && (
                <div className="factoryForm__attachment color">
                <img
                    src={attachment}
                    style={{
                    backgroundImage: attachment,
                    }}
                />
                <div className="factoryForm__clear color" onClick={onClearAttachment}>
                    <span>Remove</span>
                    <FontAwesomeIcon icon={faTimes} />
                </div>
                </div>
            )}
        </form>
    );
};


export default NweetFactory;