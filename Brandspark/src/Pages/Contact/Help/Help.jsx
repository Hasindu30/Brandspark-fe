import React,{useState} from 'react'
import '././Help.css'
import Emnavbar from '../../../Components/Emnavbar/Emnavbar'


const Help = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add your logic to handle the form submission
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      message: ''
    }); // Reset the form fields
  };
  return (
    <div>
      <Emnavbar/>
      <div className="helpheader">
       <h1>Brandspark Help Community</h1>
       <p>Get best Suggestions and Responses from the Brandspark team</p>
      </div>
      
      <div className="message-form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email Address"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Type your message here..."
            required
          />
          <button type="submit">Send</button>
        </form>
      </div>

      
    </div>
  )
}

export default Help
