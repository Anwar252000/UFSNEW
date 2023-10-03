import * as Yup from 'yup';

// export const contactSchema = Yup.object().shape({
// 	name: Yup.string().required().label('Name'),
// 	email: Yup.string().required().email().label('Email'),
// 	msg: Yup.string().required().min(20).label('Message'),
// });

export const atmProcessingSchema = Yup.object().shape({
	corporationName: Yup.string().required().label('Corporation Name'),
	dba: Yup.string().required().label('Dba'),
	contactName: Yup.string().required().label('Contact Name'),
	email: Yup.string().required().email().label('Email'),
	contactNumber: Yup.string().required().label('Contact Number'),
	address: Yup.string().required().label('Address'),
	city: Yup.string().required().label('City'),
	usState: Yup.string().required().label('US state'),
	zip: Yup.string().required().label('Zip'),
	message: Yup.string().required().min(20).label('Message'),
	existingAtm: Yup.string().required().label('Existing Atm'),
});

export const loginSchema = Yup.object().shape({
	username: Yup.string().required().label('Username'),
	password: Yup.string().required().min(6).label('Password'),
});

export const registerSchema = Yup.object().shape({
	username: Yup.string().required().label('Username'),
	firstName: Yup.string().required().label('First Name'),
	middleName: Yup.string().label('Middle Name'),
	lastName: Yup.string().required().label('Last Name'),
	// emails: Yup.array().of(Yup.string().required().email()),
	email: Yup.string().required().email().label('Email'),
	// contacts: Yup.array(Yup.string().required()).label('Contacts'),
	contact: Yup.string().required().label('Contact'),
	address: Yup.string().required().label('Address'),
	password: Yup.string().required().min(6).label('Password'),
});

export const blogSchema = Yup.object().shape({
	name: Yup.string().required().label('Name'),
	email: Yup.string().required().email().label('Email'),
	subject: Yup.string().required().min(10).label('Subject'),
	msg: Yup.string().required().min(20).label('Message'),
});
