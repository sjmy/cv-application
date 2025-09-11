import "../styles/ContactInfoDisplay.css";

// Mock contact info
const contactInfo = {
  id: crypto.randomUUID(),
  name: "Sleve McDichael",
  email: "smcdich@proton.me",
  phone: "555-5555",
};

function ContactInfoDisplay() {
  return (
    <section className="contactInfoDisplayContainer">
      <p>{contactInfo.name}</p>
      <p>{contactInfo.email}</p>
      <p>{contactInfo.phone}</p>
    </section>
  );
}

export default ContactInfoDisplay;
