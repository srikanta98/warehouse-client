import { useEffect, useState } from "react"

const useToken = user =>{
    const [token, setToken] = useState('');
    useEffect( () =>{
        const email = user?.user?.email;
        const currentUser = {email: email};
        if(email){
            fetch(`https://tranquil-taiga-14357.herokuapp.com/user/${email}`, {
                method:'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body:JSON.stringify(currentUser)
            })
            .then(res=>res.json())
            .then(data => {
                console.log('data inside useToken', data);
                const accessToken = data.token;
                localStorage.setItem('accessToken', accessToken);
                setToken(accessToken);
            })
        }

    }, [user]);
    return [token];
//     https://i.ibb.co/w7frx85/pop1.png
// https://i.ibb.co/4RHrXTg/pop-2.png
// https://i.ibb.co/HPXKmMZ/pop4.png
// https://i.ibb.co/TvpHR07/pop-key.png
// https://i.ibb.co/FJyTLnd/pop6-grapics.png
// https://i.ibb.co/wCd3Xqn/5.png
}

export default useToken;