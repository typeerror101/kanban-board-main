import { CircleDashed, GalleryVerticalEnd } from "lucide-react"
import { CgDarkMode } from "react-icons/cg";
import { AiOutlineDash } from "react-icons/ai";
import { BsFillExclamationSquareFill } from "react-icons/bs";
import { PiCellSignalFullFill } from "react-icons/pi";
import { PiCellSignalLowFill } from "react-icons/pi";
import { PiCellSignalHighFill } from "react-icons/pi";



const PriorityMappings = {
    0: <AiOutlineDash size={16}/>,
    1: <PiCellSignalLowFill size={16}/>,
    2: <PiCellSignalHighFill size={16}/>,
    3: <PiCellSignalFullFill size={16}/>,
    4: <BsFillExclamationSquareFill size={16}/>,
}

const StatusMappings = {
    'Todo': <CircleDashed size={20} color="blue"/>,
    'In progress': <CgDarkMode size={20} color="#F0AB3D"/>,
    'Backlog': <GalleryVerticalEnd size={20} color="red"/>
}



// eslint-disable-next-line react/prop-types
const UserImage = ({image,isAvailable}) => {


  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <img
        src={image}
        alt="User"
        style={{
          width: '32px', 
          height: '32px', 
          borderRadius: '50%',
          objectFit: 'cover',
          backgroundColor: 'white'
        }}
      />
      { (
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            backgroundColor: isAvailable ? 'green': 'grey',
            border: '2px solid #fff',
          }}
        />
      )}
    </div>
  );
};

const UsersDummy = {
    'usr-1': (isAvailable) => <UserImage image={"https://source.unsplash.com/random/blue"} isAvailable={isAvailable} />,
  'usr-2': (isAvailable) => <UserImage image={"https://source.unsplash.com/random/green"} isAvailable={isAvailable} />,
  'usr-3': (isAvailable) => <UserImage  image={"https://source.unsplash.com/random/red"} isAvailable={isAvailable} />,
  'usr-4': (isAvailable) => <UserImage  image={"https://source.unsplash.com/random/pink "} isAvailable={isAvailable} />,
  'usr-5': (isAvailable) => <UserImage  image={"https://source.unsplash.com/random"} isAvailable={isAvailable} />,
}

const mapSelector = (group,title,priority,taskData) => {
    switch (group) {
        case 'priority':
            return PriorityMappings[priority];
        case 'user':
            return UsersDummy[taskData.user.id](taskData.user.available);

        case 'status':
            return StatusMappings[title]
        
        default:
            break;
    }
}

export {PriorityMappings,StatusMappings,UsersDummy,mapSelector}