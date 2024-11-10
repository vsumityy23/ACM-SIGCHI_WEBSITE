// ProjectDetails.jsx
import React from "react";
import Footer from "./Footer";
import { useParams, useNavigate } from "react-router-dom";
import { project } from "../constants"; // Assuming project data is imported from constants.js
import ButtonLink from "./ButtonLink";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
// Modal.setAppElement("#root");

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const selectedProject = project.find((item) => item.id === parseInt(id));

  if (!selectedProject) {
    return <p className="text-white">Project not found</p>;
  }

  
  const renderMemberCard = (member, index) => (
    <div
      key={index}
      className="rounded-[20px] py-5 px-8 min-h-[280px] w-full sm:w-[260px] md:w-[280px] lg:w-[300px] flex justify-evenly items-center flex-col"
      style={{ background: "#151030" }}
    >
      <img
        src={member.image}
        alt={`${member.name} Photo`}
        className="rounded-full w-48 h-48 mx-auto mb-4 object-cover"
      />
      <h3 className="text-xl font-semibold text-white">{member.name}</h3>
      <p className="text-gray-400">{member.role}</p>
      <hr className="w-full my-4 border-gray-600" />
      <div className="flex justify-center space-x-4">
        {/* LinkedIn Icon */}
        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-white hover:text-blue-400"
          />
        </a>
        {/* GitHub Icon */}
        <a href={member.github} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faGithub}
            className="text-white hover:text-blue-400"
          />
        </a>
       
      </div>
    </div>
  );

  return (
    <div className="bg-black">
      <div className="flex flex-wrap gap-7 justify-center items-center text-white mt-5">
        <div className="pt-12 sm:px-16 text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold mt-2">
            {selectedProject.title}
          </h2>
        </div>

        {/* Image Section */}
        <div className="w-full flex justify-center">
          <img
            className="max-w-2xl w-full h-auto rounded-lg"
            src={selectedProject.image}
            alt={selectedProject.title}
          />
        </div>

        {/* Long Description Section */}
        <div className="max-w-3xl text-lg text-center px-4 mb-5">
          <p>{selectedProject.long_description}</p>
        </div>

        <div className="w-full flex justify-center items-center space-x-4 mb-3">
          <ButtonLink
            url={selectedProject.git}
            text="Visit Project"
            padding={`p-3`}
          />
        </div>


     <div className="bg-black w-full text-white pt-4 mb-10 overflow-hidden">
      {/* Core Team Section */}
      <section >
        <h2 className="text-3xl font-extrabold text-center mb-10"> Meet the Project Members</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {selectedProject.coreMembers.map((member, index) => renderMemberCard(member, index))}
        </div>
      </section>
      </div>



      </div>
      <Footer />
    </div>
  );
};

export default ProjectDetails;



















// Modal.setAppElement('#root');

// const Team = () => {
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [selectedMember, setSelectedMember] = useState(null);

//   const openModal = (member) => {
//     setSelectedMember(member);
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//     setSelectedMember(null);
//   };

//   const renderMemberCard = (member, index) => (
//     <div
//       key={index}
//       className="rounded-[20px] py-5 px-8 min-h-[280px] w-full sm:w-[260px] md:w-[280px] lg:w-[300px] flex justify-evenly items-center flex-col"
//       style={{ background: '#151030' }}
//     >
//       <img
//         src={member.image}
//         alt={`${member.name} Photo`}
//         className="rounded-full w-48 h-48 mx-auto mb-4 object-cover"
//       />
//       <h3 className="text-xl font-semibold text-white">{member.name}</h3>
//       <p className="text-gray-400">{member.role}</p>
//       <hr className="w-full my-4 border-gray-600" />
//       <div className="flex justify-center space-x-4">
//         {/* LinkedIn Icon */}
//         <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
//           <FontAwesomeIcon icon={faLinkedin} className="text-white hover:text-blue-400" />
//         </a>
//         {/* GitHub Icon */}
//         <a href={member.github} target="_blank" rel="noopener noreferrer">
//           <FontAwesomeIcon icon={faGithub} className="text-white hover:text-blue-400" />
//         </a>
//         {/* Description Icon (opens modal) */}
//         <button onClick={() => openModal(member)}>
//           <FontAwesomeIcon icon={faIdCard} className="text-white hover:text-blue-400" />
//         </button>
//       </div>
//     </div>
//   );

//   return (
//     <div className="bg-black w-full text-white pt-4 overflow-hidden">


//       {/* Core Team Section */}
//       <section className="py-8">
//         <h2 className="text-3xl font-extrabold text-center mb-6">Core Team</h2>
//         <div className="flex flex-wrap justify-center gap-6">
//           {coreMembers.map((member, index) => renderMemberCard(member, index))}
//         </div>
//       </section>



//       {/* Modal for Member Details */}
//       {selectedMember && (
//         <Modal
//           isOpen={modalIsOpen}
//           onRequestClose={closeModal}
//           contentLabel="Member Description"
//           className="bg-white rounded-lg p-8 mx-auto my-16 w-[90%] max-w-[500px] relative transition-transform transform duration-500 ease-in-out animate-slideDown"
//           overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center"
//         >
//           <button
//             className="absolute top-2 right-2 text-black text-3xl transition-transform transform hover:scale-110"
//             onClick={closeModal}
//           >
//             &times;
//           </button>
//           <h2 className="text-xl font-bold text-center mb-4">
//             {selectedMember.name}
//           </h2>
//           <div className="flex justify-center mb-4">
//             <img
//               src={selectedMember.image}
//               alt={`${selectedMember.name} Photo`}
//               className="rounded-full w-48 h-48 object-cover"
//             />
//           </div>
//           <p className="text-center text-gray-700">
//             {selectedMember.description}
//           </p>
//         </Modal>
//       )}
//       <Footer />
//     </div>
//   );
// };


