import React from "react";

const Photo = ({image, views, downloads, likes, tags, user}) => {
    return(
        <div className="w-100 rounded overflow-hidden shadow-lg p-2 mb-10">
            <img src={image} alt="profile" className="w-full h-40 object-contain"/>
            <div className="px-6 py-4">
                <div className=" font-bold text-purple-500 text-md mb-2">
                    Photo by {user}
                </div>
                <ul>
                    <li>
                        <strong>Views: </strong>
                        {views}
                    </li>
                    <li>
                        <strong>Downloads: </strong>
                        {downloads}
                    </li>
                    <li>
                        <strong>Likes: </strong>
                        {likes}
                    </li>
                </ul>
            </div>

        </div>
    )
}
export default Photo;