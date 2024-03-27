import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [name, setName] =useState()
  const [phone, setPhone] = useState()
  const [address, setAddress] = useState()
  const [city, setCity] = useState()
  const [state, setState]= useState()
  const [date, setDate]= useState()
  const [department, setDepartment]= useState()
  const [course, setCourse]= useState()

  return (
    <div className='d-flex justify content-center align-items-center bg-secondary vh-100'>
      <div className='bg-grey p-3 rounded w-27'>
        <h2>Register</h2>
        <form onSubmit={Handlesubmit}>
          <div className='mb-3'>
            <label htmlFor='Name'>
              <strong>Name</strong>
            </label>
            <input 
            type={text}
            placeholder='Enter Name'
            name='name'
            className='form-control rounded 0'
            onChange={(e) => setName(e.target.value)}
            />

            <div className='mb-3'>
              <label htmlFor='Phone'>
                <strong>Phone</strong>
              </label>
              <input
              type={number}
              placeholder= 'Enter Number'
              name='number'
              className='form-control rounded-0'
              onChange={(e) => setPhone(e.target.value)}
              />

            </div>

            <div className='mb-3'>
              <label htmlFor='Address'>
                <strong>Address</strong>
              </label>
              <input
              type={text}
              placeholder= 'Enter Address'
              name='address'
              className='form-control rounded-0'
              onChange={(e) => setAddress(e.target.value)}
              />

            </div>

            <div className='mb-3'>
              <label htmlFor='City'>
                <strong>City</strong>
              </label>
              <input
              type={text}
              placeholder= 'Enter City'
              name='City'
              className='form-control rounded-0'
              onChange={(e) => setCity(e.target.value)}
              />

            </div>

            <div className='mb-3'>
              <label htmlFor='State'>
                <strong>State</strong>
              </label>
              <input
              type={text}
              placeholder= 'Enter State'
              name='number'
              className='form-control rounded-0'
              onChange={(e) => setState(e.target.value)}
              />

            </div>

            <div className='mb-3'>
              <label htmlFor='Date'>
                <strong>Date</strong>
              </label>
              <input
              type={number}
              placeholder= 'Enter Date'
              name='date'
              className='form-control rounded-0'
              onChange={(e) => setDate(e.target.value)}
              />

            </div>

            <div className='mb-3'>
              <label htmlFor='Department'>
                <strong>Department</strong>
              </label>
              <input
              type={text}
              placeholder= 'Enter Department'
              name='dept'
              className='form-control rounded-0'
              onChange={(e) => setDepartment(e.target.value)}
              />

            </div>

            <div className='mb-3'>
              <label htmlFor='Course'>
                <strong>Phone</strong>
              </label>
              <input
              type={text}
              placeholder= 'Enter Course'
              name='course'
              className='form-control rounded-0'
              onChange={(e) => setCourse(e.target.value)}
              />

            </div>

            <div>
              <button type='submit' className='btn btn-success w-100 rounded-0'>
                View Contacts
              </button>
            </div>


          </div>
        </form>

      </div>

    </div>
    
  )
}

export default App
