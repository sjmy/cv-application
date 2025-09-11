import "../styles/ContactInfoDisplay.css";

// Mock contact info
// const contactInfo = {
//   id: crypto.randomUUID(),
//   name: "Sleve McDichael",
//   email: "smcdich@proton.me",
//   phone: "555-5555",
// };

function ContactInfoDisplay({ contact }) {
  return (
    <section className="contactInfoDisplayContainer">
      <p>{contact.name}</p>
      <p>{contact.email}</p>
      <p>{contact.phone}</p>
    </section>
  );
}

export default ContactInfoDisplay;
