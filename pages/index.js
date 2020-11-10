function Home() {
    return (
      <div className="container">
        <h1>Hello Next.js</h1>
        <p>Let's explore different ways to style Next.js apps</p>
        <style jsx>{`
          .container {
            margin: 50px;
          }
          p {
            color: blue;
          }
        `}</style>
        <style jsx global>{`
          p {
            font-size: 20px;
          }
        `}</style>
      </div>
    )
  }
  
  export default Home