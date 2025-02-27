import Image from "next/image";
import axios from "axios";

//this function hit the backend
async function getUserData(){
 // await new Promise((r) => setTimeout(r,5000))
  const response = await axios.get("http://localhost:3000/api/user")
  return response.data;
}


//
//creating  it the async component
export default async function Home() {
  const userDetails = await getUserData();  //this will fetch the details
  return (
    <div className="flex flex-col justify-center h-screen">
    <div className="flex justify-center">
        <div className="border p-8 rounded">
            <div>
                Name:{userDetails?.name}
            </div>
            
           Email : {userDetails?.email}
        </div>
    </div>
</div>
  );
}
