import { useRef, useState } from "react";
import { useMutation, useQuery } from "../../convex/_generated/react";
import Image from "next/image"; 

export const UploadProfilePic = () => {
    const messages = useQuery("listMessages") || [];
    const generateUploadUrl = useMutation("sendMessage:generateUploadUrl");
    const sendImage = useMutation("sendMessage:sendImage");
  
    const imageInput: any = useRef(null);
    const [selectedImage, setSelectedImage]: any = useState(null);
  
    const [name] = useState(() => "User " + Math.floor(Math.random() * 10000));

    async function handleSendImage(event: { preventDefault: () => void; }) {
      event.preventDefault();
      setSelectedImage(null);
      imageInput.current['value'] = ""; 
  
      // Step 1: Get a short-lived upload URL
      const postUrl = await generateUploadUrl();
      // Step 2: POST the file to the URL
      const result = await fetch(postUrl, {
        method: "POST",
        headers: { "Content-Type": selectedImage? selectedImage['type'] : "none"},
        body: selectedImage,
      });
      const { storageId } = await result.json();
      // Step 3: Save the newly allocated storage id to the messages table
      await sendImage(storageId, name, postUrl);
    }
    return (
      <div className="flex flex-col col-span-3 m-10 ">
        <ul>
        <div className="flex flex-grow pl-40 pr-40 ">
          <Image loader={()=> messages[messages.length] ? messages[1].url:"/images/pichart.png"} src={messages[1] ? messages[1].url :  "/images/grazepro.png"} height="1000" width="1000" alt="uploaded"/>
        </div>
    <div className="m-5">
        <form onSubmit={handleSendImage}>
            <input
            type="file"
            accept="image/*"
            ref={imageInput}
            onChange={event => setSelectedImage(event.target.files ? event.target.files[0]: undefined)}
            className="ms-2 btn btn-primary"
            disabled={selectedImage??false}
            />
            <input type="submit" value="Add Image" disabled={!selectedImage} />
        </form>
    </div>
        <div className="overflow-scroll">
          {messages.map(message=> (
            <li key={message._id.toString()}>
              <span>{message.author}:</span>
              
                <Image loader={() => message.url} src={message.url as string} height="300" width="300" alt="uploaded Farm Pic"/>
              
              <span>{new Date(message._creationTime).toLocaleTimeString()}</span>
            </li>
          ))}
    </div>
        </ul>
        
        
      </div>
    );
}