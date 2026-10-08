import { useState, useEffect } from "react"
import "./App.css"

function Header() {
  return (
    <header>
      <h1>Student Management System</h1>
    </header>
  )
}

function StudentProfile({ name, department, year, count, onComplete, onReset }) {
  useEffect(() => {
    const previousTitle = document.title

    document.title = `Practice Sessions: ${count}`

    return () => {
      document.title = previousTitle
    }
  }, [count])

  return (
    <div className="student-profile">
      <h2>Student Profile</h2>

      <p>
        <strong>Name:</strong> {name}
      </p>

      <p>
        <strong>Department:</strong> {department}
      </p>

      <p>
        <strong>Year:</strong> {year}
      </p>

      <p>
        <strong>Practice Sessions:</strong> {count}
      </p>

      <button onClick={onComplete}>
        Complete Practice
      </button>

      <button onClick={onReset}>
        Reset
      </button>
    </div>
  )
}

function Footer() {
  return (
    <footer>
      <p>© 2026 Student Management System</p>
    </footer>
  )
}

function App() {
  const student = {
    name: "Anu",
    department: "CSE",
    year: "3rd Year"
  }

  const [count, setCount] = useState(0)
  const [showProfile, setShowProfile] = useState(true)

  const handleComplete = () => {
    setCount(count + 1)
  }

  const handleReset = () => {
    setCount(0)
  }

  const handleShowHide = () => {
    setShowProfile(!showProfile)
  }

  return (
    <>
      <Header />

      <button onClick={handleShowHide}>
        {showProfile ? "Hide Profile" : "Show Profile"}
      </button>

      {showProfile && (
        <StudentProfile
          name={student.name}
          department={student.department}
          year={student.year}
          count={count}
          onComplete={handleComplete}
          onReset={handleReset}
        />
      )}

      <Footer />
    </>
  )
}

export default App