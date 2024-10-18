import '../../styles/ContactUs.css';

function ContactUs() {
  return ( 
    <div className="container contact-container text-white mt-5">
      <span className="border border-light"></span>
      <h3>CONTACT US</h3>
      <p>Fill in the data below</p>
      <div className="mb-3">
        <input type="text" className="form-control" id="fullName" placeholder="Full Name" />
      </div>
      <div className="mb-3">
        <input type="text" className="form-control" id="email" placeholder="E-mail Address" />
      </div>
      <div className="mb-3">
        <select className="form-select">
          <option selected>Matter</option>
          <option value="1">Complaint</option>
          <option value="2">Suggestions</option>
          <option value="3">Other</option>
        </select>
      </div>
      <div className="mb-3">
        <textarea rows={4} className="form-control" id="textarea" placeholder="Type here" />
      </div>
      <div className="mb-3">
        <button className="btn submit-btn">Submit</button>
      </div>
      <span className="border border-light"></span>
    </div>
   );
}

export default ContactUs;