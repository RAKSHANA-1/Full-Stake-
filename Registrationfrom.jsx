import { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    course: "",
    skills: [],
    address: ""
  });

  const handleChanges = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name === "skills") {
      let updatedSkills = [...formData.skills];
      if (checked) {
        updatedSkills.push(value);
      } else {
        updatedSkills = updatedSkills.filter(skill => skill !== value);
      }
      setFormData({ ...formData, skills: updatedSkills });
      return;
    }
    
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration Data:", formData);
    alert("Registration Successful!\n\n" + JSON.stringify(formData, null, 2));
    localStorage.setItem('registrationData', JSON.stringify(formData));
  };

  const handleReset = () => {
    setFormData({
      firstName: "", lastName: "", email: "", phone: "", age: "",
      gender: "", course: "", skills: [], address: ""
    });
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      padding: "20px",
      fontFamily: "Arial, sans-serif"
    }}>
      <form style={{
        width: "100%",
        maxWidth: "450px",
        padding: "30px",
        background: "rgba(255, 255, 255, 0.95)",
        borderRadius: "15px",
        boxShadow: "0 15px 35px rgba(0,0,0,0.1)"
      }} onSubmit={handleSubmit}>
        
        <h2 style={{ 
          textAlign: "center", 
          marginBottom: "25px", 
          color: "#333",
          fontSize: "24px"
        }}>
          Registration Form
        </h2>

        {/* First Name */}
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", fontWeight: "bold", marginBottom: "5px" }}>
            First Name *
          </label>
          <input 
            type="text" 
            name="firstName"
            placeholder="Enter First Name" 
            value={formData.firstName}
            onChange={handleChanges}
            required 
            style={{
              width: "100%", padding: "12px", border: "2px solid #ddd", 
              borderRadius: "8px", fontSize: "16px", boxSizing: "border-box"
            }}
          />
        </div>

        {/* Last Name */}
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", fontWeight: "bold", marginBottom: "5px" }}>
            Last Name *
          </label>
          <input 
            type="text" 
            name="lastName"
            placeholder="Enter Last Name" 
            value={formData.lastName}
            onChange={handleChanges}
            required 
            style={{
              width: "100%", padding: "12px", border: "2px solid #ddd", 
              borderRadius: "8px", fontSize: "16px", boxSizing: "border-box"
            }}
          />
        </div>

        {/* Email */}
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", fontWeight: "bold", marginBottom: "5px" }}>
            Email *
          </label>
          <input 
            type="email" 
            name="email"
            placeholder="your@email.com" 
            value={formData.email}
            onChange={handleChanges}
            required 
            style={{
              width: "100%", padding: "12px", border: "2px solid #ddd", 
              borderRadius: "8px", fontSize: "16px", boxSizing: "border-box"
            }}
          />
        </div>

        {/* Phone */}
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", fontWeight: "bold", marginBottom: "5px" }}>
            Phone *
          </label>
          <input 
            type="tel" 
            name="phone"
            placeholder="1234567890" 
            value={formData.phone}
            onChange={handleChanges}
            required 
            style={{
              width: "100%", padding: "12px", border: "2px solid #ddd", 
              borderRadius: "8px", fontSize: "16px", boxSizing: "border-box"
            }}
          />
        </div>

        {/* Age */}
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", fontWeight: "bold", marginBottom: "5px" }}>
            Age *
          </label>
          <input 
            type="number" 
            name="age"
            placeholder="Enter Age" 
            value={formData.age}
            onChange={handleChanges}
            min="1" max="100"
            required 
            style={{
              width: "100%", padding: "12px", border: "2px solid #ddd", 
              borderRadius: "8px", fontSize: "16px", boxSizing: "border-box"
            }}
          />
        </div>

        {/* Gender */}
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", fontWeight: "bold", marginBottom: "10px" }}>
            Gender *
          </label>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <label style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}>
              <input 
                type="radio" 
                name="gender" 
                value="male" 
                onChange={handleChanges}
                style={{ width: "18px", height: "18px" }}
              /> Male
            </label>
            <label style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}>
              <input 
                type="radio" 
                name="gender" 
                value="female" 
                onChange={handleChanges}
                style={{ width: "18px", height: "18px" }}
              /> Female
            </label>
            <label style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}>
              <input 
                type="radio" 
                name="gender" 
                value="other" 
                onChange={handleChanges}
                style={{ width: "18px", height: "18px" }}
              /> Other
            </label>
          </div>
        </div>

        {/* Course */}
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", fontWeight: "bold", marginBottom: "5px" }}>
            Course *
          </label>
          <select 
            name="course"
            value={formData.course}
            onChange={handleChanges}
            required
            style={{
              width: "100%", padding: "12px", border: "2px solid #ddd", 
              borderRadius: "8px", fontSize: "16px", boxSizing: "border-box"
            }}
          >
            <option value="">Select Course</option>
            <option value="btech">B.Tech</option>
            <option value="mtech">M.Tech</option>
            <option value="bca">BCA</option>
            <option value="mca">MCA</option>
          </select>
        </div>

        {/* Skills */}
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", fontWeight: "bold", marginBottom: "10px" }}>
            Skills (Select multiple)
          </label>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {["HTML", "CSS", "JavaScript", "React", "Python"].map(skill => (
              <label key={skill} style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}>
                <input 
                  type="checkbox" 
                  name="skills" 
                  value={skill} 
                  checked={formData.skills.includes(skill)}
                  onChange={handleChanges}
                  style={{ width: "18px", height: "18px" }}
                />
                {skill}
              </label>
            ))}
          </div>
        </div>

        {/* Address */}
        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", fontWeight: "bold", marginBottom: "5px" }}>
            Address
          </label>
          <textarea 
            name="address"
            placeholder="Enter your address" 
            rows="3"
            value={formData.address}
            onChange={handleChanges}
            style={{
              width: "100%", padding: "12px", border: "2px solid #ddd", 
              borderRadius: "8px", fontSize: "16px", boxSizing: "border-box",
              resize: "vertical"
            }}
          />
        </div>

        {/* Buttons */}
        <div style={{ display: "flex", gap: "15px" }}>
          <button 
            type="button" 
            onClick={handleReset}
            style={{
              flex: 1, padding: "14px", border: "none", 
              background: "#ff6b6b", color: "white", 
              borderRadius: "8px", cursor: "pointer", 
              fontSize: "16px", fontWeight: "bold"
            }}
          >
            Reset
          </button>
          <button 
            type="submit"
            style={{
              flex: 1, padding: "14px", border: "none", 
              background: "#4CAF50", color: "white", 
              borderRadius: "8px", cursor: "pointer", 
              fontSize: "16px", fontWeight: "bold"
            }}
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
