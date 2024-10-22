import ProfileCard from './ProfileCard'
import './App.css'
import Carousel from './Carousel';

function App() {
  const profile = [
    {
      name: "Vansh Chaurasiya",
      bio: "Passionate Web Developer",
      avatar: "/image1.png"
    },
    {
      name: "Yash Mishra",
      bio: "Passion ate",
      avatar: '/image2.png'
    },
    {
      name: "Harshit Shukla",
      bio: "Dil toota aashiq",
      avatar: '/image3.png'
    },
    {
      name: "Aman Agrawal",
      bio: "L**dcoder",
      avatar: '/image4.png'
    },
    {
      name: "Tapasendra Patra",
      bio: "Smashkarter",
    },
    {
      name: "Tamanna",
      bio: "Passionate",
      avatar: '/image5.png'
    },
  ]
  return (
    <>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center'>
      {
        profile.map((data, index) => {
          return (
            <div className='m-4' key={index}>
              <ProfileCard name={data.name} bio={data.bio} avatar={data.avatar} />
            </div>
          );
        })
      }
    </div>
    <Carousel/>
    </>
  )
}

export default App