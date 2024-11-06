import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { name } from '../constants';
import { motion } from "framer-motion";
import Background from './Background';
import Footer from './Footer';



import '../App.css';
import { services } from '../constants';
import ButtonLink from './ButtonLink';




const ServiceCard = ({ service }) => (
  <div className='sm:w-[250px] w-full'>
    <div
      className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
      <div
        className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        style={{ background: '#151030' }}>
        <img
          src={service.icon}
          alt='some_icon'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {service.title}
        </h3>
      </div>
    </div>
  </div>
);




const Home = () => {

	const ref = useRef(0);
	const [text, setText] = useState('');

	useEffect(() => {
		const interval = setInterval(() => {
			if (ref.current < name.length) {
				ref.current++;
				setText(() => text + name[ref.current - 1]);
			}
		}, 20);
		return () => clearInterval(interval);
	}, [text]);

	return (
		<div className='area relative z-0 bg-black w-screen h-screen'>
			<ul class="circles">
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
<div className='hero relative h-[calc(100vh)] flex justify-center items-center text-white' id='hero'>
    <div className='pt-4 h-auto max-w-4xl w-full backdrop-blur-sm rounded-3xl flex flex-col justify-center items-center text-center mx-4'>
        <h1 className='text-[2.5rem] font-extrabold mt-2'>
            ACM SIGCHI <span className='text-yellow-200 font-extrabold'> IIT KANPUR STUDENT CHAPTER</span>
        </h1>
        <p className='mt-5 text-xl'>{text}</p>
    </div>      
</div>

			<div>

			<div className='bg-black h-full w-full text-white sm:flex sm:justify-around about  py-30 overflow-x-hidden pb-10' id='about'>
			<div className='flex flex-col justify-around'>
				<div className='sm:px-16 px-2'>
				<h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>About Us</h2>
				<p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'> The ACM SIGCHI IIT Kanpur chapter is a student-led initiative at the Indian Institute of Technology
                    Kanpur focused on
                    Human-Computer Interaction (HCI). We are an interdisciplinary community of students and faculty
                    focused on making human-computer interaction more
                    accessible and intuitive. We organize various activities such as conferences, seminars,
                    workshops, and
                    networking events throughout the year. The chapter comprises students with diverse backgrounds
                    including AI/ML, AR/VR,
                    design, computer science, robotics, electrical engineering, and more. We aim to leverage
                    technology for the betterment
                    of humanity under the mentorship of <a className='text-green-300 hover:text-green-500 duration-300' href='https://www.acm.org/' target='_blank'>ACM (Association for Computing Machinery) </a>
					and <a className='text-green-300 hover:text-green-500 duration-300' href='https://sigchi.org/' target='_blank'>SIGCHI ( Special Interest Group on Computer-Human Interaction ) </a>
                    While based out of IIT Kanpur, the chapter extends invitation to collaborate on anyone who is
                    interested in HCI and
                    wishes to develop real world solutions using computing technologies.
					</p>
				
				<div className="flex justify-left items-center space-x-4">
				<ButtonLink
					url='https://www.acm.org/'
					text='← Visit ACM → '
					padding={`p-3`}
				/>
				<ButtonLink
					url='https://sigchi.org/'
					text='← Visit SIGCHI→'
					padding={`p-3`}
				/>
				</div>


				</div>
				
				<div className='mt-20 flex justify-center flex-wrap gap-7'>
					
				{services.map((service) => (
					<ServiceCard service={service} />
				))}
				</div>
			</div>
			</div>
		</div>



			<Footer/>
		</div>	


		
	);
}

export default Home;