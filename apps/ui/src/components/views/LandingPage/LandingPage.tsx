import { useEffect, useState } from "react";

function LandingPage() {
    const [meet, setMeet] = useState("");

    useEffect(() => {
        // backEnd 호출 -> proxy로 인한 5173 3000 
        // URL : http://localhost:3000/api/hello
        // axios.get('/api/hello')
        //     .then(response => setMeet(response.data));
    }, []);

    return (
        <div className="wrapper">
            <div className="items">
            <div className="item" tabIndex={0} style={{backgroundImage: 'url(https://e22u.short.gy/KTU286)'}}></div>
            <div className="item" tabIndex={0} style={{backgroundImage: 'url(https://e22u.short.gy/SMBrES)'}}></div>
            <div className="item" tabIndex={0} style={{backgroundImage: 'url(https://e22u.short.gy/f8spJ8)'}}></div>
            <div className="item" tabIndex={0} style={{backgroundImage: 'url(https://e22u.short.gy/SwM7dn)'}}></div>
            <div className="item" tabIndex={0} style={{backgroundImage: 'url(https://e22u.short.gy/8Oipim)'}}></div>
            <div className="item" tabIndex={0} style={{backgroundImage: 'url(https://e22u.short.gy/BWYQgv)'}}></div>
            <div className="item" tabIndex={0} style={{backgroundImage: 'url(https://e22u.short.gy/KzNDfr)'}}></div>
            <div className="item" tabIndex={0} style={{backgroundImage: 'url(https://e22u.short.gy/ne5nuX)'}}></div>
            <div className="item" tabIndex={0} style={{backgroundImage: 'url(https://e22u.short.gy/cwZrVj)'}}></div>
            <div className="item" tabIndex={0} style={{backgroundImage: 'url(https://e22u.short.gy/Xvf2a1)'}}></div>
            <div className="item" tabIndex={0} style={{backgroundImage: 'url(https://e22u.short.gy/pCrIJq)'}}></div>
            <div className="item" tabIndex={0} style={{backgroundImage: 'url(https://e22u.short.gy/mSLCrl)'}}></div>
            <div className="item" tabIndex={0} style={{backgroundImage: 'url(https://e22u.short.gy/EwQcy5)'}}></div>
            </div>
        </div>
    )
};

export default LandingPage;
