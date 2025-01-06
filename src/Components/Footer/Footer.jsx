import React from "react";
import './Style.css'

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.column}>
          <h4>Quick Links</h4>
          <ul style={styles.list}>
            <li><a href="/home" style={styles.link}>Home</a></li>
            <li><a href="/realtime-Market" style={styles.link}>Marketplace</a></li>
            <li><a href="/reatime-weather" style={styles.link}>Weather</a></li>
            <li><a href="/realtime-Educational" style={styles.link}>Educational Resources</a></li>
          </ul>
        </div>
        <div style={styles.column}>
          <h4>Contact Us</h4>
          <p>Email: <a href="mailto:support@farmersplatform.com" style={styles.link}>support@farmersplatform.com</a></p>
          <p>Phone: <a href="tel:+12345678900" style={styles.link}>+1-234-567-8900</a></p>
        </div>
        <div style={styles.column}>
          <h4>Follow Us</h4>
          <ul style={styles.list}>
            <li><a href="https://facebook.com" style={styles.link}><i className="fa-brands fa-facebook"></i>Facebook</a></li>
            <li><a href="https://twitter.com" style={styles.link}><i className="fa-brands fa-x-twitter"></i>Twitter</a></li>
            <li><a href="https://instagram.com" style={styles.link}><i className="fa-brands fa-instagram"></i>Instagram</a></li>
          </ul>
        </div>
      </div>
      <div style={styles.bottomBar}>
        <p>&copy; 2025 Farmers Platform. All rights reserved.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#2E3B55",
    color: "#FFF",
    padding: "20px 10px",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "flex-start",
    gap: "20px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  column: {
    flex: "1 1 300px", // Allows wrapping on smaller screens
    margin: "10px 0",
  },
  list: {
    listStyleType: "none",
    padding: 0,
  },
  link: {
    color: "#FFF",
    textDecoration: "none",
  },
  linkHover: {
    textDecoration: "underline",
  },
  bottomBar: {
    textAlign: "center",
    marginTop: "20px",
    borderTop: "1px solid #444",
    paddingTop: "10px",
  },
};

export default Footer;
