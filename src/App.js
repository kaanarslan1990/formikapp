import "./App.css";
import { useFormik } from "formik";

function App() {
   const {handleSubmit, handleChange, values} = useFormik({
      initialValues: {
        firstName: "Khan",
        lastName: "Lion",
        email: "khnlion@mail.com",
        gender: "male",
        hobies: [],
        country: "Turkey",
      },
      onSubmit: values => {
        console.log(values);
      },
    });

  return (
    <div className="App">
      <h1>Sign Up</h1>    
          <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
            />

            <br />
            <br />

            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
            />

            <br />
            <br />

            <label htmlFor="email">Email</label>
            <input type="email" name="email" onChange={handleChange} />

            <br />
            <br />

            <span>Male</span>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={handleChange}
              checked={values.gender === "male"}
            />
            <span>Female</span>
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={handleChange}
              checked={values.gender === "female"}
            />

            <br />
            <br />
            <div>
              Football
              <input
                type="checkbox"
                name="hobies"
                value="Football"
                onChange={handleChange}
              />
            </div>
            <div>
              Cinema
              <input
                type="checkbox"
                name="hobies"
                value="Cinema"
                onChange={handleChange}
              />
            </div>
            <div>
              Theatre
              <input
                type="checkbox"
                name="hobies"
                value="Theatre"
                onChange={handleChange}
              />
            </div>

            <br />
            <br />

            <select
              name="country"
              values={values.country}
              onChange={handleChange}
            >
              <option value="tr">Turkey</option>
              <option value="usa">USA</option>
              <option value="en">England</option>
            </select>

            <br />
            <br />
            <button type="submit">Submit</button>
            <br />
            <br />

            {JSON.stringify(values)}
          </form>
       
    </div>
  );
}

export default App;
