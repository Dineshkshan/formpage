import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useFormik } from "formik";
import validation from "./validation";

function App() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      mobile: '',
      country: '',
      city: '',
      state: '',
      message: ''
    },
    validationSchema: (validation),
    onSubmit: (values) => {
      console.log(values);
    }
  })
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="container mt-4">
        <div className="jumbotron">
          <div className="form-group">
            <label>Name</label>
            <input
              type='text'
              className="form-control"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            {formik.errors.name ? (<div className="text-danger">{formik.errors.name}</div>) : null}
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type='email'
              className="form-control"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            {formik.errors.email ? (<div className="text-danger">{formik.errors.email}</div>) : null}
          </div>
          <div className="form-group">
            <label>Mobile number</label>
            <input
              type='tel'
              className="form-control"
              name="mobile"
              value={formik.values.mobile}
              onChange={formik.handleChange}
            />
            {formik.errors.mobile ? (<div className="text-danger">{formik.errors.mobile}</div>) : null}
          </div>
          <div className="form-group">
            <label>Country</label>
            <input
              type='text'
              className="form-control"
              name="country"
              value={formik.values.country}
              onChange={formik.handleChange}
            />
            {formik.errors.country ? (<div className="text-danger">{formik.errors.country}</div>) : null}

          </div>
          <div className="form-group">
            <label>City</label>
            <input
              type='text'
              className="form-control"
              name="city"
              value={formik.values.city}
              onChange={formik.handleChange}
            />
            {formik.errors.city ? (<div className="text-danger">{formik.errors.city}</div>) : null}

          </div>
          <div className="form-group">
            <label>State</label>
            <input
              type='text'
              className="form-control"
              name="state"
              value={formik.values.state}
              onChange={formik.handleChange}
            />
            {formik.errors.state ? (<div className="text-danger">{formik.errors.state}</div>) : null}

          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              type='text'
              className="form-control"
              name="message"
              value={formik.values.message}
              onChange={formik.handleChange}
              rows="5"
              cols="40"
            />
            {formik.errors.message ? (<div className="text-danger">{formik.errors.message}</div>) : null}

          </div>
          <div>
            <Button type="submit">Submit</Button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default App;
