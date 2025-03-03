# KIRTI STEMSAGO
![Alt text](https://web-kirti.vercel.app/assets/kirti_stemsago-DMnEF3jX.png)
<br>

You Git Clone The project: 
 >git clone https://github.com/Tri69/KIRTI_STEMSAGO.git

**Web Official
>https://web-kirti.vrcel.com<br>
>https://smkn1gombong.sch.id


# DOKUMENTASI BACKEND API - SERVER
*Technology BackEnd:
1. Express JS
2. MongoDB Atlas

Untuk Pull Project Backend:
```git
>git clone  https://github.com/Tri69/KIRTI_STEMSAGO.git
```

A. End Point Rest Api untuk Fetch
1. Method GET://(List User) : ```
   https://api-server-five-beta.vercel.app/api/v2 ```
2. Method GET://(List Form) : ```https://api-server-five-beta.vercel.app/api/v2/getUser ```
3. Method POST://(Form Register) : ``` https://api-server-five-beta.vercel.app/api/v2/postUser```
4. Method PUT ://(Edit User) : ```https://api-server-five-beta.vercel.app/api/v2/updateUser```
5. Method DELETE://(Hapus User):```https://api-server-five-beta.vercel.app/api/v2/deleteUser```

B. Example Penggunaan<br>
a. JavaScript Native / Murni<br>
`index.js`
```js
const EndPoint = "https://api-server-five-beta.vercel.app/api/v2";

async function FetchApi(url) {
  const data = await fetch(url);
  const resultData = await data.json();
  console.log(resultData)
}
FetchApi(EndPoint);
```
b. ReactJS / NextJS<br>
`FetchData.jsx`
```js
import React, {useState, useEffect} from 'react';

const FetchData = ()=> {
  const [datas, setDatas] = useState([]);
  const url = "https://api-server-five-beta.vercel.app/api/v2"
  const FetchApi = () => {
   const data = await fetch(url);
   const resultData = await data.json();
   setDatas(resultData)
 }
useEffect(() => {
  FetchData
 }, [])
}
  return(
 <>
  <div>
   {datas.map(key, data) => (
   
)}
  </div>
 </>
 )
}
```
