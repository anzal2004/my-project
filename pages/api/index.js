import Link from 'next/link';

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to My Next.js App</h1>
      <p style={styles.text}>This is a beautifully designed home page using React JSX.</p>
      <Link href="/about" style={styles.link}>Go to About Page</Link>
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
