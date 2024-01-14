import React from "react";
import { Formik } from "formik";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Form = ({ id }) => {
	emailjs.init("V3bgPswcy43U_2n20");

	return (
		<section
			id={id}
			className="text-white font-lato bg-mate3 relative py-4 w-full  pb-16 lg:pb-16 md:h-auto">
			<div className="container px-5 mx-auto w-full">
				<div className="flex flex-col text-center w-full mb-12">
					<h1 className="text-3xl mb-4 text-white font-semibold">Contacto</h1>
				</div>
				<Formik
					validate={(value) => {
						let errors = {};

						if (!value.nombre) {
							errors.nombre = "Por favor ingresa tu nombre";
						} else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(value.nombre)) {
							errors.nombre = "El nombre solo puede contener letras y espacios";
						}

						if (!value.apellido) {
							errors.apellido = "Por favor ingresa tu apellido";
						} else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(value.apellido)) {
							errors.apellido =
								"El apellido solo puede contener letras y espacios";
						}

						if (!value.email) {
							errors.email = "Por favor ingresa tu email";
						} else if (
							!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
								value.email
							)
						) {
							errors.email = "El email ingresado no es valido";
						}
						if (!value.mensaje) {
							errors.mensaje = "Por favor ingresa un mensaje";
						}
						return errors;
					}}
					initialValues={{ nombre: "", apellido: "", email: "", mensaje: "" }}
					onSubmit={(values, formikBag) => {
						emailjs.send("service_d7wus6l", "template_4ftsw8k", values);
						try {
							formikBag.resetForm();
							formikBag.setSubmitting(false);
							Swal.fire({
								title: "Enviado",
								icon: "success",
								text: "SU MENSAJE FUE ENVIADO CON EXITO!",
								timer: "4000",
								background: "#3D3E42",
								color: "#FFCC6C",
							});
						} catch (error) {
							formikBag.setSubmitting(false);
							Swal.fire({
								title: "Oops...",
								icon: "error",
								text: "ALGO SALIO MAL DISCULPE LAS MOLESTIAS!",
								timer: "4000",
								background: "#3D3E42",
								color: "#FFCC6C",
							});
						}
					}}>
					{({
						handleSubmit,
						values,
						handleChange,
						handleBlur,
						errors,
						touched,
						isSubmitting,
					}) => (
						<div className="lg:w-1/2 md:w-2/3 mx-auto">
							<form onSubmit={handleSubmit} className="flex flex-wrap -m-2">
								<div className="p-2 w-1/2">
									<div className="relative">
										<label
											htmlFor="nombre"
											className="leading-7 text-sm text-white">
											Nombre
										</label>
										<input
											type="text"
											value={values.nombre}
											onChange={handleChange}
											onBlur={handleBlur}
											id="nombre"
											name="nombre"
											autoComplete="off"
											className="w-full bg-mate bg-opacity-50 rounded-lg border border-gold border-solid focus:border-mate focus:bg-white font-merriweather focus:text-black focus:ring-2 focus:ring-gold text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out capitalize"
										/>
										{errors.nombre && touched.nombre ? (
											<div className="error">{errors.nombre}</div>
										) : null}{" "}
									</div>
								</div>
								<div className="p-2 w-1/2">
									<div className="relative">
										<label
											htmlFor="apellido"
											className="leading-7 text-sm text-white">
											Apellido
										</label>
										<input
											type="text"
											value={values.apellido}
											onChange={handleChange}
											onBlur={handleBlur}
											id="apellido"
											name="apellido"
											autoComplete="off"
											className="w-full bg-mate bg-opacity-50 rounded-lg border border-gold border-solid focus:border-mate focus:bg-white font-merriweather focus:text-black focus:ring-2 focus:ring-gold text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out capitalize"
										/>
										{errors.apellido && touched.apellido ? (
											<div className="error">{errors.apellido}</div>
										) : null}{" "}
									</div>
								</div>
								<div className="p-2 w-full">
									<div className="relative">
										<label
											htmlFor="email"
											className="leading-7 text-sm text-white">
											Email
										</label>
										<input
											type="email"
											value={values.email}
											onChange={handleChange}
											onBlur={handleBlur}
											id="email"
											name="email"
											autoComplete="off"
											className="w-full bg-mate bg-opacity-50 rounded-lg border border-gold border-solid focus:border-mate focus:bg-white font-merriweather focus:text-black focus:ring-2 focus:ring-gold text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
										/>
										{errors.email && touched.email ? (
											<div className="error">{errors.email}</div>
										) : null}
									</div>
								</div>
								<div className="p-2 w-full">
									<div className="relative">
										<label
											htmlFor="mensaje"
											className="leading-7 text-sm text-white">
											Mensaje
										</label>
										<textarea
											value={values.mensaje}
											onChange={handleChange}
											onBlur={handleBlur}
											id="mensaje"
											name="mensaje"
											autoComplete="off"
											className="w-full bg-mate bg-opacity-50 rounded-lg border border-gold border-solid focus:border-mate focus:bg-white font-merriweather focus:text-black focus:ring-2 focus:ring-gold h-48 text-base outline-none text-white py-1 px-3 resize-y leading-6 transition-colors duration-200 ease-in-out"></textarea>
										{errors.mensaje && touched.mensaje ? (
											<div className="error">{errors.mensaje}</div>
										) : null}
									</div>
								</div>
								<div className="p-2 w-full">
									<button
										type="submit"
										disabled={isSubmitting}
										{...(isSubmitting ? "Submitting" : "Submit")}
										className="flex mx-auto mt-20 text-gold bg-transparent border-2 border-gold rounded border-solid py-2 px-20 focus:outline-none text-base font-semibold hover:text-mate hover:bg-gold lg:px-44 md:px-44 md:text-lg lg:text-lg">
										Enviar
									</button>
								</div>
							</form>
						</div>
					)}
				</Formik>
			</div>
		</section>
	);
};

export default Form;
