import { useState } from 'react'
import ServiceCard from '../ServiceCon/ServiceCard'
import ServiceTabs from '../ServiceCon/ServiceTabs'
import Layout from '../Layout/Layout'
// const services = [
//   {
//     name: "Rohan Mehta",
//     skills: "Graphic Design, Logo Creation, Adobe Illustrator",
//     duration: "1 hr",
//     price: 4
//   },
//   {
//     name: "Meera Iyer",
//     skills: "Classical Indian Dance (Bharatanatyam) and Cultural History",
//     duration: "1 hr",
//     price: 4
//   },
//   {
//     name: "Jessica Carter",
//     skills: "Content Writing, Blog Writing, and Copyediting",
//     duration: "1 hr",
//     price: 4
//   },
//   {
//     name: "Michael Harris",
//     skills: "Photography (Portrait and Landscape), Adobe Lightroom",
//     duration: "1 hr",
//     price: 4
//   },
//   {
//     name: "Priya Kapoor",
//     skills: "Yoga and Meditation Instruction",
//     duration: "1 hr",
//     price: 4
//   },
//   {
//     name: "Ankit Rao",
//     skills: "Web Development (HTML, CSS, JavaScript), WordPress Setup",
//     duration: "1 hr",
//     price: 4
//   }
// ]


const services = [
    {
      name: "Rohan Mehta",
      skills: "Graphic Design, Logo Creation, Adobe Illustrator",
      duration: "1 hr",
      price: 4,
      category: "Personal Growth"
    },
    {
      name: "Meera Iyer",
      skills: "Classical Indian Dance (Bharatanatyam) and Cultural History",
      duration: "1 hr",
      price: 4,
      category: "Personal Growth"
    },
    {
      name: "Jessica Carter",
      skills: "Content Writing, Blog Writing, and Copyediting",
      duration: "1 hr",
      price: 4,
      category: "Personal Growth"
    },
    {
      name: "Michael Harris",
      skills: "Photography (Portrait and Landscape), Adobe Lightroom",
      duration: "1 hr",
      price: 4,
      category: "Personal Growth"
    },
    {
      name: "Priya Kapoor",
      skills: "Yoga and Meditation Instruction",
      duration: "1 hr",
      price: 4,
      category: "Career Ambitions"
    },
    {
      name: "Ankit Rao",
      skills: "Web Development (HTML, CSS, JavaScript), WordPress Setup",
      duration: "1 hr",
      price: 4,
      category: "Career Ambitions"
    }
  ];
  

// export default function Services() {
//   const [activeTab, setActiveTab] = useState("All Services")

//   return (
//     <Layout>

   
//     <div className="min-h-screen bg-gradient-to-b from-teal-50 to-teal-100">
      
//       <main className="max-w-7xl mx-auto px-6 py-12">
//         <h1 className="text-6xl font-bold text-center my-16">SERVICES</h1>
//         <ServiceTabs activeTab={activeTab} onTabChange={setActiveTab} />
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service) => (
//             <ServiceCard key={service.name} {...service} />
//           ))}
//         </div>
//       </main>
//     </div>

//     </Layout>
//   )
// }

export default function Services() {
  const [activeTab, setActiveTab] = useState("All Services");

  // Filter services based on activeTab
  const filteredServices = activeTab === "All Services" 
    ? services 
    : services.filter((service) => service.category === activeTab);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-teal-50 to-teal-100">
        <main className="max-w-7xl mx-auto px-6 py-12">
          <h1 className="text-6xl font-bold text-center my-16">SERVICES</h1>
          <ServiceTabs activeTab={activeTab} onTabChange={setActiveTab} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <ServiceCard key={service.name} {...service} />
            ))}
          </div>
        </main>
      </div>
    </Layout>
  );
}
