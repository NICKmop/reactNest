import axios from "axios";
import { useEffect, useState } from "react";

function LandingPage() {
    const [meet, setMeet] = useState("");

    useEffect(() => {
        // backEnd 호출 -> proxy로 인한 5173 3000 
        // URL : http://localhost:3000/api/hello
        axios.get('/api/hello')
            .then(response => setMeet(response.data));
    }, []);

    return (
        <div>
            tooooooo {meet}
        </div>
    )
};

export default LandingPage;
