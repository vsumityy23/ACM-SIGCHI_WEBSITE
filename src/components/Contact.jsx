import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID, EMAIL_JS_PUBLIC_KEY } from "../constants";
import Footer from "./Footer";

const Contact = () => {
	const formRef = useRef();
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		const { target } = e;
		const { name, value } = target;

		setForm({
			...form,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);

		// cleaning the form data
		const username = form.name.trim();
		const user_email = form.email.trim();
		const user_message = form.message.trim();

		if (username === '' || user_email === '' || user_message === '') {
			setLoading(false);
			toast.error("Please fill all the fields.", {
				position: 'bottom-right',
			});
			return;
		}

		emailjs
			.send(
				EMAIL_JS_SERVICE_ID,
				EMAIL_JS_TEMPLATE_ID,
				{
					from_name: username,
					to_name: "SUMIT",
					reply_to: user_email,
					to_email: "hci.iitk@gmail.com",
					message: user_message,
				},
				EMAIL_JS_PUBLIC_KEY
			)
			.then(
				() => {
					setLoading(false);
					toast.success("Message sent successfully!", {
						position: 'bottom-right',
					});
					setForm({
						name: "",
						email: "",
						message: "",
					});
				},
				(error) => {
					setLoading(false);
					console.error(error);
					toast.error("Uh, oh! Something went wrong. Please try again later.", {
						position: 'bottom-right',
					});
				}
			);
	};

	return (
		<div className='relative z-0 bg-black min-h-screen flex flex-col justify-between mt-12'>
			<div className='text-white contact flex-grow overflow-x-hidden pt-12 mt-8' id='contact'>
				<div className='z-10 w-full sm:w-[650px] m-auto p-8 rounded-2xl'>
					<p className='font-light'>REACH US</p>
					<h2 className='text-5xl font-extrabold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-pink-500'>
						Contact.
					</h2>
					<form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
						<label className='flex flex-col'>
							<span className='font-medium mb-4'>Your Name</span>
							<input
								type='text'
								name='name'
								value={form.name}
								onChange={handleChange}
								placeholder="Enter your name"
								className='py-4 px-6 rounded-lg outline-none border-none font-medium bg-gray-900'
								required
							/>
						</label>
						<label className='flex flex-col'>
							<span className='font-medium mb-4'>Your email</span>
							<input
								type='email'
								name='email'
								value={form.email}
								onChange={handleChange}
								placeholder="Ex:abc@gmail.com"
								className='py-4 px-6 rounded-lg font-medium bg-gray-900'
								required
							/>
						</label>
						<label className='flex flex-col'>
							<span className='font-medium mb-4'>Your Message</span>
							<textarea
								rows={7}
								name='message'
								value={form.message}
								onChange={handleChange}
								placeholder='Do you have anything to say?'
								className='py-4 px-6 rounded-lg outline-none border-none font-medium bg-gray-900'
								required
							/>
						</label>

						<button
							type='submit'
							className='py-3 px-8 rounded-xl text-center outline-none w-fit font-bold shadow-md bg-gray-900 text-white'
						>
							{loading ? "Sending..." : "Send"}
						</button>
					</form>
				</div>

				{/* Google Group Section */}
				<div className='mt-12 flex flex-col items-center text-center'>
					<h3 className='text-3xl font-bold text-gray-300'>Join Our Google Group</h3>
					<p className='mt-2 text-gray-400'>Stay updated with the latest discussions and events.</p>
					<a
						href="https://groups.google.com/g/iitksigchi"
						target="_blank"
						rel="noopener noreferrer"
						className='mt-4 inline-block py-3 px-8 rounded-xl font-semibold bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg transition-all duration-300  hover:scale-105 mb-5 '
					>
						Join Now
					</a>
				</div>

				<ToastContainer />
			</div>
			<Footer />
		</div>
	);
};

export default Contact;
