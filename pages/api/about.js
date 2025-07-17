import Link from 'next/link';

export default function About() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>About Us</h1>
      <p style={styles.text}>This is a professional looking about page built with Next.js.</p>
      <Link href="/" style={styles.link}>Back to Home</Link>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '100px',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    color: '#0070f3',
    fontSize: '36px',
  },
  text: {
    fontSize: '18px',
    color: '#333',
  },
  link: {
    display: 'inline-block',
    marginTop: '20px',
    fontSize: '16px',
    color: 'white',
    backgroundColor: '#0070f3',
    padding: '10px 20px',
    borderRadius: '5px',
    textDecoration: 'none',
  },
};

