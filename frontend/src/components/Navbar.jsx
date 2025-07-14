import { Link, useLocation } from "react-router"
import useAuthUser from "../hooks/useAuthUser"
import { BellIcon, Codesandbox, LogOutIcon } from "lucide-react"
import ThemeSelector from "./ThemeSelector"
import useLogout from "../hooks/useLogout"
import { getFriendRequest } from "../lib/api"
import {React,useEffect,useState} from "react";
import { useQuery } from "@tanstack/react-query"


const Navbar = () => {
  const {authUser} = useAuthUser()
  const location = useLocation()
  const isChatPage=location.pathname?.startsWith("/chat");

  // const [friendRequestCount, setFriendRequestCount] = useState(0);
  // useEffect(()=>{
  //   async function fetchFriendRequests(){
  //     try {
  //       const data = await getFriendRequest();
  //       setFriendRequestCount(data.incomingRequests.length);
  //     } catch (error) {
  //       console.error("Error fetching friend requests:", error);
  //     }
  //   }
  //   fetchFriendRequests();
  //   },[]);
  const { data: friendRequests, isLoading, error } = useQuery({
  queryKey: ['friendRequests'],
  queryFn: getFriendRequest,
})


const incomingCount = friendRequests?.incomingRequests?.length || 0;
const acceptedCount = friendRequests?.acceptedRequests?.length || 0;

const friendRequestCount = incomingCount + acceptedCount;



  // const queryClient = useQueryClient();
  // const {mutate:logoutMutation} = useMutation({
  //   mutationFn:logout,
  //   onSuccess: ()=> queryClient.invalidateQueries({queryKey:['authUser']})
  // })

  const {logoutMutation} = useLogout()
  return (
    <nav className="bg-base-200 border-b border-base-300 sticky top-0 z-30 flex items-center" style={{height: '76px'}}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end w-full">
          {isChatPage&&(
            <Link to="/" className=''>
            <div className="flex items-center gap-2.5">
             <Codesandbox className="text-primary w-9 h-9" />
             <span className='text-2xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-wider'>
                Chativerse
             </span>
            </div>
            </Link>
          )}
          <div className="flex items-center gap-3 sm:gap-4">
            <Link to="/notifications">
              <button className="btn btn-ghost btn-circle relative">
                <BellIcon className="h-6 w-6 text-base-content opacity-70"></BellIcon>
                {friendRequestCount>0 && (
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full transform translate-x-1/2 -translate-y-1/2">
                    {friendRequestCount}
                  </span>
                )}
              </button>
            </Link>
          </div>
          <ThemeSelector/>

          <div className="avatar">
            <div className="w-9 rounded-full" >
              <img src={authUser?.profilePic} alt="User avatar" rel="nonreferre"/>
            </div>
          </div>

          <button className="btn btn-ghost btn-circle" onClick={logoutMutation}>
            <LogOutIcon className="h-6 w-6 text-base-content opacity-70"/>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar