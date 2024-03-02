import {useFormik} from 'formik'
import * as Yup from 'yup'

function App() {
const formik=useFormik({
  initialValues:{
    username:"",
    email:"",
    password:""
  },
  validationSchema:Yup.object({
    username:Yup.string()
                 .max(8,"cannont exceed 10 charectors").required("This field is mandatory"),

    email:Yup.string()
                .required("This field is mandatory"),

    password:Yup.string()
                  .min(6,"password shoud have minmum 6 characters")
                  .max(12,"Password should have maximun 12 characters")
                  .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@$%*^()])/,"password should contain 1 lowercase,1 uppercase,1 number, 1 speicial symbol")
                  .required("This field is mandatory")
  }),

onSubmit:(values)=>{
  alert(JSON.stringify(values))
}
  }
)
  return (
<div>
<form onSubmit={formik.handleSubmit}>
<label>User Name :</label>
<input type="text" name="username" placeholder='Username' onChange={formik.handleChange} 
values={formik.values.username}></input>
<br></br>
{formik.errors.username && <p style={{color:'red'}}>{formik.errors.username}</p>}

<label>Email :</label>
<input type="Email" name="Email" placeholder='Email'  onChange={formik.handleChange} 
values={formik.values.email}></input>
<br></br>
{formik.errors.email && <p style={{color:'red'}}>{formik.errors.email}</p>}

<label>Password :</label>
<input type="Password" name="Password" placeholder='Password'  onChange={formik.handleChange} 
values={formik.values.password}></input>
<br></br>
{formik.errors.password && <p style={{color:'red'}}>{formik.errors.password}</p>}


<label> Gender :</label>

Male<input type="radio"  name="gender" value="male"></input>
Female<input type="radio"  name="gender" value="female"></input>
Others<input type="radio"  name="gender" value="other"></input>
<br></br>

<button type='Submit'>Submit</button>
</form>
</div>
  
  );
  }
export default App
