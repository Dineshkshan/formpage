import * as yup from 'yup';
const phone = /[0-9]{10}$/

const validation=yup.object({
name:yup.string()
.required('*Required*')
.min(4,'*Minimum 4 characters required*')
.max(8,'*Maximum lenght is 8 characters*'),
email:yup.string()
.required('*Required*')
.email(),
mobile:yup.string()
.matches(phone,'*Enter valid phone number*'),
city:yup.string()
.min(4,'*Enter minimum 4 characters*'),
country:yup.string()
.min(4,'*Enter minimum 4 characters*'),
state:yup.string()
.min(4,'*Enter minimum 4 characters*'),
message:yup.string()
.min(10,'*Enter minimum 10 characters*')
})

export default validation